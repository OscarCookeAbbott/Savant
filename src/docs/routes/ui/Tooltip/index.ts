import { Button, Code, Tooltip } from "../../../../components"
import TableOfContents from "../../../../components/Contents"
import { html } from "../../../.."

export default function Page() {
    const content = html.div(
        { class: "w-2xl *:scroll-m-21" },

        html.h1("Tooltip"),

        html.p(
            { class: "text-foreground-weak" },

            "Provides concise contextual extra information.",
        ),

        html.h2("Demo"),

        html.div(
            {
                class: "card vessel flex flex-col items-center gap-4",
            },

            html.div(
                {
                    class: "p-8 flex flex-col gap-8 w-3xs h-48 justify-center",
                },

                Button(
                    {
                        class: "variant-basic text-accent font-bold",
                    },

                    "Tooltip (Hover Me)",

                    Tooltip(
                        {
                            direction: "top",
                            class: "left-1/2 -translate-x-1/2",
                        },
                        "Demo Tooltip",
                    ),
                ),
            ),
        ),

        () =>
            Code(
                { language: "ts" },

                `\
import { Button, Tooltip } from "savant/components"

Button(
    {
        class: "variant-basic text-accent font-bold",
    },

    "Tooltip (Hover Me)",

    Tooltip(
        {
            direction: "top",
            class: "left-1/2 -translate-x-1/2",
        },

        "Demo Tooltip",
    ),
)`,
            ),

        html.h2("Signature"),

        Code(
            { language: "ts" },

            `\
function Tooltip(
    props: {
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
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
