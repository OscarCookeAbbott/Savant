# Derive

While independent reactive data itself is created via `state()`, data which is _dependent_ upon other reactive data can be created via `derive()`:

```typescript
const num = state(42)
const doubleNum = derive(() => num.val * 2)
```

Then whenever a dependency is altered, the derived state will re-evaluate:

```typescript
num.val++

console.warn(num.val) // Output: 43
console.warn(doubleNum.val) // Output: 86
```

Value-less _effects_ can also inherently be defined via `derive()` by just not returning a value:

```typescript
derive(() => console.log(num.val))

num.val++

// Output: 43
```

In derived definitions where you want to _exclude_ some accessed states from reactive dependence you can utilise the state's `.rawVal` property.

This is most often useful for refining reactive chains to limit unnecessary re-execution for optimisation reasons.

```typescript
const num = state(42)
const doubleNum = derive(() => num.val * 2)

derive(() => console.log(num.val, doubleNum.rawVal))

num.val++

// Output
// 43 -- 84
```

In Savant _all_ dependent state is invariably marked by the arrow syntax `() => ...`, so whenever you see arrow functions outside of normal logic flow, think 'reactive'.

## Signature

```typescript
function derive<T>(func: () => T): State<T>
```

_Creates a reactive object with the given_ `initVal` _initial value._

## Details

### Reactivity is deferred

All states wait until the next browser tick (via `setTimeout(() => ..., 0)`) to update any derivations.

This provides a major automatic performance benefit because it means that simultaneous updates to multiple states which are collectively depended upon by some derived state will only update that derivation _once_:

```typescript
const num = state(42)
const otherNum = state(24)

derive(() => console.log(num, otherNum))

num++
otherNum++

// Output
// 43 -- 25
```

### Why arrow functions are required

Arrow functions `() => ...` are used for _all_ reactive dependence in Savant because it is the only way to defer and/or repeat execution of a clause beyond the scope of its definition.

Other reactive frameworks that allow derived state without arrow function syntax (eg. `derive(num * 2)`) use a _compiler_ to allow this shorthand.
