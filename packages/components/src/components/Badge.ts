import { ChildDom, ElementProps, html, forceReactive } from "@savant/core"

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
