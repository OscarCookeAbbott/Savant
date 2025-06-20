import { Button, Code, Label, Select } from "../../../../components"
import { html, state } from "../../../.."
import DocPage from "../../../components/DocPage"

export default function Page() {
    const exampleVariant = state("variant-filled")
    const exampleMood = state("mood-accent")
    const extraClasses = state([])

    return DocPage(
        html.h1("Button"),

        html.p(
            { class: "text-foreground-weak" },
            "Performs some action on user click.",
        ),

        html.h2("Design"),

        html.p(
            "Button components are used when a specific, clear and manual action needs to be performed by the user..",
        ),

        html.h2("Demo"),

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
                            { value: "mood-info" },
                            { value: "mood-success" },
                            { value: "mood-warning" },
                            { value: "mood-critical" },
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

        () =>
            Code(
                { language: "ts" },

                `\
import { Button } from "savant/components"

Button(
    { class: "${[exampleVariant.val, exampleMood.val, ...extraClasses.val].join(" ")}" },
    "Demo Button",
)`,
            ),

        html.h2("Signature"),

        Code(
            { language: "ts" },

            `\
function Button(
    props: HTMLButtonProps,
    ...children: ChildDom[]
): HTMLButtonElement`,
        ),
    )
}
