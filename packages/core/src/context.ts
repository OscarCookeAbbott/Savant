import { state, State, Val } from ".";

//////// Types & Aliases ////////

type ContextKey = string & {}
type ContextValue<T> = Val<T>

type ContextCssKey = string & {}

type ContextProviderId = string & {}
type ContextProviderValue<T> = State<ContextValue<T> | undefined> & {}

//////// Internal State ////////

const CONTEXT_BY_PROVIDER = new Map<ContextProviderId, ContextProviderValue<unknown>>();

//////// API ////////

/** Sets context with the given key and value at the nearest DOM element. */
export function setContext<T>(dom: HTMLElement, key: ContextKey, value: ContextValue<T>): void {
    const existingContextProviderValue = getContextFromDom(dom, key)

    setContextOnDom<T>(dom, key, value)

    if (existingContextProviderValue) {
        // TODO: Trigger context recalculation of existing context listeners in case they are descendents
        // existingContextProviderValue._listeners...
    }
}

/** Retrieves context with the given key if it exists.
 * Naively coerces to the given type. Apply type validation as needed.
 */
export function getContext<T>(dom: HTMLElement, key: ContextKey): ContextProviderValue<T> {
    ensureContextProviderExists(key);

    // Existence of some context has been ensured via `ensureContextProviderExists()` above
    return getContextFromDom(dom, key) as ContextProviderValue<T>

    // TODO: Re-calculate context automatically if current provider's value itself changes
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

/** Ensures there will be a set context with the given key.
 * Naively coerces to the given type. Apply type validation as needed.
 */
function ensureContextProviderExists(key: ContextKey): void {
    const dom = document.documentElement

    if (getContextFromDom(dom, key)) return

    // TODO: Maybe replace with just a 'base value' in the map to avoid bloating DOM debugging?
    setContextOnDom(dom, key, undefined)
}

/** Sets new context value at the associated DOM location or updates existing context if present. */
function setContextOnDom<T>(dom: HTMLElement, key: ContextKey, value: ContextValue<T>): void {
    const cssKey = createContextCssKey(key)

    let contextProviderId: ContextProviderId = dom.style.getPropertyValue(cssKey).trim()

    if (contextProviderId === "") {
        contextProviderId = createProviderId();
        dom.style.setProperty(cssKey, contextProviderId);
    }

    let contextProviderValue = CONTEXT_BY_PROVIDER.get(contextProviderId)

    if (contextProviderValue) {
        contextProviderValue.val = value
    } else {
        contextProviderValue = state(value)
        CONTEXT_BY_PROVIDER.set(contextProviderId, contextProviderValue)
    }
}

/** Retrives context value at the associated DOM location if present. */
function getContextFromDom(dom: HTMLElement, key: ContextKey): ContextProviderValue<unknown> | undefined {
    const cssKey = createContextCssKey(key)

    const contextProviderId = getContextProviderId(dom, cssKey)

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

/** Retrieves the context provider ID from the DOM element's computed style.
 * Will return an empty string if no context is set.
 */
function getContextProviderId(dom: HTMLElement, key: ContextCssKey): ContextProviderId {
    return getComputedStyle(dom).getPropertyValue(key).trim()
}
