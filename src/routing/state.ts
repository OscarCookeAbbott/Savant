import { state } from ".."

export const _routerBasename = state("")
export const _routerPathname = state(window.location.pathname)
export const _routerHash = state(window.location.hash)
export const _routerParams = state<Record<string, string>>({})
export const _routerQuery = state<Record<string, string>>({})
