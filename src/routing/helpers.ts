import {
    _routerBasename,
    _routerParams,
    _routerPathname,
    _routerQuery,
} from "./state"

export const getRouterPathname = () => _routerPathname.val

export const getRouterParams = () => _routerParams.val

export const getRouterQuery = () => _routerQuery.val

export const navigate = (href: string, { replace } = { replace: false }) => {
    const newPathname = `${_routerBasename.val}${href}`

    if (replace) window.history.replaceState({}, "", newPathname)
    else window.history.pushState({}, "", newPathname)

    // Update the global state of the router to trigger the Router
    _routerPathname.val = newPathname
}
