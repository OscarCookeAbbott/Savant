import {
    State,
    ElementProps,
    html,
    state,
    derive,
    forceReactive,
} from "@savant/core"
import Button from "./Button"

type RadioProps<T> = ElementProps & {
    options: RadioOption<T>[]

    value?: State<T | undefined>

    required?: boolean
}

export type RadioOption<T> = {
    value: T
    name?: string
    disabled?: boolean
}

export default function Radio<T>({
    options,
    value = state(undefined),

    required,

    class: propClass,
    ...restProps
}: RadioProps<T>): HTMLElement {
    const reactiveClass = forceReactive(propClass)

    return html.div(
        { class: "flex flex-col gap-1 group" },

        options.map((option) => {
            const isOptionSelected = derive(() => value.val === option.value)

            return html.div(
                {
                    name: "Radio",
                    onclick: () =>
                        (value.val = isOptionSelected.val
                            ? undefined
                            : option.value),
                    "$data-selected": isOptionSelected,
                    class: () =>
                        `group flex cursor-pointer justify-between items-center gap-2 select-none group-has-invalid:mood-critical ${reactiveClass.val
                            ?.split(" ")
                            .filter(
                                (className) => !className.includes("variant"),
                            )
                            .join(" ")}`,
                    ...restProps,
                },

                option.name ?? String(option.value),

                Button(
                    {
                        disabled: option.disabled,
                        tabIndex: 0,
                        class: () =>
                            `button size-5 rounded-full focus-visible:mood-accent ${reactiveClass.val
                                ?.split(" ")
                                .filter((className) =>
                                    className.includes("variant"),
                                )
                                .join(" ")}`,
                    },

                    html.div({
                        class: "bg-current rounded-full size-2.5 aspect-square not-group-data-selected:hidden",
                    }),
                ),
            )
        }),

        // Use input-checkbox to fake validity
        html.input({
            type: "checkbox",
            checked: () => value.val !== undefined,
            required: required,
            hidden: true,
        }),
    )
}
