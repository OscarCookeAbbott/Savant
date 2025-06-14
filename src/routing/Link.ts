import { ChildDom, ElementProps, html } from ".."
import { forceReactive, unwrapVal } from "../utils"
import { navigate } from "./helpers"
import { _routerPathname, _routerBasename } from "./state"

type LinkProps = ElementProps<HTMLAnchorElement> & {
    replace?: boolean
    disabled?: boolean
}

export default function Link(
    {
        replace = false,
        disabled = false,
        onclick,
        href,
        class: propClass,
        ...restProps
    }: LinkProps,
    ...children: ChildDom[]
): HTMLAnchorElement {
    const reactiveClass = forceReactive(propClass)

    return html.a(
        {
            href,
            onclick: (e: MouseEvent) => {
                e.preventDefault()

                const hrefValue = unwrapVal(href)

                if (disabled || hrefValue === undefined) return

                navigate(String(hrefValue), { replace })

                if (typeof onclick === "function") onclick(e)
            },
            tabIndex: 0,
            class: () =>
                `not-disabled:focus-visible:focus-ring ${reactiveClass.val}`,
            ...restProps,
        },
        ...children,
    )
}
