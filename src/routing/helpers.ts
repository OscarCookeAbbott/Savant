import {
    _routerBasename,
    _routerParams,
    _routerPathname,
    _routerQuery,
} from "./state"

const BASE_URL = import.meta.env.BASE_URL

export const getRouterPathname = () => _routerPathname.val

export const getRouterPath = () =>
    _routerPathname.val.slice(BASE_URL.length - 1)

export const getRouterParams = () => _routerParams.val

export const getRouterQuery = () => _routerQuery.val

export const navigate = (href: string, { replace } = { replace: false }) => {
    const newPathname = `${_routerBasename.val}${href}`

    if (replace) window.history.replaceState({}, "", newPathname)
    else window.history.pushState({}, "", newPathname)

    // Update the global state of the router to trigger the Router
    _routerPathname.val = newPathname
}
