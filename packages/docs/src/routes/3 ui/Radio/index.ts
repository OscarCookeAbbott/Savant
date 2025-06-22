import { Code, Label, Radio, Select } from "@savant/ui"
import { html, state } from "@savant/core"
import DocPage from "../../../components/DocPage"

export default function Page() {
    const exampleVariant = state("variant-soft-outline")
    const exampleMood = state("mood-none")

    return DocPage(
        html.h1("Radio"),

        html.blockquote("Offers a clear and direct set of exclusive options."),

        html.h2("Demo"),

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
                            { value: "variant-soft" },
                            { value: "variant-soft-outline" },
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
                            { value: "mood-info" },
                            { value: "mood-success" },
                            { value: "mood-warning" },
                            { value: "mood-critical" },
                        ],
                        value: exampleMood,
                        class: "variant-outline w-48",
                    }),
                ),
            ),
        ),

        () =>
            Code(
                { language: "ts" },

                `\
import { Radio } from "savant/ui"

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

        html.h2("Signature"),

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
    )
}
