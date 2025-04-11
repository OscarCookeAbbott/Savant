# Savant - Simple, Smart Reactivity

Savant is a tiny, zero-dependency, pure-TypeScript and pure-DOM framework for reactive web development.

Using nothing but standard JS/TS functions and any existing tooling, _anybody_ can build a reactive website in minutes.

Inspired by the incredible VanJS.

```typescript
import { add, html, state } from "savant"

function Counter() {
    const counter = state(0)

    return html.div(
        "❤️ ",
        counter,
        " ",
        html.button({ onclick: () => ++counter.val }, "👍"),
        html.button({ onclick: () => --counter.val }, "👎"),
    )
}

add(document.body, Counter())
```

```typescript
import { add, html, state } from "savant"
import { Router } from "savant/routing"

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
