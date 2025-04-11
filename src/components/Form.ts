import { ChildDom, ElementProps, html } from ".."
import { forceReactive } from "../utils"

interface FormProps extends ElementProps<HTMLFormElement> {}

export default function Form(
    { class: propsClass, ...restProps }: FormProps,
    ...children: ChildDom[]
): HTMLFormElement {
    const reactiveClass = forceReactive(propsClass)

    return html.form(
        {
            class: () => `flex flex-col gap-4 ${reactiveClass.val}`,
            ...restProps,
        },
        children,
    )
}
