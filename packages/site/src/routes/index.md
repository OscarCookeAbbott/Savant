# Savant

> A refreshingly simple and smart web framework with pep!

Savant is a tiny (3kB), zero-dependency, pure-TypeScript and pure-DOM framework for reactive web development.

Using nothing but standard JS/TS functions and any existing tooling, _anybody_ can build a reactive website in minutes.

Inspired by the incredible [VanJS](https://vanjs.org).

## Example - Counter

```typescript
import { mount, html, state } from "@savant/core"
import { Router } from "@savant/routing"

function Counter() {
	const count = state(0)

	return html.div(
		"Count: ",
		count,
		" ",
		html.button({ onclick: () => ++value.val }, "+"),
		html.button({ onclick: () => --value.val }, "-"),
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

mount(document.body, App())
```
