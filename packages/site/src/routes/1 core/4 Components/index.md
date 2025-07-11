# Components

> Create composable functionality.

## Overview

Components in Savant are just functions, similar to other frameworks like React.

They can take arguments, create internal state, and produce (return) some DOM interface.

```typescript
function ExampleComponent(count: number) {
	const doubleCount = derive(() => count * 2)

	return html.div(doubleCount)
}
```

This allows components to be entirely modular, functional and composable and allows them to be organised as desired.

## Notes

### How internal state is managed

Savant automatically ties created state to the nearest parent `ChildDom`, which in the case of components is the scope of their function and its return value.

If and when a component's DOM becomes disconnected, any internal state will then be automatically disposed of in the next sweep.

### Return type

If statically typed return types are desired, it is recommended to not be hyper-specific with them.

For example, a component returning `html.div(...)` could use `HTMLDivElement` as its return type, however that level of specificity is typically and ideally unnecessary for its caller to know.

Consider instead `HTMLElement`: it provides the distinction against other valid `ChildDom` options (like `HTMLElement[]` or `string`) without being hyper-specific in a way that could require further maintenance if and when the return type changes to `HTMLSpanElement` for example.
