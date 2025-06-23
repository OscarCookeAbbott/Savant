import { derive, state, State, Val } from ".";

//////// Types & Aliases ////////

type ContextKey = string & {}
type ContextValue<T> = Val<T>

type ContextProviderValue<T> = State<ContextValue<T> | undefined> & { triggerRecheck: State<number>}
type ContextProvider = Map<ContextKey, ContextProviderValue<unknown>>

type ContextEventDetail = {
    key: ContextKey;
    context: ContextProviderValue<unknown> | undefined;
}

//////// Config ////////

const CONTEXT_EVENT_NAME = "savant-context-request"

//////// Internal State ////////

const CONTEXT_BY_PROVIDER = new WeakMap<HTMLElement, ContextProvider>();

//////// API ////////

/** Sets context with the given key and value at the nearest DOM element. */
export function setContext<T>(dom: HTMLElement, key: ContextKey, value: ContextValue<T>): void {
    // Prepare to trigger context recalculation if the dom element doesn't already have this context
    const triggerInsertRecheck = getContextProviderValue(dom, key) === undefined
    const existingContextProviderValue = triggerInsertRecheck && getContextFromDom(dom, key)

    // Set the context, return early if it already exists and has the same value
    if (!setContextOnDom<T>(dom, key, value)) return

    // Trigger context recalculation if the dom element doesn't already have this context
    if (existingContextProviderValue)
        existingContextProviderValue.triggerRecheck.val++
}

/** Retrieves context with the given key if it exists.
 * Naively coerces to the given type. Apply type validation as needed.
 */
export function getContext<T>(dom: HTMLElement, key: ContextKey): ContextProviderValue<T> {
    const retrievedContext = getEnsuredContextFromDom(dom, key)

    const returnContext = state(retrievedContext)

    // Reactively recalculate context if existing context provider is marked as potentially stale
    derive(() => {
        if (retrievedContext.triggerRecheck.val) {
            const newContext = getContextFromDom(dom, key) as ContextProviderValue<T>

            if (newContext === returnContext.val) return

            returnContext.val = newContext
        }
    })

    // Not technically a `ContextProviderValue`, but consumers don't care about the `triggerRecheck`
    return derive(() => returnContext.val.val) as ContextProviderValue<T>
}

/** Mounts the given DOM element and then immediately retrieves the requested contexts. */
export function RetrieveContext(context: Record<string, State<unknown> | ((val: State<unknown>) => void)>, dom: ChildNode): ChildNode {
    setTimeout(() => {
        Object.entries(context).forEach(([key, value]) => {
            let retrievedContext = getContext(dom as HTMLElement, key)

            if (value instanceof State) {
                value.val = retrievedContext
            } else {
                value(retrievedContext)
            }
        })
    })

    return dom
}

//////// Internal Functions ////////

/** Sets new context value at the associated DOM location or updates existing context if present.
 * @returns Whether any context was newly set or changed.
 */
function setContextOnDom<T>(dom: HTMLElement, key: ContextKey, value: ContextValue<T> | undefined): ContextProviderValue<T> {
    const existingProvider = getContextProvider(dom)

    // First context being set at this DOM element, create full context provider
    if (existingProvider === undefined) {
        // Setup event listener for reacting to context requests
        dom.addEventListener(CONTEXT_EVENT_NAME, (event: Event) => {
            const customEvent = event as CustomEvent<ContextEventDetail>

            const providerValue = getContextProviderValue(dom, customEvent.detail.key)

            if (providerValue === undefined) return

            customEvent.detail.context = providerValue
            event.stopPropagation()
        })

        const newProviderValue = Object.assign(state(value), { triggerRecheck: state(0) })

        const newProvider = new Map([[key, newProviderValue]])

        CONTEXT_BY_PROVIDER.set(dom, newProvider)

        return newProviderValue
    }

    const existingProviderValue = existingProvider.get(key) as ContextProviderValue<T>

    // DOM element is already a context provider but not for this key, add new context key value
    if (existingProviderValue === undefined) {
        const newProviderValue = Object.assign(state(value), { triggerRecheck: state(0) })

        existingProvider.set(key, newProviderValue)

        return newProviderValue
    }

    // DOM element is already a context provider for this key, update the value if it has changed
    if (existingProviderValue.rawVal !== value)
        existingProviderValue.val = value

    return existingProviderValue
}

/** Retrieves context with the given key at the given DOM element, ensuring that at *least* a root context provider exists.
 * Naively coerces to the given type. Apply type validation as needed.
 */
function getEnsuredContextFromDom(dom: HTMLElement, key: ContextKey): ContextProviderValue<unknown> {
    const existingContext = getContextFromDom(dom, key)

    if (existingContext !== undefined) return existingContext

    // TODO: Maybe replace with just a 'base value' in the map to avoid bloating DOM debugging?
    const newContext = setContextOnDom(dom, key, undefined)

    return newContext
}

/** Retrives context value at the associated DOM location if present. */
function getContextFromDom(dom: HTMLElement, key: ContextKey): ContextProviderValue<unknown> | undefined {
    const event = new CustomEvent<ContextEventDetail>(CONTEXT_EVENT_NAME, { bubbles: true, cancelable: true, detail: { key, context: undefined } })

    dom.dispatchEvent(event)

    return event.detail.context
}

/** Retrieves the context provider for the given DOM element, if it exists. */
function getContextProvider(dom: HTMLElement): Map<ContextKey, ContextProviderValue<unknown>> | undefined {
    return CONTEXT_BY_PROVIDER.get(dom)
}

/** Retrieves the context provider value for the given DOM element and key, if it exists. */
function getContextProviderValue(dom: HTMLElement, key: ContextKey): ContextProviderValue<unknown> | undefined
{
    return getContextProvider(dom)?.get(key)
}
