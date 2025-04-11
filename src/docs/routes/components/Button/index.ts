import { Button, Code, Label, Select } from "../../../../components"
import { html, state } from "../../../.."

export default function Page() {
    const exampleVariant = state("variant-filled")
    const exampleMood = state("mood-accent")
    const extraClasses = state(["transition"])

    return html.div(
        { class: "contents" },

        html.span({ class: "text-3xl font-bold" }, "Button"),

        html.p(
            { class: "text-foreground-weak" },
            "Performs some functionality on click.",
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

                    Button(
                        {
                            class: () =>
                                `${[exampleVariant.val, exampleMood.val, ...extraClasses.val].join(" ")}`,
                        },

                        "Demo Button",
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

                    Label(
                        { content: "Extras", class: "items-center" },

                        Select({
                            options: [
                                { value: "transition" },
                                { value: "hover:raised" },
                                { value: "active:lowered" },
                            ],
                            value: extraClasses,
                            class: "variant-outline w-48",
                        }),
                    ),
                ),
            ),
        ),

        () =>
            Code(
                { language: "ts" },

                `// Button Demo
import { Button } from "savant/components"

Button(
    { class: "${[exampleVariant.val, exampleMood.val, ...extraClasses.val].join(" ")}" },
    "Demo Button",
)`,
            ),

        Label(
            {
                content: "Signature",
                class: "mt-4",
            },
            Code(
                { language: "ts" },

                `function Button(
    props: HTMLButtonProps,
    ...children: ChildDom[]
): HTMLButtonElement`,
            ),
        ),
    )
}
