import { Checkbox, Code, Label, Select } from "../../../../components"
import { html, state } from "../../../.."

export default function Page() {
    const exampleVariant = state("variant-outline")
    const exampleMood = state("mood-none")

    return html.div(
        { class: "contents" },

        html.span({ class: "text-3xl font-bold" }, "Checkbox"),

        html.p(
            { class: "text-foreground-weak" },

            "Selection of simple binary choices.",
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

                    Checkbox(
                        {
                            class: () =>
                                `w-48 ${exampleVariant.val} ${exampleMood.val}`,
                        },

                        "Demo Checkbox",
                    ),
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
import { Checkbox } from "savant/components"

Checkbox(
    { class: \`${exampleVariant.val} ${exampleMood.val}\` },
    "Demo Checkbox",
)`,
            ),

        Label(
            {
                content: "Signature",
                class: "mt-4",
            },
            Code(
                { language: "ts" },

                `\
function Checkbox(
    props: {
        value: State<boolean> = state(false),
        required: boolean = false,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`,
            ),
        ),
    )
}
