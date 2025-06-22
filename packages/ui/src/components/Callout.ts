import { ChildDom, ElementProps, html, forceReactive } from "@savant/core"

type CalloutProps = ElementProps & {
    icon: string
}

export default function Callout(
    { icon, class: propClass, ...restProps }: CalloutProps,
    ...children: ChildDom[]
): HTMLElement {
    const reactiveClass = forceReactive(propClass)

    return html.div(
        {
            class: () =>
                `flex items-center variant-soft-outline text-mood-weak gap-2 ${reactiveClass.val}`,
            ...restProps,
        },

        html.i({ class: `text-mood` }, icon),

        children,
    )
}
