import { ChildDom, ElementProps, html } from ".."
import { forceReactive } from "../utils"

interface CodeProps extends ElementProps {
    language: string
}

export default function Code(
    { language, class: propClass, ...restProps }: CodeProps,
    ...children: ChildDom[]
): HTMLElement {
    const reactiveClass = forceReactive(propClass)

    const baseDom = html.pre(
        {
            class: reactiveClass.val,
            ...restProps,
        },

        html.code(
            {
                class: `language-${language}`,
            },

            children,
        ),
    )

    // Convert any code snippets
    Prism.highlightAllUnder(baseDom)

    return baseDom
}
