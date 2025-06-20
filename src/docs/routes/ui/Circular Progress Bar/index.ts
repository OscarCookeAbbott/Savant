import { Label, Select, Code, Input, Checkbox } from "../../../../components"
import { html, state } from "../../../.."
import CircularProgressBar from "../../../../components/CircularProgressBar"
import DocPage from "../../../components/DocPage"

export default function Page() {
    const exampleVariant = state("variant-outline")
    const exampleMood = state("mood-accent")
    const exampleIndefinite = state(true)
    const exampleProgress = state(50)

    return DocPage(
        html.h1("Circular Progress Bar"),

        html.p(
            { class: "text-foreground-weak" },
            "Displays the progress state of a lengthy process.",
        ),

        html.h2("Design"),

        html.p(
            "Circular Progress Bars are used to compactly provide feedback to the user on the current progress state of a lengthy process.",
        ),

        html.p(
            "Circular Progress Bars default to matching the size of enclosing text flows, ensuring they fit seamlessly into layouts.",
        ),

        html.p(
            "Circular Progress Bars can be given children which will be displayed within the circle. Such children should be short, typically a percentage or number. Anything longer should be placed beneath the progress bar.",
        ),

        html.h2("Demo"),

        html.div(
            {
                name: "Demo",
                class: "card vessel flex flex-col items-center gap-4",
            },

            html.div(
                { class: "p-8 h-48 flex items-center" },

                CircularProgressBar(
                    {
                        progress: exampleProgress,
                        indefinite: exampleIndefinite,
                        class: () => `${exampleVariant.val} ${exampleMood.val}`,
                    },
                    "Loading...",
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
                    { content: "Progress", class: "items-center" },

                    Input({
                        value: exampleProgress,
                        min: 0,
                        max: 100,
                        class: "variant-outline w-48",
                    }),
                ),

                Label(
                    { content: "Indefinite", class: "items-center" },

                    Checkbox(
                        {
                            value: exampleIndefinite,
                            class: "variant-outline w-48",
                        },
                        "Enabled",
                    ),
                ),
            ),
        ),

        () =>
            Code(
                { language: "ts" },

                `\
import { CircularProgressBar } from "savant/components"

CircularProgressBar(
    {
        progress: ${exampleProgress.val},
        indefinite: ${exampleIndefinite.val},
        class: "${exampleVariant.val} ${exampleMood.val}"
    },
    "Loading...",
)`,
            ),

        html.h2("Signature"),

        Code(
            { language: "ts" },

            `\
function CircularProgressBar(
    {
        progress?: number = 50,
        indefinite?: boolean = false,

        ...restProps
    }: CircularProgressBarProps,
    ...children: ChildDom[]
): HTMLElement`,
        ),
    )
}
