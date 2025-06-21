import { ChildDom, ElementProps, html, forceReactive } from "@savant/core"

type LabelProps = ElementProps & {
    content: ChildDom
}

export default function Label(
    { content, class: propClass, ...restProps }: LabelProps,
    ...children: ChildDom[]
): HTMLElement {
    const reactiveClass = forceReactive(propClass)

    return html.div(
        {
            name: "Label",
            class: () => `flex flex-col gap-1 ${reactiveClass.val}`,
        },

        html.label(
            {
                class: "flex items-center text-mini text-mood-weak",
                ...restProps,
            },

            content,
        ),

        children,
    )
}
