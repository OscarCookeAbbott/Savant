import { PropValueOrDerived, State, Val } from "./index";
/** Creates a promise which resolves after the given duration. */
export declare function delay(durationMS?: number): Promise<void>;
/** Determines whether the given value is Record type. */
export declare function checkIsRecord(value: unknown): boolean;
/** Creates a copy of the given array with the given item removed if present, otherwise returns the original array. */
export declare function arrayWithoutItem<T>(array: T[], item: T): T[];
/** Returns a new array with the presence of the given item in the given array toggled: adding if not present or removing if already present. */
export declare function arrayToggleItem<T>(array: T[], item: T): T[];
/** Executes the given callback whenever the user clicks outside of the given target element or its descendents. */
export declare function detectExternalClick(target: HTMLElement, callback: (event: MouseEvent) => void): AbortController;
/** Rust-style match statement. */
export declare function match<T, T2>(value: T, checks: [T, T2][]): T2;
/** Creates a reactive binding function from the given generic prop value.
 * @warning Type is coerced as directed, not safe.
 */
export declare function forceReactive<T>(value: Val<T> | PropValueOrDerived<T> | undefined): State<T | undefined>;
/** Checks whether the given target either is or includes the given value or values. */
export declare function isOrArrayHas<T>(target: T | Array<T>, value: T | Array<T>): boolean;
/** Unwraps the given value, which can be a State, derivation function, or direct value.
 * @returns The unwrapped value.
 */
export declare function unwrapVal<T>(value: Val<T>): T;
