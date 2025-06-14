import { ChildDom, ElementProps, html } from ".."
import { forceReactive } from "../utils"

type BadgeProps = ElementProps

export default function Badge(
    { class: propClass, ...restProps }: BadgeProps,
    ...children: ChildDom[]
): HTMLElement {
    const reactiveClass = forceReactive(propClass)

    return html.span(
        {
            class: () =>
                `badge flex items-center gap-1 select-none ${reactiveClass.val}`,
            ...restProps,
        },

        children,
    )
}
