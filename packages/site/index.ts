import "./style.css"

import { html, mount, state } from "@savant/core"
import { Router } from "@savant/routing"

import Header from "./src/Header"
import Navbar, { NavOption } from "./src/Navbar"
import rootRoute from "./src/routes/index"

interface RouteFile {
	default: () => HTMLElement
}

const coreRoutes = import.meta.glob("./src/routes/1 Core/*/**/index.ts", {
	eager: true,
}) as Record<string, RouteFile>

const routingRoutes = import.meta.glob("./src/routes/2 Routing/*/**/index.ts", {
	eager: true,
}) as Record<string, RouteFile>

const uiRoutes = import.meta.glob("./src/routes/3 UI/*/**/index.ts", {
	eager: true,
}) as Record<string, RouteFile>

const examplesRoutes = import.meta.glob("./src/routes/Examples/*/**/index.ts", {
	eager: true,
}) as Record<string, RouteFile>

const routeMaker = (dirRoutes: Record<string, RouteFile>) => {
	// First, process all routes and build path segments
	const processedRoutes = Object.entries(dirRoutes).map(([path, route]) => {
		const localPath = path
			.replace("./src/routes/", "")
			.replace("/index.ts", "")

		const pathSegments = localPath.split("/")
		const pageName = pathSegments.slice(-1)[0].replace(/^\d+\s/, "")

		const cleanSegments = pathSegments.map((part) =>
			part.replace(/^\d+\s/, ""),
		)
		const routePath = cleanSegments
			.slice(0, -1)
			.map((part) => part.replace(" ", "-"))
			.join("/")

		return {
			name: pageName,
			path: `/#!/${routePath}/${pageName}`,
			dom: route.default,
			segments: cleanSegments,
		}
	})

	// Build nested structure
	const buildNestedStructure = (
		routes: typeof processedRoutes,
		depth = 1,
	) => {
		const groups: Record<string, typeof processedRoutes> = {}
		const directRoutes: typeof processedRoutes = []

		// Group routes by their segment at current depth
		routes.forEach((route) => {
			if (route.segments.length > depth + 1) {
				// This route belongs to a subdirectory
				const groupName = route.segments[depth]
				if (!groups[groupName]) {
					groups[groupName] = []
				}
				groups[groupName].push(route)
			} else if (route.segments.length === depth + 1) {
				// This is a direct route at current level
				directRoutes.push(route)
			}
		})

		const result: NavOption[] = []

		// Add direct routes
		directRoutes.forEach((route) => {
			result.push({
				name: route.name,
				path: route.path,
				dom: route.dom,
			} satisfies NavOption)
		})

		// Add grouped routes
		Object.entries(groups).forEach(([groupName, groupRoutes]) => {
			result.push({
				name: groupName,
				children: buildNestedStructure(groupRoutes, depth + 1),
			} satisfies NavOption)
		})

		return result
	}

	return {
		nested: buildNestedStructure(processedRoutes),
		flat: processedRoutes.map((route) => ({
			name: route.name,
			path: route.path,
			dom: route.dom,
		})),
	}
}

const coreRouteMaker = routeMaker(coreRoutes)
const routingRouteMaker = routeMaker(routingRoutes)
const uiRouteMaker = routeMaker(uiRoutes)
const examplesRouteMaker = routeMaker(examplesRoutes)

const pages = [
	{
		name: "Introduction",
		path: "/",
		dom: rootRoute,
	},
	{
		name: "Core",
		children: coreRouteMaker.nested,
	},
	{
		name: "Routing",
		children: routingRouteMaker.nested,
	},
	{
		name: "Savant UI",
		children: uiRouteMaker.nested,
	},
	{ name: "Examples", children: examplesRouteMaker.nested },
]

const routes = [
	{
		name: "Introduction",
		path: "/",
		dom: rootRoute,
	},
	...coreRouteMaker.flat,
	...routingRouteMaker.flat,
	...uiRouteMaker.flat,
	...examplesRouteMaker.flat,
]

function App() {
	const navbarClosedWhenCompact = state(true)

	return html.div(
		{
			name: "App",
			class: "flex flex-col relative size-screen",
		},

		Header({ searchLinks: routes, navbarClosed: navbarClosedWhenCompact }),

		html.div(
			{
				"$data-navbar-closed": navbarClosedWhenCompact,
				class: "group/page flex flex-1",
			},

			Navbar({
				options: pages,
				onNavigated: () => (navbarClosedWhenCompact.val = true),
				class: "min-w-64 not-sm:w-screen not-lg:shadow-lg not-lg:group-data-navbar-closed/page:hidden",
			}),

			html.div(
				{
					class: "lg:ml-64 overflow-clip w-full flex flex-1 justify-center",
				},

				html.div(
					{
						class: "flex flex-col w-full px-8 pt-24 pb-16 gap-4 not-md:px-4 not-md:pt-16 not-md:pb-8",
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

mount(document.body, App())
