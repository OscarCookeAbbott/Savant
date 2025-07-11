# Derive

> Create reactive effects.

## Overview

While independent reactive data itself is created via `state()`, data which is _dependent_ upon other reactive data can be created via `derive()`:

```typescript
const num = state(42)
const doubleNum = derive(() => num.val * 2)
```

Then whenever a dependency is altered, the derived state will re-evaluate:

```typescript
num.val++

console.warn(num.val)
console.warn(doubleNum.val)
```

```console
> 43
> 86
```

Value-less _effects_ can also inherently be defined via `derive()` by omitting a return value:

```typescript
derive(() => console.log(num.val))

num.val++
```

```console
> 43
```

In derived definitions where you want to _exclude_ some accessed states from reactive dependence you can utilise the state's `.raw` property.

This is most often useful for refining reactive chains to limit unnecessary re-execution for optimisation reasons.

```typescript
const num = state(42)
const doubleNum = derive(() => num.val * 2)

derive(() => console.log(num.val, doubleNum.raw))

num.val++
```

```console
> 43 84
```

In Savant _all_ dependent state is invariably marked by the arrow syntax `() => ...`, so whenever you see arrow functions outside of normal logic flow, think 'reactive'.

## Signature

```typescript
/** Create a derived state or effect which reacts to changes to any states it depends on. */
function derive<T>(func: () => T): State<T>
```

## Notes

### Reactivity is deferred

All states wait until the next browser tick (via `setTimeout(..., 0)`) to update any derivations.

This provides a major automatic performance benefit because it means that simultaneous updates to multiple states which are collectively depended upon by some derived state will only update that derivation _once_:

```typescript
const num = state(42)
const otherNum = state(24)

derive(() => console.log(num, otherNum))

num++
otherNum++
```

```console
> 43 25
```

However this can occasionally lead to unexpected behaviour, so keep this in mind when writing dependent reactivity intended _within_ the standard 'tick'.

### Derived states are states

The `derive()` function itself creates a new `State` which reacts to any dependency changes, it is just a state that should not be manually assigned to.

### Why arrow functions are necessary

Arrow functions `() => ...` are used for _all_ reactive dependence in Savant because it is the only way to defer and/or repeat execution of an _expression_ beyond the scope of its definition.

Other reactive frameworks that allow derived state without arrow function syntax (eg. `derive(num * 2)`) use a _compiler_ to allow this shorthand, but ultimately work via the exact same mechanism.

### How it works

When a new state is created, via `state()`, `derive()` or from binding functions passed to elements etc, the state sets itself as the local 'state scope'. Any states that are created within the call stack of its creation then subscribe to the enclosing scope state.

At regular intervals Savant checks all states and deletes (clears references so it can be recognised as garbage) any which have no dependent states.
