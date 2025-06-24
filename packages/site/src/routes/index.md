# Savant

> A refreshingly simple and smart web framework with pep!

Savant is a tiny (3kB), zero-dependency, pure-TypeScript and pure-DOM framework for reactive web development.

Using nothing but standard JS/TS functions and any existing tooling, _anybody_ can build a reactive website in minutes.

Inspired by the incredible [VanJS](https://vanjs.org).

## Counter Example

```typescript
// Counter.ts
import { add, html, state } from "@savant/core"
import { Router } from "@savant/routing"

function Counter() {
    const value = state(0)

    return html.div(
        "Counter: ",
        value,
        " ",
        html.button({ onclick: () => ++value.val }, "👍"),
        html.button({ onclick: () => --value.val }, "👎"),
    )
}

function App() {
    return Router({
        routes: {
            "/": html.div("Hello world!"),
            "/counter": Counter,
        },
    })
}

add(document.body, App())
```
