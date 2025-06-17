import { Badge, Label, Select, Code } from "../../../../components"
import { html, state } from "../../../.."

export default function Page() {
    const exampleVariant = state("variant-filled")
    const exampleMood = state("mood-accent")

    return html.div(
        { class: "contents" },

        html.span({ class: "text-3xl font-bold" }, "Badge"),

        html.p(
            { class: "text-foreground-weak" },
            "Delivers small but important pieces of information.",
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

                    Badge(
                        {
                            class: () =>
                                `${exampleVariant.val} ${exampleMood.val}`,
                        },

                        "Demo Badge",
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
import { Badge } from "savant/components"

Badge(
    { class: "${exampleVariant.val} ${exampleMood.val}" },
    "Demo Badge",
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
function Badge(
    props: HTMLElementProps,
    ...children: ChildDom[]
): HTMLElement`,
            ),
        ),
    )
}
