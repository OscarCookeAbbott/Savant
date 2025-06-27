import { scheduleDomUpdate } from "./dom"
import type {
	ChildDom,
	DomBinding,
	Optional,
	PropValueOrDerived,
	ReactiveScope,
	Val,
} from "./reactivity.types"

///////// Constants ////////

/** How often the deletion cycle runs to clean up disconnected states, in milliseconds. */
const CLEAN_CYCLE_INTERVAL_MS = 1000

//////// Internal State ////////

/** The current reactive scope's dependencies, used to capture which states are accessed during a reactive function call.
 * Undefined if not in a reactive (derived or equivalent) scope.
 */
let currentReactiveScope: ReactiveScope | undefined = undefined

/** The current scoped DOM bindings, used to capture which DOM elements are created during a reactive function call.
 * Undefined if not in a reactive (derived or equivalent) scope.
 */
let currentDomScope: DomBinding[] | undefined = undefined

/** States that are being derived from the current 'reactive scope', used to capture dependencies. */
export const CURRENT_DERIVED_SCOPE = new Set<State<any>>()

/** States that have been altered since the last DOM update cycle. */
export const ALTERED_STATES = new Set<State<any>>()

/** States that are queued for deletion during the next deletion cycle. */
export const STATE_CLEANING_QUEUE = new Set<State<any>>()

/** Whether a state cleaning cycle is currently scheduled, to prevent multiple sweeps within the same cycle. */
let isCleanScheduled = false

///////// API ////////

/** Creates a piece of reactive data with the given initial value. */
export function state<T>(value: T, onDispose?: () => void): State<T> {
	return new State(value, onDispose)
}

/** Create a derived state or effect which reacts to changes to any states it depends on. */
export function derive<T>(func: () => T, onDispose?: () => void): State<T> {
	// Create state with undefined initial value which will be immediately overwritten
	const derivedState = state<T>(undefined as T, onDispose)

	return deriveInternal(func, derivedState, undefined)
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

/** Create a functional association which automatically reacts to any stateful data it accesses. */
export function deriveInternal<T>(
	func: (dom: T) => T,
	state: State<T>,
	dom?: ChildNode,
): State<T> {
	const newReactiveScope: ReactiveScope = {
		getters: new Set<State<any>>(),
		setters: new Set<State<any>>(),
	}

	state.val = captureDependencies(func, newReactiveScope, state.raw)

	const newDomBinding: DomBinding<T> = {
		func,
		state,
		dom,
	}

	// If there is no specific DOM for this effect, use the current DOM scope if it exists, otherwise use the persistent DOM
	if (!newDomBinding.dom)
		if (currentDomScope) currentDomScope.push(newDomBinding)
		else newDomBinding.dom = document.getRootNode().firstChild

	for (const getter of newReactiveScope.getters.difference(
		newReactiveScope.setters,
	)) {
		getter._listeners.push(newDomBinding)
		queueStateForCleaning(getter)
	}

	return state
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
export function isConnectedBinding<T>(
	binding: DomBinding<T>,
): binding is DomBinding<T> & { dom: ChildNode } {
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
		state._bindings = state._bindings.filter(isConnectedBinding)
		state._listeners = state._listeners.filter(isConnectedBinding)

		// If state has no bindings or listeners it should be deleted imminently, so call its onDispose function
		if (state._bindings.length + state._listeners.length === 0)
			state._onDispose?.()
	}

	STATE_CLEANING_QUEUE.clear()

	isCleanScheduled = false
}

/** Binds the given element-creation function and any states created within with a given element. */
export function bind(
	func: (dom: ChildDom) => Optional<ChildDom>,
	dom?: ChildDom,
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
		(newDomRaw ?? document) instanceof Node
			? (newDomRaw as ChildNode)
			: new Text(String(newDomRaw))

	const newDomBinding: DomBinding<ChildDom> = {
		func,
		state: undefined,
		dom: newDom,
	}

	for (const getter of newReactiveScope.getters.difference(
		newReactiveScope.setters,
	)) {
		getter._bindings.push(newDomBinding)
		queueStateForCleaning(getter)
	}

	for (const newScopedBinding of currentDomScope)
		newScopedBinding.dom = newDomBinding.dom

	// Restore any previous dom binding scope
	currentDomScope = prevDomScope

	return newDom
}

//////// Classes ////////

export class State<T> {
	/** The current value of the state. */
	_val: T

	/** The previous value of the state. */
	_old: T

	/** Links to any derived DOM state. */
	_bindings: DomBinding[]

	/** Links to any derived states. */
	_listeners: DomBinding[]

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

		scheduleDomUpdate()
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
