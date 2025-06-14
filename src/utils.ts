import { derive, PropValueOrDerived, State, Val } from "."

// FUNCTIONS
/** Creates a promise which resolves after the given duration. */
export function delay(durationMS = 0): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, durationMS))
}

/** Determines whether the given value is Record type. */
export function checkIsRecord(value: unknown) {
    return (
        typeof value === "object" &&
        value !== null &&
        !Object.getOwnPropertyDescriptor(value, "nodeType")
    )
}

/** Creates a copy of the given array with the given item removed if present, otherwise returns the original array. */
export function arrayWithoutItem<T>(array: T[], item: T): T[] {
    const itemIdx = array.indexOf(item)

    if (itemIdx === -1) return array

    return [...array.slice(0, itemIdx), ...array.slice(itemIdx + 1)]
}

/** Returns a new array with the presence of the given item in the given array toggled: adding if not present or removing if already present. */
export function arrayToggleItem<T>(array: T[], item: T): T[] {
    const possibleItemIdx = array.indexOf(item)

    if (possibleItemIdx === -1) return array.concat(item)

    return arrayWithoutItem(array, item)
}

/** Executes the given callback whenever the user clicks outside of the given target element or its descendents. */
export function detectExternalClick(
    target: HTMLElement,
    callback: (event: MouseEvent) => void,
): AbortController {
    const abortController = new AbortController()

    document.addEventListener(
        "click",
        (event) => {
            if (!(event.target instanceof Node)) return

            if (target.contains(event.target)) return

            // Ignore DOM-detached targets (due to coincidental Svelte reactivity)
            if (!document.contains(event.target)) return

            callback(event)
        },
        { signal: abortController.signal },
    )

    return abortController
}

/** Rust-style match statement. */
export function match<T, T2>(value: T, checks: [T, T2][]): T2 {
    for (const check of checks) {
        if (check[0] === value) return check[1]
    }

    throw `error: non-exhaustive patterns: ${value} not covered`
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

/** Checks whether the given target either is or includes the given value or values. */
export function isOrArrayHas<T>(
    target: T | Array<T>,
    value: T | Array<T>,
): boolean {
    const targets = Array.isArray(target) ? target : [target]
    const values = Array.isArray(value) ? value : [value]

    for (const requiredValue of values)
        if (targets.includes(requiredValue)) return true

    return false
}

/** Unwraps the given value, which can be a State, derivation function, or direct value.
 * @returns The unwrapped value.
 */
export function unwrapVal<T>(value: Val<T>): T {
    if (value instanceof State) return value.val

    if (typeof value === "function") return value()

    return value
}
