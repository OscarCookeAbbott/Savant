import { Code, Label, Select } from "../../../../components"
import { html, State, state } from "../../../.."

export default function Page() {
    const exampleType: State<"single" | "multi" | "multichips"> =
        state("single")
    const exampleVariant = state("variant-outline")
    const exampleMood = state("mood-none")

    return html.div(
        { class: "contents" },

        html.span({ class: "text-3xl font-bold" }, "Select"),

        html.p(
            { class: "text-foreground-weak" },

            "Enables compact selection of one or more options.",
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
                    {
                        class: "p-8 flex flex-col justify-center gap-8 w-3xs h-48",
                    },

                    () =>
                        Select({
                            value:
                                exampleType.val === "single"
                                    ? state("Option 1")
                                    : state(["Option 1", "Option 2"]),
                            options: [
                                { value: "Option 1" },
                                { value: "Option 2", disabled: true },
                                { value: "Option 3" },
                                { value: "Option 4" },
                            ],
                            useChips: exampleType.val === "multichips",
                            class: () =>
                                `${exampleVariant.val} ${exampleMood.val}`,
                        }),
                ),

                html.div(
                    { class: "flex flex-wrap gap-4 justify-center" },

                    Label(
                        { content: "Type", class: "items-center" },

                        Select({
                            options: [
                                { value: "single" },
                                { value: "multi" },
                                { value: "multichips" },
                            ],
                            value: exampleType,
                            class: "variant-outline w-48",
                        }),
                    ),

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

                `// Select Demo
import { Select } from "savant/components"

Select({
    value: state(${exampleType.val === "single" ? `"Option 1"` : `["Option 1", "Option 2"])`}),
    options: [
        { value: "Option 1" },
        { value: "Option 2", disabled: true },
        { value: "Option 3" },
        { value: "Option 4" },
    ],${
        exampleType.val === "multichips"
            ? `
    useChips: true,`
            : ""
    }
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

                `function Select<T>(
    props: {
        options: SelectOption<T>[],
        value: State<SelectOption<T> | undefined> = state(undefined),
        required: boolean = false,
        ...HTMLElementProps
}): HTMLElement

type SelectOption<T> = {
    value: T
    name?: string
    disabled?: boolean
}`,
            ),
        ),
    )
}
