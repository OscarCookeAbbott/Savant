/** Creates a promise which resolves after the given duration. */
export function delay(durationMS = 0): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, durationMS))
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
	whitelist: HTMLElement[] = [],
): AbortController {
	const abortController = new AbortController()

	document.addEventListener(
		"click",
		(event) => {
			if (!(event.target instanceof Node)) return

			const targetNode = event.target as Node

			if (target.contains(targetNode)) return

			if (whitelist.some((element) => element.contains(targetNode)))
				return

			// Ignore DOM-detached targets (due to coincidental reactivity)
			if (!document.contains(targetNode)) return

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

/** Checks whether the given target either is or includes the given value or values. */
export function isOrArrayHas<T>(target: T | T[], value: T | T[]): boolean {
	const targets = Array.isArray(target) ? target : [target]
	const values = Array.isArray(value) ? value : [value]

	for (const requiredValue of values)
		if (targets.includes(requiredValue)) return true

	return false
}
