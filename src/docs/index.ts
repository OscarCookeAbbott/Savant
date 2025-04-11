import Header from "./Header"
import Navbar from "./Navbar"
import { add, html } from ".."
import { Router } from "../routing"

const introRoutes = import.meta.glob("./routes/introduction/**/index.ts", {
    eager: true,
})
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
    Object.entries(dirRoutes).map(([path, route]) => ({
        path: path.replace("./routes", "").split("/").slice(0, -1).join("/"),
        dom: route.default,
    }))

const routes = [
    ...routeMaker(introRoutes),
    ...routeMaker(reactivityRoutes),
    ...routeMaker(routingRoutes),
    ...routeMaker(componentsRoutes),
    ...routeMaker(examplesRoutes),
]

const tabs = routes.reduce((groups, route) => {
    const groupName = route.path.split("/")[1]
    const subPath = route.path.split("/").slice(2).join("/")

    groups.set(groupName, (groups.get(groupName) ?? []).concat(subPath))

    return groups
}, new Map<string, string[]>())

function App() {
    return html.div(
        {
            name: "App",
            class: "flex flex-col relative size-full overflow-y-auto overscroll-none",
        },

        Header(),

        html.div(
            { class: "flex flex-1" },

            Navbar({ options: tabs, class: "min-w-64" }),

            html.div(
                {
                    class: "ml-64 flex flex-1 justify-center",
                },

                html.div(
                    {
                        class: "flex flex-col p-8 -mt-16 pt-24 gap-4 w-3xl",
                    },

                    Router({ routes }),
                ),
            ),
        ),
    )
}

add(document.body, App())
