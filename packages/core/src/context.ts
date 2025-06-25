import { ChildDom, derive, html, State, state, Val } from "."

//////// Types & Aliases ////////

type ContextKey = string & {}
type ContextValue<T> = Val<T>

type ContextProviderValue<T> = State<T | undefined>
interface ContextProvider {
	listener: EventListener
	contexts: Map<ContextKey, ContextProviderValueInternal<unknown>>
}

type ContextProviderValueInternal<T> = ContextProviderValue<T> & {
	triggerRecheck: State<number>
}
interface ContextEventDetail {
	key: ContextKey
	context: ContextProviderValueInternal<unknown> | undefined
}

//////// Config ////////

export const CONTEXT_EVENT_NAME = "savant-context-request"
export const CONTEXT_IN_PREFIX = "context-"
export const CONTEXT_OUT_PREFIX = "context-out-"

//////// Internal State ////////

const PROVIDER_BY_DOM = new WeakMap<HTMLElement, ContextProvider>()

//////// API ////////

/** Sets context with the given key and value at the nearest DOM element. */
export function setContext<T>(
	dom: HTMLElement,
	key: ContextKey,
	value: ContextValue<T>,
): void {
	// Prepare to trigger context recalculation if the dom element doesn't already have this context
	const triggerInsertRecheck = getContextProviderValue(dom, key) === undefined
	const existingContextProviderValue =
		triggerInsertRecheck && getContextFromDom(dom, key)

	// Set the context, return early if it already exists and has the same value
	if (!setContextOnDom(dom, key, value)) return

	// Trigger context recalculation if the dom element doesn't already have this context
	if (existingContextProviderValue)
		existingContextProviderValue.triggerRecheck.val++
}

/** Retrieves context with the given key if it exists.
 * Naively coerces to the given type. Apply type validation if necessary.
 */
export function getContext<T>(
	dom: HTMLElement,
	key: ContextKey,
): ContextProviderValue<T> {
	const retrievedContext = getEnsuredContextFromDom(
		dom,
		key,
	) as ContextProviderValueInternal<T>

	const returnContext = state(retrievedContext)

	// Reactively recalculate context if existing context provider is marked as potentially stale
	derive(() => {
		if (retrievedContext.triggerRecheck.val) {
			const newContext = getContextFromDom(
				dom,
				key,
			) as ContextProviderValueInternal<T>

			if (newContext === returnContext.val) return

			returnContext.val = newContext
		}
	})

	return createContextProviderValue(derive(() => returnContext.val?.val))
}

/** Removes context of the given key from the given DOM element, if it exists. */
export function removeContext(dom: HTMLElement, key: ContextKey): void {
	const existingProvider = getContextProvider(dom)

	// No context provider exists for this DOM element, nothing to remove
	if (existingProvider === undefined) return

	// Prepare to trigger context recalculation if the dom element doesn't already have this context
	const existingContextProviderValue = existingProvider.contexts.get(key)

	if (existingContextProviderValue === undefined) return

	existingProvider.contexts.delete(key)

	// If no more contexts are present, remove the provider from the DOM element
	if (existingProvider.contexts.size === 1) {
		PROVIDER_BY_DOM.delete(dom)
		dom.removeEventListener(CONTEXT_EVENT_NAME, existingProvider.listener)
	}

	// Trigger context recalculation for consumers of the existing context
	existingContextProviderValue.triggerRecheck.val++
}

//////// Components ////////

/** Retrieves context of the given key at the component's position in the DOM and passes it to the given child generator. */
export function ContextProbe<T extends ContextValue<unknown>>(
	key: ContextKey,
	out: (context: ContextProviderValue<T>) => ChildDom,
): ChildNode {
	const context: ContextProviderValueInternal<T> = createContextProviderValue(
		state(undefined),
	)

	const probeDom = html.contextProbe(
		{
			[`${CONTEXT_OUT_PREFIX}${key}`]: context,
			style: "display: contents;",
		},

		out(context),
	)

	return probeDom
}

//////// Internal Functions ////////

/** Sets new context value at the associated DOM location or updates existing context if present.
 * @returns Whether any context was newly set or changed.
 */
function setContextOnDom<T>(
	dom: HTMLElement,
	key: ContextKey,
	value: T | undefined,
): ContextProviderValueInternal<T> {
	const existingProvider = getContextProvider(dom)

	// First context being set at this DOM element, create full context provider
	if (existingProvider === undefined) {
		const newListener = (event: Event) => {
			const customEvent = event as CustomEvent<ContextEventDetail>

			const providerValue = getContextProviderValue(
				dom,
				customEvent.detail.key,
			)

			if (providerValue === undefined) return

			customEvent.detail.context = providerValue
			event.stopPropagation()
		}

		// Setup event listener for reacting to context requests
		dom.addEventListener(CONTEXT_EVENT_NAME, newListener)

		const newProviderValue = Object.assign(state(value), {
			triggerRecheck: state(0),
		})

		const newProvider = {
			listener: newListener,
			contexts: new Map([[key, newProviderValue]]),
		}

		PROVIDER_BY_DOM.set(dom, newProvider)

		return newProviderValue
	}

	const existingProviderValue = existingProvider.contexts.get(
		key,
	) as ContextProviderValueInternal<T>

	// DOM element is already a context provider but not for this key, add new context key value
	if (existingProviderValue === undefined) {
		const newProviderValue = Object.assign(state(value), {
			triggerRecheck: state(0),
		})

		existingProvider.contexts.set(key, newProviderValue)

		return newProviderValue
	}

	// DOM element is already a context provider for this key, update the value if it has changed
	if (existingProviderValue.raw !== value) existingProviderValue.val = value

	return existingProviderValue
}

/** Retrieves context with the given key at the given DOM element, ensuring that at *least* a root context provider exists.
 * Naively coerces to the given type. Apply type validation if necessary.
 */
function getEnsuredContextFromDom(
	dom: HTMLElement,
	key: ContextKey,
): ContextProviderValueInternal<unknown> {
	const existingContext = getContextFromDom(dom, key)

	if (existingContext !== undefined) return existingContext

	// TODO: Maybe replace with just a 'base value' in the map to avoid bloating DOM debugging?
	const newContext = setContextOnDom(dom, key, undefined)

	return newContext
}

/** Retrives context value at the associated DOM location if present. */
function getContextFromDom(
	dom: HTMLElement,
	key: ContextKey,
): ContextProviderValueInternal<unknown> | undefined {
	const event = new CustomEvent<ContextEventDetail>(CONTEXT_EVENT_NAME, {
		bubbles: true,
		cancelable: true,
		detail: { key, context: undefined },
	})

	dom.dispatchEvent(event)

	return event.detail.context
}

/** Retrieves the context provider for the given DOM element, if it exists. */
function getContextProvider(dom: HTMLElement): ContextProvider | undefined {
	return PROVIDER_BY_DOM.get(dom)
}

/** Retrieves the context provider value for the given DOM element and key, if it exists. */
function getContextProviderValue(
	dom: HTMLElement,
	key: ContextKey,
): ContextProviderValueInternal<unknown> | undefined {
	return getContextProvider(dom)?.contexts.get(key)
}

/** Adds a `triggerRecheck` state property to finish incomplete ContextProviderValues. */
function createContextProviderValue<T>(
	from: ContextProviderValue<T>,
): ContextProviderValueInternal<T> {
	return Object.assign(from, { triggerRecheck: state(0) })
}
