import "./style.css"
import Header from "./Header"
import Navbar from "./Navbar"
import { add, html } from "@savant/core"
import { Router } from "@savant/routing"
import rootRoute from "./routes/index"
import coreRoute from "./routes/1 core/index"
import routingRoute from "./routes/2 routing/index"
import uiRoute from "./routes/3 ui/index"

type RouteFile = { default: () => HTMLElement }

const coreRoutes = import.meta.glob("./routes/1 core/*/**/index.ts", {
    eager: true,
}) as Record<string, RouteFile>

const routingRoutes = import.meta.glob("./routes/2 routing/*/**/index.ts", {
    eager: true,
}) as Record<string, RouteFile>

const uiRoutes = import.meta.glob("./routes/3 ui/*/**/index.ts", {
    eager: true,
}) as Record<string, RouteFile>

const examplesRoutes = import.meta.glob("./routes/examples/*/**/index.ts", {
    eager: true,
}) as Record<string, RouteFile>

const routeMaker = (dirRoutes: Record<string, RouteFile>) =>
    Object.entries(dirRoutes).map(([path, route]) => {
        const pageName = path
            .replace("./routes", "")
            .split("/")[2]
            .replace(/^\s*\d*\s*/, "")

        return {
            name: pageName,
            path:
                "/#" +
                path
                    .replace("./routes", "")
                    .split("/")
                    .slice(0, -2)
                    .concat(pageName)
                    .join("/"),
            dom: route.default,
        }
    })

const pages = [
    {
        name: "Introduction",
        path: "/",
        dom: rootRoute,
    },
    {
        name: "Core",
        path: "/#/core",
        dom: coreRoute,
        children: routeMaker(coreRoutes),
    },
    {
        name: "Routing",
        path: "/#/routing",
        dom: routingRoute,
        children: routeMaker(routingRoutes),
    },
    {
        name: "Savant UI",
        path: "/#/ui",
        dom: uiRoute,
        children: routeMaker(uiRoutes),
    },
    { name: "Examples", children: routeMaker(examplesRoutes) },
]

const routes = pages.flatMap((page) => [
    ...(page.path ? [page] : []),
    ...(page.children ?? []),
])

function App() {
    return html.div(
        {
            name: "App",
            class: "flex flex-col relative size-full",
        },

        Header(),

        html.div(
            { class: "flex flex-1" },

            Navbar({ options: pages, class: "min-w-64 not-lg:hidden" }),

            html.div(
                {
                    class: "lg:ml-64 overflow-clip flex flex-1 justify-center",
                },

                html.div(
                    {
                        class: "flex flex-col px-8 pt-24 pb-16 gap-4",
                    },

                    Router({
                        basename: import.meta.env.BASE_URL.slice(0, -1),
                        routes: routes,
                    }),
                ),
            ),
        ),
    )
}

add(document.body, App())
