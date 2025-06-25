import "./style.css"

import { add, html } from "@savant/core"
import { Router } from "@savant/routing"

import Header from "./src/Header"
import Navbar from "./src/Navbar"
import coreRoute from "./src/routes/1 core/index"
import routingRoute from "./src/routes/2 routing/index"
import uiRoute from "./src/routes/3 ui/index"
import rootRoute from "./src/routes/index"

interface RouteFile {
	default: () => HTMLElement
}

const coreRoutes = import.meta.glob("./src/routes/1 core/*/**/index.ts", {
	eager: true,
}) as Record<string, RouteFile>

const routingRoutes = import.meta.glob("./src/routes/2 routing/*/**/index.ts", {
	eager: true,
}) as Record<string, RouteFile>

const uiRoutes = import.meta.glob("./src/routes/3 ui/*/**/index.ts", {
	eager: true,
}) as Record<string, RouteFile>

const examplesRoutes = import.meta.glob("./src/routes/examples/*/**/index.ts", {
	eager: true,
}) as Record<string, RouteFile>

const routeMaker = (dirRoutes: Record<string, RouteFile>) =>
	Object.entries(dirRoutes).map(([path, route]) => {
		const localPath = path
			.replace("./src/routes/", "")
			.replace("/index.ts", "")

		const pageName = localPath
			.split("/")
			.slice(-1)[0]
			.replace(/^\d+\s/, "")
		const pagePath = localPath
			.split("/")
			.slice(0, -1)
			.map((part) => part.replace(/^\d+\s/, "").replace(" ", "-"))
			.join("/")

		return {
			name: pageName,
			path: `/#!/${pagePath}/${pageName}`,
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
		path: "/#!/core",
		dom: coreRoute,
		children: routeMaker(coreRoutes),
	},
	{
		name: "Routing",
		path: "/#!/routing",
		dom: routingRoute,
		children: routeMaker(routingRoutes),
	},
	{
		name: "Savant UI",
		path: "/#!/ui",
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

		Header({ searchLinks: routes }),

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
