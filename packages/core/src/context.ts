import { derive, state, State, Val } from ".";

//////// Types & Aliases ////////

type ContextKey = string & {}
type ContextValue<T> = Val<T>

type ContextCssKey = string & {}

type ContextProviderId = string & {}
type ContextProviderValue<T> = State<ContextValue<T> | undefined> & { triggerRecheck: State<number>}

//////// Internal State ////////

const CONTEXT_BY_PROVIDER = new Map<ContextProviderId, ContextProviderValue<unknown>>();

//////// API ////////

/** Sets context with the given key and value at the nearest DOM element. */
export function setContext<T>(dom: HTMLElement, key: ContextKey, value: ContextValue<T>): void {
    // Prepare to trigger context recalculation if the dom element doesn't already have this context
    const triggerInsertRecheck = getDirectContextProviderId(dom, key) === ""
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
    ensureContextProviderExists(key);

    // Existence of some context has been ensured via `ensureContextProviderExists()` above
    return getContextFromDom(dom, key) as ContextProviderValue<T>

    // TODO: Re-calculate context automatically if current provider's value itself changes, like `RetrieveContext()` does
}

/** Mounts the given DOM element and then immediately retrieves the requested contexts. */
export function RetrieveContext(context: Record<string, State<unknown> | ((val: State<unknown>) => void)>, dom: ChildNode): ChildNode {
    setTimeout(() => {
        Object.entries(context).forEach(([key, value]) => {
            let retrievedContext = getContext(dom as HTMLElement, key)

            // Reactively re-read context if provider value updates (whether due to being overridden directly or by a new context provider being added below in case it is between the current element and the context provider)
            derive(() => {
                if (retrievedContext.triggerRecheck.val) {
                    const oldRetrievedContext = retrievedContext

                    retrievedContext = getContext(dom as HTMLElement, key)

                    if (retrievedContext === oldRetrievedContext) return

                    if (value instanceof State) {
                        value.val = retrievedContext
                    } else {
                        value(retrievedContext)
                    }
                }
            })

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

/** Ensures there will be a set context with the given key.
 * Naively coerces to the given type. Apply type validation as needed.
 */
function ensureContextProviderExists(key: ContextKey): void {
    const dom = document.documentElement

    if (getContextFromDom(dom, key)) return

    // TODO: Maybe replace with just a 'base value' in the map to avoid bloating DOM debugging?
    setContextOnDom(dom, key, undefined)
}

/** Sets new context value at the associated DOM location or updates existing context if present.
 * @returns Whether any context was newly set or changed.
 */
function setContextOnDom<T>(dom: HTMLElement, key: ContextKey, value: ContextValue<T>): boolean {
    const cssKey = createContextCssKey(key)

    let contextProviderId: ContextProviderId = getDirectContextProviderId(dom, key)

    if (contextProviderId === "") {
        contextProviderId = createProviderId();
        dom.style.setProperty(cssKey, contextProviderId);
    }

    let contextProviderValue = CONTEXT_BY_PROVIDER.get(contextProviderId)

    if (contextProviderValue === undefined) {
        contextProviderValue = Object.assign(state(value), { triggerRecheck: state(0) })

        CONTEXT_BY_PROVIDER.set(contextProviderId, contextProviderValue)
        return true
    }

    if (contextProviderValue.rawVal === value) return false

    contextProviderValue.val = value

    return true
}

/** Retrives context value at the associated DOM location if present. */
function getContextFromDom(dom: HTMLElement, key: ContextKey): ContextProviderValue<unknown> | undefined {
    const cssKey = createContextCssKey(key)

    const contextProviderId = getCascadingContextProviderId(dom, cssKey)

    if (contextProviderId === "") return undefined

    return CONTEXT_BY_PROVIDER.get(contextProviderId)
}

/** Creates a CSS variable name for the context key. */
function createContextCssKey(key: ContextKey): ContextCssKey {
    return `--savant-context-${key}`
}

/** Creates a random ID for a context provider. */
function createProviderId(): ContextProviderId {
    return crypto.randomUUID().slice(0, 8)
}

/** Retrieves the context provider ID from the DOM element's local style.
 * Will return an empty string if no context is set.
 */
function getDirectContextProviderId(dom: HTMLElement, key: ContextKey): ContextProviderId {
    return dom.style.getPropertyValue(createContextCssKey(key)).trim()
}

/** Retrieves the context provider ID from the DOM element's computed cascading style.
 * Will return an empty string if no context is set.
 */
function getCascadingContextProviderId(dom: HTMLElement, key: ContextCssKey): ContextProviderId {
    return getComputedStyle(dom).getPropertyValue(key).trim()
}
