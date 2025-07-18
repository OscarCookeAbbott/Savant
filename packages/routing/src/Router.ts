import { ChildDom, derive, html, mount } from "@savant/core"

import {
	_routerBasename,
	_routerHash,
	_routerParams,
	_routerPathname,
	_routerQuery,
} from "./state"

//////// Types ////////

export interface Route {
	path: string | "*"
	dom: ChildDom
}

interface RouterProps {
	routes: Route[]
	basename?: string
}

//////// Config ////////

const _QUERY_PARAM_REGEX = /:([^\\d|^/]([^/]+)?)/

//////// State ////////

let currentRoute: Route | undefined = undefined

//////// API ////////

export default function Router({ routes, basename }: RouterProps) {
	const container = html.div({
		name: "Savant Router",
		style: "display: contents;",
	})

	/** Returns a sanitized path which with a leading slash but no trailing slashes*/
	const sanitizePath = (path: string) => {
		if (!path) return ""

		if (!path.startsWith("/")) path = "/" + path

		while (path !== "/" && path.endsWith("/")) {
			path = path.slice(0, path.length - 1)
		}

		path = decodeURI(path)

		return path
	}

	/** Match the current URL pathname to a route. Matching is done in the order of routes */
	const routeMatcher = (path: string, basename: string) => {
		path = sanitizePath(path)
		basename = sanitizePath(basename)

		const pathParts = path.split("/")
		const params: Record<string, string> = {}
		let matchedRoute: Route | null = null

		for (const route of routes) {
			const routePathParts = sanitizePath(basename + route.path).split(
				"/",
			)
			if (routePathParts.length !== pathParts.length) continue

			let matchFound = true

			for (let idx = 0; idx < routePathParts.length; idx++) {
				const routePathPart = routePathParts[idx]
				const pathPart = pathParts[idx]

				if (_QUERY_PARAM_REGEX.test(routePathPart)) {
					params[decodeURIComponent(routePathPart.slice(1))] =
						decodeURIComponent(pathPart)
				} else if (pathPart !== routePathPart) {
					matchFound = false
					break
				}
			}

			if (matchFound) {
				matchedRoute = route
				break
			}
		}

		if (!matchedRoute) {
			// Find match-all (404) route if no match is found
			matchedRoute = routes.find((route) => route.path === "*") || null
		}

		return { route: matchedRoute, params }
	}

	const parseQuery = (search: string) => {
		if (search.startsWith("?")) search = search.slice(1).trim()

		if (!search) return {}

		const query: Record<string, string> = {}
		const groups = search.split("&")

		for (const group of groups) {
			const [key, value] = group.split("=")
			query[decodeURIComponent(key)] = decodeURIComponent(value)
		}

		return query
	}

	const handleWindowPopState = () => {
		const { route, params } = routeMatcher(
			window.location.pathname + window.location.hash,
			basename || "",
		)

		if (!route) {
			currentRoute = undefined

			container.replaceChildren()

			mount(container, html.div("Could not find route"))

			return
		}

		if (route === currentRoute) {
			_routerQuery.val = parseQuery(window.location.search)
			_routerParams.val = params
			return
		}

		currentRoute = route

		_routerQuery.raw = parseQuery(window.location.search)
		_routerParams.raw = params

		container.replaceChildren()

		mount(container, route.dom)
	}

	window.onpopstate = handleWindowPopState

	derive(() => {
		const pathChanged = _routerPathname.val
		const hashChanged = _routerHash.val

		if (pathChanged || hashChanged) {
			setTimeout(() => {
				handleWindowPopState()
			})
		}
	})

	derive(() => {
		_routerBasename.val = sanitizePath(basename || "")
	})
	return container
}
