import { getContext, removeContext, setContext } from "."
import { CONTEXT_IN_PREFIX, CONTEXT_OUT_PREFIX } from "./context"
import type {
	Binding,
	BindingFunc,
	ChildDom,
	ConnectedBinding,
	DependencyBundle,
	ElementProps,
	Optional,
	Primitive,
	PropValueOrDerived,
	Tags,
	Val,
	ValidChildDomValue,
} from "./reactivity.types"

///////// Constants ////////

/** How often the deletion cycle runs to clean up disconnected states, in milliseconds. */
const DELETE_CYCLE_INTERVAL_MS = 1000

/** A constant DOM object that is always connected, used to prevent errors when a binding's DOM is not set. */
const ALWAYS_CONNECTED_DOM = { isConnected: true }

//////// Internal State ////////

/** The current reactive scope's dependencies, used to capture which states are accessed during a reactive function call.
 * Undefined if not in a reactive scope -- if the top-most level.
 */
let currentScopedDependencies: DependencyBundle | undefined = undefined

let currentScopedDerives: Binding[] | undefined = undefined

/** States that are being derived from the current 'reactive scope', used to capture dependencies. */
const CURRENT_SCOPED_DERIVED_STATES: Set<State<any>> = new Set()

/** States that have been altered since the last DOM update cycle. */
const DIRTY_STATES: Set<State<any>> = new Set()

/** States that are queued for deletion during the next deletion cycle. */
const STATE_DELETION_QUEUE: Set<State<any>> = new Set()

/** Whether a DOM update cycle is currently scheduled, to prevent multiple updates within the same cycle. */
let isDomUpdateScheduled = false

/** Whether a deletion cycle is currently scheduled, to prevent multiple deletions within the same cycle. */
let isDeletionScheduled = false

/** Dynamic cache of setter functions for different element types and their various properties to improve prop performance of repeated element props. */
const ELEMENT_PROP_SETTER_CACHE_BY_NAME: Record<
	string,
	((v: any) => void) | undefined
> = {}

///////// API ////////

/** Creates a piece of reactive data with the given initial value. */
export function state<T>(value: T, onDestroy?: () => void): State<T> {
	return new State(value, onDestroy)
}

/** Create a derived state or effect which reacts to changes to any states it depends on. */
export function derive<T>(func: () => T, onDestroy?: () => void): State<T> {
	const dependencies: DependencyBundle = {
		_getters: new Set<State<any>>(),
		_setters: new Set<State<any>>(),
	}

	const resultState = state(
		captureDependencies(func, dependencies, undefined),
		onDestroy,
	)

	const listener: Binding<T> = {
		func,
		state: resultState,
		_dom: undefined,
	}

	if (!listener._dom)
		if (!currentScopedDerives)
			listener._dom = document.getRootNode().firstChild
		else currentScopedDerives.push(listener)

	for (const getter of dependencies._getters)
		if (!dependencies._setters.has(getter)) {
			queueStateForDeletion(getter)
			getter._listeners.push(listener)
		}

	return resultState
}

/** Adds the given children elements or effects to the given DOM element and returns it. */
export function mount(dom: Element, ...children: readonly ChildDom[]): Element {
	// @ts-ignore ts-2589 because nesting needs to be limitless
	for (const rawChild of children.flat(Infinity) as (
		| ValidChildDomValue
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

/** Repository of all standard HTML element functions. */
export const html: Tags<HTMLElementTagNameMap> = new Proxy({}, tagHandler())

/** Repository of all SVG namespace element functions. */
export const svg: Tags<SVGElementTagNameMap> = new Proxy(
	{},
	tagHandler("http://www.w3.org/2000/svg"),
)

/** Repository of all MathML namespace element functions. */
export const math: Tags<MathMLElementTagNameMap> = new Proxy(
	{},
	tagHandler("http://www.w3.org/1998/Math/MathML"),
)

/** Replaces the given DOM element via the given reactive function. */
export function hydrate(
	dom: ChildNode,
	func: (dom: ChildNode) => Optional<ChildNode>,
): void {
	// @ts-ignore
	return update(dom, bind(func, dom))
}

/** Creates a reactive binding function from the given generic prop value.
 * @warning Type is coerced as directed, not safe.
 */
export function forceReactive<T>(
	value: Val<T> | PropValueOrDerived<T> | undefined,
): State<T | undefined> {
	if (typeof value === "function") return derive(value as () => T)

	if (value instanceof State) return derive(() => value.val as T)

	return derive(() => value as T)
}

/** Unwraps the given value, which can be a State, derivation function, or direct value.
 * @returns The unwrapped value.
 */
export function unwrapVal<T>(value: Val<T>): T {
	if (value instanceof State) return value.val

	if (typeof value === "function") return value()

	return value as T
}

///////// Internals ////////

/** Executes the given function with an optional initial value and captures any accessed states as dependencies. */
function captureDependencies<T, V>(
	func: (value: V) => T,
	dependencies: DependencyBundle,
	value: V,
): T {
	// Store current scoped dependency stack
	const prevDeps = currentScopedDependencies

	// Prepare new scoped dependency stack for this function
	currentScopedDependencies = dependencies

	// Execute the function, any accessed states will add themselves to `currentScopedDependencies`
	const result = func(value)

	// Reinstate previous scoped dependency stack
	currentScopedDependencies = prevDeps

	return result
}

/** Filters out all bindings that either have no DOM element or are disconnected from the main DOM from the given array. */
function filterConnectedBindings<T>(
	bindings: Binding<T>[],
): ConnectedBinding<T>[] {
	return bindings.filter((b) => b._dom?.isConnected) as ConnectedBinding<T>[]
}

/** Queues the given state for deletion and prepares a deletion sweep if not already running. */
function queueStateForDeletion<T>(state: State<T>): void {
	// Rather than `setInterval` we queue deletion cycles manually when called to reduce overhead
	if (!isDeletionScheduled) {
		isDeletionScheduled = true

		setTimeout(deleteQueuedStates, DELETE_CYCLE_INTERVAL_MS)
	}

	STATE_DELETION_QUEUE.add(state)
}

/** Deletes all states that have no bindings or listeners left, calling their destroy functions if defined. */
function deleteQueuedStates() {
	for (const state of STATE_DELETION_QUEUE) {
		state._bindings = filterConnectedBindings(state._bindings)
		state._listeners = filterConnectedBindings(state._listeners)

		if (state._bindings.length + state._listeners.length === 0)
			state._onDestroy?.()
	}

	STATE_DELETION_QUEUE.clear()

	isDeletionScheduled = false
}

/** Binds the given element-creation function and any states created within with a given element. */
function bind(
	func: (dom: ChildDom) => Optional<ChildDom>,
	dom?: ChildDom,
): ChildNode {
	const dependencies: DependencyBundle = {
		_getters: new Set<State<any>>(),
		_setters: new Set<State<any>>(),
	}
	const binding: Binding<ChildDom> = {
		func,
		state: undefined,
		_dom: undefined,
	}
	const prevNewDerives = currentScopedDerives

	currentScopedDerives = []

	const newDomBase = captureDependencies(func, dependencies, dom)

	const newDom =
		(newDomBase ?? document) instanceof Node
			? (newDomBase as ChildNode)
			: new Text(String(newDomBase))

	for (const getter of dependencies._getters)
		if (!dependencies._setters.has(getter)) {
			queueStateForDeletion(getter)
			getter._bindings.push(binding)
		}

	for (const newScopedDerive of currentScopedDerives) newScopedDerive._dom = newDom

	currentScopedDerives = prevNewDerives

	return (binding._dom = newDom)
}

/** Create a functional association which automatically reacts to any stateful data it accesses. */
function deriveDom<T extends ChildNode>(
	func: (dom: ChildNode) => T,
	resultState: State<T>,
	dom?: ChildNode,
): State<T> {
	const dependencies: DependencyBundle = {
		_getters: new Set<State<any>>(),
		_setters: new Set<State<any>>(),
	}

	resultState.val = captureDependencies(func, dependencies, resultState.raw)

	const newDomListener: Binding<T> = {
		func,
		state: resultState,
		_dom: dom,
	}

	if (!newDomListener._dom)
		if (!currentScopedDerives)
			// If there is no enclosing reactive scope (at top level), tie to the document root
			newDomListener._dom = ALWAYS_CONNECTED_DOM
		else currentScopedDerives.push(newDomListener)

	for (const getter of dependencies._getters)
		if (!dependencies._setters.has(getter)) {
			queueStateForDeletion(getter)
			getter._listeners.push(newDomListener)
		}

	return resultState
}

//////// DOM Manipulation ////////

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

/** Replaces the given target DOM element with the given replacement if defined, otherwise removes target element from DOM. */
function update(target: ChildNode, replacement: Optional<ChildNode>) {
	if (!replacement) return target.remove()

	if (replacement !== target) return target.replaceWith(replacement)
}

/** Updates all DOM elements that are connected to reactive states, derived states, or bindings that are listed as changed. */
function updateDoms() {
	const MAX_CHANGE_ITERATIONS = 100

	let iter = 0

	// Re-filter changed states in case some have 'un-changed' within the same cycle
	let stillChangedStates = [...DIRTY_STATES].filter(hasStateChanged)

	do {
		CURRENT_SCOPED_DERIVED_STATES.clear()

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
				connectedDerivedState._dom,
			)
			// @ts-expect-error Type 'undefined' is not assignable to type '{ isConnected: boolean; }'
			connectedDerivedState._dom = undefined
		}
	} while (
		++iter < MAX_CHANGE_ITERATIONS &&
		(stillChangedStates = [...CURRENT_SCOPED_DERIVED_STATES]).length > 0
	)

	const actuallyChangedStates = [...DIRTY_STATES].filter(hasStateChanged)

	DIRTY_STATES.clear()
	isDomUpdateScheduled = false

	for (const binding of new Set(
		actuallyChangedStates.flatMap(
			(s) => (s._bindings = filterConnectedBindings(s._bindings)),
		),
	)) {
		// @ts-expect-error Type mismatch for ChildNode and binding._dom
		update(binding._dom, bind(binding.func, binding._dom))
		// @ts-expect-error Type 'undefined' is not assignable to type '{ isConnected: boolean; }'
		binding._dom = undefined
	}

	// Update the old values of all changed states
	actuallyChangedStates.forEach((state) => (state._old = state._val))
}

/** Creates a proxy object that returns an element creation function for the accessed property for the given element namespace. */
function tagHandler(namespace?: string) {
	return {
		get: (_: any, name: string) => tag.bind(undefined, namespace, name),
	}
}

/** Checks if the given state has changed since the last time its bindings were updated. */
function hasStateChanged(state: State<any>): boolean {
	return state._val !== state._old
}

//////// Classes ////////

export class State<T> {
	/** The current value of the state. */
	_val: T

	/** The previous value of the state. */
	_old: T

	/** Links to any derived DOM state. */
	_bindings: Binding[]

	/** Links to any derived states. */
	_listeners: Binding[]

	/** The function to call when the state is destroyed. */
	_onDestroy?: () => void

	constructor(value: T, onDestroy?: () => void) {
		this._val = value
		this._old = value

		this._bindings = []
		this._listeners = []

		this._onDestroy = onDestroy
	}

	/** Sets the state's value and adds its assigner to the state's reactive dependencies. */
	set val(v: T) {
		currentScopedDependencies?._setters?.add(this)

		if (v === this._val) return

		this._val = v

		if (this._bindings.length + this._listeners.length === 0) {
			this._old = v

			return
		}

		CURRENT_SCOPED_DERIVED_STATES.add(this)

		if (!isDomUpdateScheduled) {
			isDomUpdateScheduled = true

			setTimeout(updateDoms)
		}

		DIRTY_STATES.add(this)
	}

	/** Gets the state's current value and adds its accessor to the state's reactive effects. */
	get val(): T {
		currentScopedDependencies?._getters?.add(this)
		return this._val
	}

	/** Sets the state's value without creating or triggering any reactivity. */
	set raw(v: T) {
		if (v === this._val) return

		this._val = v

		if (this._bindings.length + this._listeners.length === 0) {
			this._old = v

			return
		}
	}

	/** Gets the state's current value *without* adding any reactive effects to its accessor. */
	get raw(): T {
		return this._val
	}

	/** Gets the state's previous value and adds its accessor to the state's reactive effects. */
	get old(): T {
		currentScopedDependencies?._getters?.add(this)
		return this._old
	}
}
