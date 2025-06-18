# Elements

In Savant all HTML elements are created with their respective tag functions which create and return the pure DOM node:

```typescript
const button: HTMLButtonElement = html.button()
```

These tag functions allow passing any props to the element via the first object:

```typescript
const button = html.button({ name: "Demo Button", style: "color: red;" })
```

And the tag functions also allow nesting of child elements, values, etc...

```typescript
const list = html.div(
    { style: "display: flex; flex-direction: column;" },

    html.button({ style: "color: red;" }, "I'm a button!"),

    html.span("I am not :("),
)
```

## Reactivity

Reactive states and even just derivation arrow functions can be given directly to a tag function prop or child and Savant will automatically update them on change:

```typescript
const username = state("")

const usernameInput = html.input({
    value: username,
    oninput: (event) => (username.val = event.target.value),
    placeholder: "Enter username..."
})

const usernameDisplay = html.div(() => `Hello ${username.val}!`)
// const alternateDisplay = html.div("Hello ", username)

const container = html.div(usernameInput, usernameDisplay)

savant.add(document, container)
```

### Scoping Reactions

It is important to consider the scoping of your reactivity when creating components, because reactivity is bound to the lowest enclosing reactive scope (including element definitions), thus in the following example the first button is efficient because only its content will update when `username` is changed, while the second button will be entirely destroyed and recreated instead.

```typescript
const username = state("Jarnathan")

const dom = html.div(
    // Good scoping
    html.button(() => username.val.toLowercase()),

    // Bad scoping
    () => html.button(username.val.toLowercase()),
)
```

Similarly, if you encounter random inexplicable behaviour with elements disappearing for no reason etc, it is likely you have an unbound reaction causing reactivity to misbehave.

This may sound like a hassle, but most of the time you won't even need to consider it! Once you do encounter a scoping issue you will very quickly learn to intuit when you do need to consider your scoping and how easy it is to do.

Generally reactivity should be scoped at the lowest level possible, which typically involves placing a preceding arrow function `() =>`.

## Signature

```typescript
function [element](propsOrChild: ElementProps<element> | ChildDom, ...restChildren: ChildDom[]): [element]
```

_Creates a DOM element of the type called with the given props and/or children_.

## Details

Due to the suboptimal typing of the HTML API, Savant must force-leniency for element props typing, but it still includes the official type in the definition to assist you in writing code. For example, the typing for and SVG's `viewBox` is `PropValueOrDerived<Primitive | SVGAnimatedRect>`, because it must allow you to use a string like HTML itself does.
