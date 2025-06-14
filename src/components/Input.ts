import { State, ChildDom, ElementProps, html, state } from ".."
import { forceReactive } from "../utils"

type InputProps<T extends string | number> = ElementProps & {
    value?: State<T | undefined>

    lead?: ChildDom
    trail?: ChildDom

    onValueChanged?: (value: T | undefined) => void
    onValidityChanged?: (valid: boolean) => void
}

export default function Input<T extends string | number>(
    {
        value = state(undefined),

        type = value.rawVal !== undefined ? typeof value.rawVal : "text",
        placeholder = `Enter ${type}...`,
        required = false,

        lead,
        trail,

        onValueChanged,
        onValidityChanged,

        class: propClass,

        ...restProps
    }: InputProps<T>,
    ...children: ChildDom[]
): HTMLElement {
    const reactiveClass = forceReactive(propClass)

    const handleInput = (e: Event) => {
        const newValue = (e.target as HTMLInputElement | undefined)?.value

        if (typeof value.val === "number" && Number(newValue))
            (value as State<number | undefined>).val = Number(newValue)
        else if (typeof value.val === "string")
            (value as State<string | undefined>).val = newValue

        onValueChanged?.(value.rawVal)
        onValidityChanged?.(inputElement.checkValidity())
    }

    const inputElement = html.input({
        class: "input flex-1",
        type: type,
        value: () => value.val ?? "",
        oninput: handleInput,
        placeholder: placeholder,
        required: required,
    })

    return html.div(
        {
            name: "Text Input",
            class: () =>
                `flex p-0 *:first:pl-2 *:last:pr-2 gap-2 *:py-1 has-focus-visible:mood-accent  has-invalid:has-invalid:mood-error ${reactiveClass.val}`,
            ...restProps,
        },

        // Ensure elements to enable flex
        () =>
            ["boolean", "string", "number", "bigint"].includes(typeof lead)
                ? html.span(lead)
                : lead,

        inputElement,

        children,

        // Ensure elements to enable flex
        () =>
            ["boolean", "string", "number", "bigint"].includes(typeof trail)
                ? html.span(trail)
                : trail,
    )
}
