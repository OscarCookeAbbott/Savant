# Savant Routing

> Make site navigation easy.

## Overview

Savant provides a built-in, modular routing system that allows you to lay out your content however you prefer.

Using just the `Router` and `Link` components, you can get a single-page-app running in no time.

**Demo**

```typescript
import { mount } from "savant"
import { Router, Link } from "savant/routing"

function App() {
    const rootPage = html.div(
        "This is the root page!",

        Link({ href: "/other" }, "Other page")
    )

    const otherPage = html.div(
        "This is the other page!",

        Link({ href: "/" }, "Root page")
    )

    return Router(
        ["/": rootPage],
        ["/other": otherPage],
    )
}

mount(document.body, App())
```
