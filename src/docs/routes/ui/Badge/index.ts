import { Badge, Label, Select, Code } from "../../../../components"
import TableOfContents from "../../../../components/Contents"
import { html, state } from "../../../.."

export default function Page() {
    const exampleVariant = state("variant-filled")
    const exampleMood = state("mood-accent")

    const content = html.div(
        { class: "w-2xl *:scroll-m-21" },

        html.h1("Badge"),

        html.p(
            { class: "text-foreground-weak" },
            "Delivers small but important pieces of information.",
        ),

        html.h2("Design"),

        html.p(
            "The Badge component is designed to be a small, unobtrusive element that can convey important information without overwhelming the user. It is typically used to highlight new or unread items, notifications, or status updates.",
        ),

        html.p("It uses a smaller font size and padding to make it the same height as standard text, ensuring it fits seamlessly into text flows."),

        html.p(
            "It colors the text slightly based on mood to indicate it is not interactive, differentiating it from small buttons which use the standard foreground text color.",
        ),

        html.h2("Demo"),

        html.div(
            {
                name: "Demo",
                class: "card vessel flex flex-col items-center gap-4",
            },

            html.div(
                { class: "p-8 h-48 flex items-center" },

                Badge(
                    {
                        class: () => `${exampleVariant.val} ${exampleMood.val}`,
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
import { Badge } from "savant/components"

Badge(
    { class: "${exampleVariant.val} ${exampleMood.val}" },
    "Demo Badge",
)`,
            ),

        html.h2("Signature"),

        Code(
            { language: "ts" },

            `\
function Badge(
    props: HTMLElementProps,
    ...children: ChildDom[]
): HTMLElement`,
        ),
    )

    const toc = TableOfContents(
        { class: "sticky top-24 w-sm not-xl:hidden" },
        content,
    )

    return html.div({ class: "flex gap-12 items-start" }, content, toc)
}
