import { Code, Label, Radio, Select } from "../../../../components"
import { html, state } from "../../../.."

export default function Page() {
    const exampleVariant = state("variant-outline")
    const exampleMood = state("mood-none")

    return html.div(
        { class: "contents" },

        html.span({ class: "text-3xl font-bold" }, "Radio"),

        html.p(
            { class: "text-foreground-weak" },

            "Simple singular selection from a set of options.",
        ),

        Label(
            {
                content: "Demo",
                class: "mt-4",
            },

            html.div(
                {
                    name: "Demo",
                    class: "card vessel flex flex-col items-center gap-4",
                },

                html.div(
                    { class: "p-8 h-48 flex items-center" },

                    Radio({
                        value: state("Option 1"),
                        options: [
                            { value: "Option 1" },
                            { value: "Option 2" },
                            { value: "Option 3" },
                        ],
                        class: () =>
                            `w-48 ${exampleVariant.val} ${exampleMood.val}`,
                    }),
                ),

                html.div(
                    { class: "flex flex-wrap gap-4 justify-center" },

                    Label(
                        { content: "Variant", class: "items-center" },

                        Select({
                            options: [
                                { value: "variant-outline" },
                                { value: "variant-subtle" },
                                { value: "variant-ghost" },
                                { value: "variant-filled" },
                            ],
                            value: exampleVariant,
                            class: "variant-outline w-48",
                        }),
                    ),

                    Label(
                        { content: "Mood", class: "items-center" },

                        Select({
                            options: [
                                { value: "mood-none" },
                                { value: "mood-accent" },
                                { value: "mood-warning" },
                                { value: "mood-error" },
                            ],
                            value: exampleMood,
                            class: "variant-outline w-48",
                        }),
                    ),
                ),
            ),
        ),

        () =>
            Code(
                { language: "ts" },

                `\
import { Radio } from "savant/components"

Radio({
    value: state("Option 1"),
    options: [
        { value: "Option 1" },
        { value: "Option 2" },
        { value: "Option 3" },
    ],
    class: "${exampleVariant.val} ${exampleMood.val}",
})`,
            ),

        Label(
            {
                content: "Signature",
                class: "mt-4",
            },
            Code(
                { language: "ts" },

                `\
function Radio<T>(
    props: {
        options: RadioOption<T>[],
        value: State<RadioOption<T> | undefined> = state(undefined),
        required: boolean = false,
        ...HTMLElementProps
}): HTMLElement

type RadioOption<T> = {
    value: T
    name?: string
    disabled?: boolean
}`,
            ),
        ),
    )
}
