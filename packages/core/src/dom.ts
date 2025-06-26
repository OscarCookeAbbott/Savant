//////// API ////////

import { getContext, removeContext, setContext } from "."
import { CONTEXT_IN_PREFIX, CONTEXT_OUT_PREFIX } from "./context"
import {
	ALTERED_STATES,
	bind,
	CURRENT_DERIVED_SCOPE,
	derive,
	deriveDom,
	filterConnectedBindings,
	State,
} from "./reactivity"
import {
	BindingFunc,
	ChildDom,
	ElementProps,
	Elements,
	NativeChildDom,
	Optional,
	Primitive,
	PropValueOrDerived,
} from "./reactivity.types"

//////// State ////////

/** Dynamic cache of setter functions for different element types and their various properties to improve prop performance of repeated element props. */
const ELEMENT_PROP_SETTER_CACHE_BY_NAME: Record<
	string,
	((v: any) => void) | undefined
> = {}

/** Whether a DOM update cycle is currently scheduled, to prevent multiple updates within the same cycle. */
let isDomUpdateScheduled = false

//////// API ////////

/** Repository of all standard HTML element functions. */
export const html: Elements<HTMLElementTagNameMap> = new Proxy({}, tagHandler())

/** Repository of all SVG namespace element functions. */
export const svg: Elements<SVGElementTagNameMap> = new Proxy(
	{},
	tagHandler("http://www.w3.org/2000/svg"),
)

/** Repository of all MathML namespace element functions. */
export const math: Elements<MathMLElementTagNameMap> = new Proxy(
	{},
	tagHandler("http://www.w3.org/1998/Math/MathML"),
)

/** Adds the given children elements or effects to the given DOM element and returns it. */
export function mount(dom: Element, ...children: readonly ChildDom[]): Element {
	// @ts-ignore ts-2589 because nesting needs to be limitless
	for (const rawChild of children.flat(Infinity) as (
		| NativeChildDom
		| State<Optional<Primitive>>
		| BindingFunc
	)[]) {
		let child = undefined

		if (rawChild instanceof State) child = bind(() => rawChild.val)
		else if (typeof rawChild === "function") child = bind(rawChild)
		else if (rawChild instanceof Node) child = rawChild
		else if (
			["boolean", "string", "number", "bigint"].includes(typeof rawChild)
		)
			child = String(rawChild)

		if (child != undefined) dom.append(child)
	}

	return dom
}

/** Replaces the given DOM element via the given reactive function. */
export function hydrate(
	dom: ChildNode,
	func: (dom: ChildNode) => Optional<ChildNode>,
): void {
	// @ts-ignore
	return update(dom, bind(func, dom))
}

//////// Internals ////////

/** Schedules propagation of reactive DOM changes for the end of this cycle, if not already. */
export function scheduleDomUpdate() {
	if (isDomUpdateScheduled) return

	isDomUpdateScheduled = true

	// Use setTimeout to ensure that the DOM update happens after the current event loop
	setTimeout(updateDoms)
}

/** Updates all DOM elements that are connected to reactive states, derived states, or bindings that are listed as changed. */
function updateDoms() {
	const MAX_CHANGE_ITERATIONS = 100

	let iter = 0

	// Re-filter changed states in case some have 'un-changed' within the same cycle
	let stillChangedStates = [...ALTERED_STATES].filter(hasStateChanged)

	do {
		CURRENT_DERIVED_SCOPE.clear()

		const connectedDerivedStates = new Set(
			stillChangedStates.flatMap(
				(s) => (s._listeners = filterConnectedBindings(s._listeners)),
			),
		)

		for (const connectedDerivedState of connectedDerivedStates) {
			deriveDom(
				connectedDerivedState.func,
				// @ts-expect-error State<any> | undefined not assignable to State<any>
				connectedDerivedState.state,
				connectedDerivedState.dom,
			)
			// @ts-expect-error Type 'undefined' is not assignable to type '{ isConnected: boolean; }'
			connectedDerivedState.dom = undefined
		}
	} while (
		++iter < MAX_CHANGE_ITERATIONS &&
		(stillChangedStates = [...CURRENT_DERIVED_SCOPE]).length > 0
	)

	const actuallyChangedStates = [...ALTERED_STATES].filter(hasStateChanged)

	ALTERED_STATES.clear()
	isDomUpdateScheduled = false

	for (const binding of new Set(
		actuallyChangedStates.flatMap(
			(s) => (s._bindings = filterConnectedBindings(s._bindings)),
		),
	)) {
		// @ts-expect-error Type mismatch for ChildNode and binding._dom
		update(binding.dom, bind(binding.func, binding.dom))
		// @ts-expect-error Type 'undefined' is not assignable to type '{ isConnected: boolean; }'
		binding.dom = undefined
	}

	// Update the old values of all changed states
	actuallyChangedStates.forEach((state) => (state._old = state._val))
}

/** Replaces the given target DOM element with the given replacement if defined, otherwise removes target element from DOM. */
function update(target: ChildNode, replacement: Optional<ChildNode>) {
	if (!replacement) return target.remove()

	if (replacement !== target) return target.replaceWith(replacement)
}

/** Checks if the given state has changed since the last time its bindings were updated. */
function hasStateChanged(state: State<any>): boolean {
	return state._val !== state._old
}

/** Create a new DOM element of the given namespace, kind and with the given props and children. */
function tag<T>(
	ns: string | undefined,
	name: string,
	propsOrChild?: ElementProps<T> | ChildDom,
	...restChildren: readonly ChildDom[]
): globalThis.Element {
	// Of all potential `propsOrChild` values, only a props object will *directly* inherit Object
	const hasProps = Object.getPrototypeOf(propsOrChild) === Object.prototype

	const [{ is, ...props }, ...children] = hasProps
		? [propsOrChild as ElementProps<T>, restChildren]
		: [{} as ElementProps<T>, [propsOrChild as ChildDom, ...restChildren]]

	const dom = ns
		? document.createElementNS(ns, name, { is })
		: document.createElement(name, { is })

	for (let [propName, propValue] of Object.entries(props)) {
		const isOptional = propName.startsWith("$")
		propName = isOptional ? propName.slice(1) : propName

		const getPropDescriptor: (
			proto: any,
		) => PropertyDescriptor | undefined = (proto: any) =>
			proto
				? (Object.getOwnPropertyDescriptor(proto, propName) ??
					getPropDescriptor(Object.getPrototypeOf(proto)))
				: undefined

		const cacheKey = `${name},${propName}`

		// Set prop via proper function if existent
		const elementPropSetter = (ELEMENT_PROP_SETTER_CACHE_BY_NAME[
			cacheKey
		] ??= getPropDescriptor(Object.getPrototypeOf(dom))?.set)

		const setter = propName.startsWith("on")
			? <T>(value: (arg?: any) => T, oldValue?: (arg?: any) => T) => {
					const eventName = propName.slice(2)

					if (oldValue) dom.removeEventListener(eventName, oldValue)

					dom.addEventListener(eventName, value)
				}
			: (elementPropSetter?.bind(dom) ??
				dom.setAttribute.bind(dom, propName))

		if (propName.startsWith(CONTEXT_OUT_PREFIX)) {
			const contextKey = propName.slice(CONTEXT_OUT_PREFIX.length)

			setTimeout(() => {
				const retrievedContext = getContext(
					dom as HTMLElement,
					contextKey,
				)

				if (
					typeof propValue === "object" &&
					propValue instanceof State
				) {
					propValue.val = retrievedContext.val
				} else if (typeof propValue === "function") {
					propValue(retrievedContext)
				} else {
					console.warn(
						`Context out property "${propName}" on element <${name}> expects a function or State, but got ${typeof propValue}.`,
					)
				}
			})

			continue
		}

		if (propName.startsWith(CONTEXT_IN_PREFIX)) {
			bind(
				() => (
					!isOptional ||
					(typeof propValue === "object" &&
						propValue instanceof State &&
						propValue.val)
						? setContext(
								dom as HTMLElement,
								propName.slice(CONTEXT_IN_PREFIX.length),
								propValue,
							)
						: removeContext(
								dom as HTMLElement,
								propName.slice(CONTEXT_IN_PREFIX.length),
							),
					dom
				),
			)

			continue
		}

		if (!propName.startsWith("on") && typeof propValue === "function") {
			propValue = derive(propValue as PropValueOrDerived<any>)
		}

		if (typeof propValue === "object" && propValue instanceof State) {
			bind(
				() => (
					!isOptional || propValue.val
						? setter(propValue.val, propValue._old)
						: dom.removeAttribute(propName),
					dom
				),
			)

			continue
		}

		if (isOptional) {
			bind(
				() => (
					propValue.val
						? setter(propValue)
						: dom.removeAttribute(propName),
					dom
				),
			)
		} else {
			// @ts-expect-error TODO: Fix type mismatch
			setter(propValue)
		}
	}

	return mount(dom, children)
}

/** Creates a proxy object that returns an element creation function for the accessed property for the given element namespace. */
function tagHandler(namespace?: string) {
	return {
		get: (_: any, name: string) => tag.bind(undefined, namespace, name),
	}
}
