import { update } from "./dom"
import type {
	ChildDom,
	DomListener,
	Optional,
	PropValueOrDerived,
	ReactiveScope,
	StateListener,
	Val,
} from "./reactivity.types"

//////// Config ////////

/** How many iterations of change propagation to perform before giving up, to prevent infinite loops. */
const MAX_REACTIVE_DEPTH = 100

/** How often the deletion cycle runs to clean up disconnected states, in milliseconds. */
const CLEAN_CYCLE_INTERVAL_MS = 1000

/** The persistent DOM element used for derived states and effects that do not have a specific DOM element assigned and thus must exist eternally. */
const PERSISTENT_DOM: ChildNode = document.getRootNode().firstChild!

//////// Internal State ////////

/** The current reactive scope's dependencies, used to capture which states are accessed during a reactive function call.
 * Undefined if not in a reactive (derived or equivalent) scope.
 */
let currentReactiveScope: ReactiveScope | undefined = undefined

/** Any listeners that are accessed within a captured DOM scope, which are then linked to that DOM once the scope is completed.
 * Undefined if not in a component (`mount()`) scope.
 */
let currentDomScope: StateListener[] | undefined = undefined

/** States that are being derived from the current 'reactive scope', used to capture dependencies. */
export const CURRENT_DERIVED_SCOPE = new Set<State<any>>()

/** States that have been altered since the last DOM update cycle. */
export const ALTERED_STATES = new Set<State<any>>()

/** States that are queued for deletion during the next deletion cycle. */
export const STATE_CLEANING_QUEUE = new Set<State<any>>()

/** Whether a reactive dependency propagation cycle is currently scheduled, to prevent multiple instances within the same cycle. */
let isPropagationScheduled = false

/** Whether a state cleaning cycle is currently scheduled, to prevent multiple sweeps within the same cycle. */
let isCleanScheduled = false

///////// API ////////

/** Creates a piece of reactive data with the given initial value. */
export function state<T>(value: T, onDispose?: () => void): State<T> {
	return new State(value, onDispose)
}

/** Create a derived state or effect which reacts to changes to any states it depends on. */
export function derive<T>(func: () => T, onDispose?: () => void): State<T> {
	const newReactiveScope: ReactiveScope = {
		getters: new Set<State<any>>(),
		setters: new Set<State<any>>(),
	}

	const newState = state(
		captureDependencies(func, newReactiveScope, undefined),
		onDispose,
	)

	const newListener: StateListener<T> = {
		func,
		state: newState,
	}

	// If there is no specific DOM for this effect, use the current DOM scope if it exists, otherwise use the persistent DOM
	if (currentDomScope) currentDomScope.push(newListener)
	else newListener.dom = PERSISTENT_DOM

	// Inform any read but not written states that they have been derived
	for (const getter of newReactiveScope.getters.difference(
		newReactiveScope.setters,
	)) {
		getter._listeners.push(newListener)
		queueStateForCleaning(getter)
	}

	return newState
}

/** Creates a reactive binding function from the given generic prop value.
 * @warning Type is coerced. Apply type validation if necessary.
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

	return value
}

///////// Internals ////////

/** Schedules propagation of reactive DOM changes for the end of this cycle, if not already. */
export function scheduleReactivityPropagation() {
	if (isPropagationScheduled) return

	isPropagationScheduled = true

	// Use setTimeout to ensure that the DOM update happens after the current event loop
	setTimeout(propagateReactivity)
}

/** Propagates all changed state to their derived states recursively and then updates all derived DOM elements. */
function propagateReactivity() {
	// Re-filter altered states in case some have 'un-changed' within the same cycle
	let alteredStates = [...ALTERED_STATES].filter(hasStateChanged)

	let propagationIterations = 0

	// Update all listeners, iteratively in case effects cause other effects
	// Run at least once even if there are no altered states so listeners are still cleaned
	do {
		CURRENT_DERIVED_SCOPE.clear()

		// Clean and collect all unique affected listeners
		const alteredStateListeners = new Set(
			alteredStates.flatMap(
				(s) => (s._listeners = s._listeners.filter(isConnectedBinding)),
			),
		)

		// Update all unique affected listeners by creating new replacements
		alteredStateListeners.forEach(refreshListener)

		// If any more states were altered in this sweep, loop again to update their listeners too
		alteredStates = [...CURRENT_DERIVED_SCOPE]

		// Cancel early if reactivity is too deep
		if (propagationIterations++ > MAX_REACTIVE_DEPTH) {
			console.error(
				"Reactive propagation recursion limit exceeded. Further propagation cancelled.",
			)
			break
		}
	} while (alteredStates.length > 0)

	// All newly internally updated states have been added to the altered states, so we can now filter them again to get **all** altered states this cycle
	alteredStates = [...ALTERED_STATES].filter(hasStateChanged)

	ALTERED_STATES.clear()

	// Clean and collect all unique affected bindings
	const alteredStateBindings = new Set(
		alteredStates.flatMap(
			(s) => (s._bindings = s._bindings.filter(isConnectedBinding)),
		),
	)

	// Update all unique affected bindings by creating new replacements
	for (const binding of alteredStateBindings) {
		update(binding.dom, bind(binding.func, binding.dom))

		// Disconnect the existing binding so it can be disposed later
		// @ts-ignore ts-2322 because we narrowed the type to ensure the safety of the updating
		binding.dom = undefined
	}

	// Update the old values of all changed states
	alteredStates.forEach((state) => (state._old = state._val))

	isPropagationScheduled = false
}

/** Replaces the given listener with a new one with freshly recaptured dependencies. */
export function refreshListener<T>(listener: StateListener<T>): void {
	const newReactiveScope: ReactiveScope = {
		getters: new Set<State<any>>(),
		setters: new Set<State<any>>(),
	}

	listener.state.val = captureDependencies(
		listener.func,
		newReactiveScope,
		undefined,
	)

	// The existing listener may be referenced in other states, so create a fresh one in case dependencies changed
	const newListener: StateListener<T> = { ...listener }

	// If there is no specific DOM for this listener, use the current DOM scope if it exists (which will then link this listener to the relevant element), otherwise use a persistent element
	if (!newListener.dom)
		if (currentDomScope) currentDomScope.push(newListener)
		else newListener.dom = PERSISTENT_DOM

	// Inform any read but not written states that they have been derived
	for (const getter of newReactiveScope.getters.difference(
		newReactiveScope.setters,
	)) {
		getter._listeners.push(newListener)
		queueStateForCleaning(getter)
	}

	// Disconnect the existing listener so it can be disposed later
	listener.dom = undefined
}

/** Executes the given function with an optional initial value and captures any accessed states as dependencies. */
function captureDependencies<T, V>(
	func: (value: V) => T,
	dependencies: ReactiveScope,
	value: V,
): T {
	// Store current scoped dependency stack
	const prevScope = currentReactiveScope

	// Prepare new scoped dependency stack for this function
	currentReactiveScope = dependencies

	// Execute the function, any accessed states will add themselves to `currentReactiveScope`
	const result = func(value)

	// Reinstate previous scoped dependency stack
	currentReactiveScope = prevScope

	return result
}

/** Checks that the given binding has a DOM element and that the element is connected to the main DOM. */
export function isConnectedBinding(binding: {
	dom?: ChildNode
}): binding is { dom: ChildNode } {
	return !!binding.dom?.isConnected
}

/** Queues the given state for a dependency clean and prepares a deletion sweep if not already running. */
function queueStateForCleaning<T>(state: State<T>): void {
	STATE_CLEANING_QUEUE.add(state)

	queueCleaningCycle()
}

/** Schedules a cleaning sweep cycle to run after a delay, if not already scheduled.
 * @note Scheduled manually only when called to reduce overhead versus `setInterval()`
 */
function queueCleaningCycle(): void {
	if (isCleanScheduled) return

	isCleanScheduled = true

	setTimeout(cleanQueuedStates, CLEAN_CYCLE_INTERVAL_MS)
}

/** Cleans the bindings and listeners of all queued states so that effects-less states can be GC'd.
 * Calls newly-empty states' onDispose functions if defined.
 */
function cleanQueuedStates() {
	for (const state of STATE_CLEANING_QUEUE) {
		state._listeners = state._listeners.filter(isConnectedBinding)
		state._bindings = state._bindings.filter(isConnectedBinding)

		// If state has no bindings or listeners it should be deleted imminently, so call its onDispose function
		if (state._listeners.length + state._bindings.length === 0)
			state._onDispose?.()
	}

	STATE_CLEANING_QUEUE.clear()

	isCleanScheduled = false
}

/** Binds the given element-creation function and any states created within with a given element. */
export function bind(
	func: (dom: ChildDom) => Optional<ChildDom>,
	dom?: ChildNode,
): ChildNode {
	const newReactiveScope: ReactiveScope = {
		getters: new Set<State<any>>(),
		setters: new Set<State<any>>(),
	}

	// Cache previous dom binding scope and create a temporary new one
	const prevDomScope = currentDomScope
	currentDomScope = []

	const newDomRaw = captureDependencies(func, newReactiveScope, dom)

	// Ensure the new dom is an actual DOM node
	const newDom =
		(newDomRaw ?? PERSISTENT_DOM) instanceof Node
			? (newDomRaw as ChildNode)
			: new Text(String(newDomRaw))

	const newDomBinding: DomListener = {
		func,
		dom: newDom,
	}

	// Inform any read but not written states that they have been derived
	for (const getter of newReactiveScope.getters.difference(
		newReactiveScope.setters,
	)) {
		getter._bindings.push(newDomBinding)
		queueStateForCleaning(getter)
	}

	for (const newListener of currentDomScope)
		newListener.dom = newDomBinding.dom

	// Restore any previous dom binding scope
	currentDomScope = prevDomScope

	return newDom
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

	/** Any derived state. */
	_listeners: StateListener[]

	/** Any derived DOM assignment. */
	_bindings: DomListener[]

	/** The function to call when the state is disposed. */
	_onDispose?: () => void

	constructor(value: T, onDispose?: () => void) {
		this._val = value
		this._old = value

		this._bindings = []
		this._listeners = []

		this._onDispose = onDispose
	}

	/** Sets the state's value and adds its assigner to the state's reactive dependencies. */
	set val(v: T) {
		currentReactiveScope?.setters?.add(this)

		// Don't trigger reactivity if the value hasn't changed
		if (v === this._val) return

		this._val = v

		// If there are no effects skip the full reactivity system and just update the old value
		if (this._bindings.length + this._listeners.length === 0) {
			this._old = v

			return
		}

		CURRENT_DERIVED_SCOPE.add(this)

		ALTERED_STATES.add(this)

		scheduleReactivityPropagation()
	}

	/** Gets the state's current value and adds its accessor to the state's reactive effects. */
	get val(): T {
		currentReactiveScope?.getters?.add(this)
		return this._val
	}

	/** Sets the state's value without creating or triggering any reactivity. */
	set raw(v: T) {
		this._val = v

		// If there are no effects skip the full reactivity system and just update the old value
		if (this._bindings.length + this._listeners.length === 0) this._old = v
	}

	/** Gets the state's current value *without* adding any reactive effects to its accessor. */
	get raw(): T {
		return this._val
	}

	/** Gets the state's previous value and adds its accessor to the state's reactive effects. */
	get old(): T {
		currentReactiveScope?.getters?.add(this)
		return this._old
	}
}
