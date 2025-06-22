import { ChildDom, ElementProps, html, forceReactive } from "@savant/core"

type ButtonProps = ElementProps<HTMLButtonElement>

export default function Button(
    { class: propClass, ...restProps }: ButtonProps,
    ...children: ChildDom[]
): HTMLButtonElement {
    const reactiveClass = forceReactive(propClass)

    return html.button(
        {
            tabIndex: 0,
            class: () =>
                `button flex items-center gap-2 select-none ${reactiveClass.val}`,
            ...restProps,
        },

        children,
    )
}
