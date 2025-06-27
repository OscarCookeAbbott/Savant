//////// API ////////

import { getContext, removeContext, setContext } from "."
import { CONTEXT_IN_PREFIX, CONTEXT_OUT_PREFIX } from "./context"
import {
	ALTERED_STATES,
	bind,
	CURRENT_DERIVED_SCOPE,
	derive,
	isConnectedBinding,
	refreshListener,
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

//////// Config ////////

/** How many iterations of change propagation to perform before giving up, to prevent infinite loops. */
const MAX_CHANGE_ITERATIONS = 100

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
	// Re-filter altered states in case some have 'un-changed' within the same cycle
	let alteredStates = [...ALTERED_STATES].filter(hasStateChanged)

	// Update all listeners, iteratively in case effects cause other effects
	for (let iter = 0; iter < MAX_CHANGE_ITERATIONS; iter++) {
		CURRENT_DERIVED_SCOPE.clear()

		// Collect all unique affected listeners
		const alteredStateListeners = new Set(
			alteredStates.flatMap(
				(s) => (s._listeners = s._listeners.filter(isConnectedBinding)),
			),
		)

		// Update all unique affected listeners by creating new replacements
		for (const listener of alteredStateListeners) {
			refreshListener(listener)
		}

		// If any more states were altered in this sweep, loop again to update their listeners too
		alteredStates = [...CURRENT_DERIVED_SCOPE]

		if (alteredStates.length === 0) break
	}

	// All newly internally updated states have been added to the altered states, so we can now filter them again to get **all** altered states
	alteredStates = [...ALTERED_STATES].filter(hasStateChanged)

	ALTERED_STATES.clear()

	// Collect all unique affected bindings
	const alteredStateBindings = new Set(
		alteredStates.flatMap(
			(s) => (s._bindings = s._bindings.filter(isConnectedBinding)),
		),
	)

	// Update all unique affected bindings by creating new replacements
	for (const binding of alteredStateBindings) {
		// The filtering guarantees that the binding DOM exists
		update(binding.dom, bind(binding.func, binding.dom))

		// Disconnect the existing binding so it can be disposed later
		// @ts-ignore ts-2322 because we narrowed the type to ensure the safety of the updating
		binding.dom = undefined
	}

	// Update the old values of all changed states
	alteredStates.forEach((state) => (state._old = state._val))

	isDomUpdateScheduled = false
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
