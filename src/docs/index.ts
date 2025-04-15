import Header from "./Header"
import Navbar from "./Navbar"
import { add, html } from ".."
import { Router } from "../routing"
import rootRoute from "./routes/index.ts"

const reactivityRoutes = import.meta.glob("./routes/reactivity/**/index.ts", {
    eager: true,
})
const routingRoutes = import.meta.glob("./routes/routing/**/index.ts", {
    eager: true,
})
const componentsRoutes = import.meta.glob("./routes/components/**/index.ts", {
    eager: true,
})
const examplesRoutes = import.meta.glob("./routes/examples/**/index.ts", {
    eager: true,
})

const routeMaker = (dirRoutes: Record<string, unknown>) =>
    Object.entries(dirRoutes).map(([path, route]) => {
        const pageName = path
            .replace("./routes", "")
            .split("/")[2]
            .replace(/^\s*\d*\s*/, "")

        return {
            name: pageName,
            path: path.replace("./routes", "").split("/").slice(0, -2).concat(pageName).join("/"),
            dom: route.default,
        }
    })

const pages = [
    {
        name: "Introduction",
        children: [{ name: "Welcome", path: "/", dom: rootRoute }],
    },
    { name: "Reactivity", children: routeMaker(reactivityRoutes) },
    { name: "Routing", children: routeMaker(routingRoutes) },
    { name: "Components", children: routeMaker(componentsRoutes) },
    { name: "Examples", children: routeMaker(examplesRoutes) },
]

const routes = pages.flatMap((page) =>
    page.children ? [page, ...page.children] : page,
)

function App() {
    return html.div(
        {
            name: "App",
            class: "flex flex-col relative size-full",
        },

        Header(),

        html.div(
            { class: "flex flex-1" },

            Navbar({ options: pages, class: "min-w-64" }),

            html.div(
                {
                    class: "ml-64 flex flex-1 justify-center",
                },

                html.div(
                    {
                        class: "flex flex-col px-8 pt-24 pb-16 gap-4 max-w-5xl",
                    },

                    Router({ routes: routes }),
                ),
            ),
        ),
    )
}

add(document.body, App())
