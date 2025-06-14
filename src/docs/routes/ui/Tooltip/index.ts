import { Button, Code, Label, Tooltip } from "../../../../components"
import { html } from "../../../.."

export default function Page() {
    return html.div(
        { class: "contents" },

        html.span({ class: "text-3xl font-bold" }, "Tooltip"),

        html.p(
            { class: "text-foreground-weak" },

            "Concise extra information for a given element.",
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
        ),

        () =>
            Code(
                { language: "ts" },

                `// Tooltip Demo
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

        Label(
            {
                content: "Signature",
                class: "mt-4",
            },
            Code(
                { language: "ts" },

                `function Tooltip(
    props: {
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`,
            ),
        ),
    )
}
