import {
    State,
    ChildDom,
    ElementProps,
    html,
    svg,
    optionalAttribute,
    state,
} from ".."
import { forceReactive } from "../utils"
import Button from "./Button"

type CheckboxProps = ElementProps & {
    value?: State<boolean>

    required?: boolean
}

export default function Checkbox(
    {
        value = state(false),

        required,

        class: propClass,
        ...restProps
    }: CheckboxProps,
    ...children: ChildDom[]
): HTMLElement {
    const reactiveClass = forceReactive(propClass)

    return html.div(
        {
            name: "Checkbox",
            onclick: () => (value.val = !value.val),
            "data-selected": optionalAttribute(() => value.val || undefined),
            class: () =>
                `flex cursor-pointer justify-between items-center gap-2 select-none group ${reactiveClass.val
                    ?.split(" ")
                    .filter((className) => !className.includes("variant"))
                    .join(" ")}`,
            ...restProps,
        },

        children,

        Button(
            {
                role: "checkbox",
                tabIndex: 0,
                class: () =>
                    `button size-5 !rounded-md aspect-square focus-visible:mood-accent !p-0.5 group-has-invalid:mood-error ${reactiveClass.val
                        ?.split(" ")
                        .filter((className) => className.includes("variant"))
                        .join(" ")}`,
            },

            svg.svg(
                {
                    viewBox: "0 0 100 100",
                    class: "size-4 not-group-data-selected:hidden",
                    style: "stroke-linecap:round; stroke-linejoin:round;",
                },

                svg.path({
                    d: "M20,60L40,80L80,20",
                    class: "stroke-current stroke-[10] fill-none",
                }),
            ),
        ),

        html.input({
            type: "checkbox",
            checked: value,
            required: required,
            hidden: true,
        }),
    )
}
