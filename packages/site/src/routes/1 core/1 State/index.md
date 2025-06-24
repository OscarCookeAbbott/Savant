# State

> Create reactive data.

## Overview

Reactivity in Savant is primarily achieved via `state` objects which contain a value and manage any dependencies with other states:

```typescript
const num = state(42)
```

Once created, the value of a State can be directly read or written via its `.val` property:

```typescript
num.val++

console.log(num.val)
```

```console
> 43
```

Assigning a _new_ value to a state's `.raw` property will update reactive dependencies.

To prevent triggering [reactive updates](http://localhost:5173/core/Derive), such as during a complex operation etc, assignments can be made to `.rawVal` instead. Effects can similarly refer to `.rawVal` to avoid creating a dependency.

```typescript
num.rawVal++

console.log(num.val)
console.log(num.rawVal)
```

```console
> 43
> 43
```

## Signature

```typescript
/** Creates a piece of reactive data with the given initial value. */
function state<T>(value: T): State<T>
```

```typescript
class State<T> {
	/** The current value. Assigning will trigger reactivity. */
	val: T

	/** The current value. Assigning will not trigger reactivity. */
	rawVal: T
}
```

## Notes

### State variables should not be reassigned

`const` variables are recommended for **all** stateful data as reassigning the variable _itself_ will lose any stateful links to other states, the DOM, etc.

```typescript
// GOOD
num.val = 43

// BAD
num = 43
num = state(43)
```

### How it works

Fundamentally, a Savant `State` is a wrapper which stores a value and a list of other states that it relies on and that rely on it.
