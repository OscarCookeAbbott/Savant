# Context

> Cascading data.

## Overview

When writing complex interfaces and functionality data often needs to be passed down through multiple layers of components. Like from a pagination manager to various pagination controls that may be nested in the interface.

This _can_ be done by extracting the state of the manager out into whichever scope(s) it is used, and then manually passing that state to any nested components that require it. However this is not ideal as it requires the developer to create and maintain this coupling, and gets worse when components need to internally wrap other components which require that shared state, leading to large prop chains.

Like many other web frameworks, Savant offers 'context' functionality - think of it like CSS (_cascading style sheets_) but for **data**.

Context **Providers** may _write_ some context which **consumers** at any nested level of the DOM may then _read_. Nested providers override ancestor providers for their own descendents.

This flexible system allows loose and dynamic coupling which can be useful for anything from making systems easier to work with, to replacing static global app state.

## Example

```typescript
function PaginationManager(
    currentPage: State<number>,
    ...children: ChildDom[]
) {
    return html.div(
        {
            name: "Pagination Manager",
            context: { paginationPage: state },
            style: "display: contents;",
        },
        ...children,
    )
}

function Page() {
    const paginationPageContext = state(state(0))

    return RetrieveContext(
        { paginationPage: paginationPageContext },

        html.span("Current page: ", paginationPage.val),
    )
}

function PaginationButton() {
    const paginationPageContext = state(state(0))

    return RetrieveContext(
        { paginationPage: paginationPageContext },

        html.button({ onclick: () => paginationState.val.val++ }, "Next Page"),
    )
}

function App() {
    return html.div(
        PaginationManager(
            { currentPage: state(0) },
            Page(),
            PaginationButton(),
        ),
    )
}

add(document.body, App())
```

## Signature

```typescript
/** Sets context with the given key and value at the nearest DOM element. */
function setContext<T>(
    dom: HTMLElement,
    key: ContextKey,
    value: ContextValue<T>,
): void

/** Retrieves context with the given key if it exists.
 * Naively coerces to the given type. Apply type validation as needed.
 */
function getContext<T>(
    dom: HTMLElement,
    key: ContextKey,
): ContextProviderValue<T>

/** Mounts the given DOM element and then immediately retrieves the requested contexts. */
function RetrieveContext(
    context: Record<string, State<unknown> | ((val: State<unknown>) => void)>,
    dom: ChildNode,
): ChildNode
```

```typescript
type ContextKey = string
type ContextValue<T> = State<T> | T
type ContextProviderValue<T> = State<ContextValue<T> | undefined>
```

## Notes

### Type safety and validation

The context API does not itself validate that the context you retrieve matches the data format you expect, it trusts that you have either written safe context access or will validate the returned value yourself. Typically validation is unnecessary though since you have complete control over the context you write and read and thus can ensure you do not mix and match data formats within one context key.

### How it works

Since Savant aims to be a simple and smart framework, it eschews any kind of 'virtual DOM' for tracking component composition. As it also has no compiler Savant cannot statically analyse source code to determine how all context fits together.

Instead, Savant utilises good old CSS to handle the 'cascading' part of the system.

When context is written, Savant sets a CSS property whose name is based off the provided context key and whose value represents the provider via a random ID hash.

When context is read, Savant computes the value of the CSS property associated with the provided context key and then cross-references the retrieved provider ID with a global map of context value by provider, or with a default stateful `undefined` context value if no context exists.

Thus the entire cascade is handled automatically and efficiently by the browser's own CSS engine!

This does mean that the DOM can bloat with context CSS variables if contexts are written to in many places, but this is unlikely to be common nor does it present any actual issue beyond visual noise if debugging the DOM.
