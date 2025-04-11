import { Button, Code, Label, Popup, Select } from "../../../../components"
import { PopupTrigger } from "../../../../components/Popup"
import { html, state } from "../../../.."

export default function Page() {
    const exampleTriggers = state([PopupTrigger.CLICK])

    return html.div(
        { class: "contents" },

        html.span({ class: "text-3xl font-bold" }, "Popup"),

        html.p(
            { class: "text-foreground-weak" },

            "Versatile dynamic content floating near its parent.",
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
                        class: "p-8 h-48 flex justify-center flex-col gap-8 w-3xs",
                    },

                    Button(
                        {
                            class: "variant-filled",
                        },

                        "Popup Trigger",

                        () =>
                            Popup(
                                {
                                    trigger: exampleTriggers.val,
                                    class: "card glass vessel flex flex-col shadow",
                                },

                                "Hello! Click outside me to close.",
                            ),
                    ),
                ),

                html.div(
                    { class: "flex flex-wrap gap-4 justify-center" },

                    Label(
                        { content: "Trigger", class: "items-center" },

                        Select({
                            options: [
                                { value: PopupTrigger.CLICK },
                                { value: PopupTrigger.HOVER },
                                { value: PopupTrigger.HOVER_IN },
                                { value: PopupTrigger.HOVER_OUT },
                                { value: PopupTrigger.FOCUS },
                                { value: PopupTrigger.FOCUS_IN },
                                { value: PopupTrigger.FOCUS_OUT },
                            ],
                            value: exampleTriggers,
                            class: "variant-outline w-48",
                        }),
                    ),
                ),
            ),
        ),

        () =>
            Code(
                { language: "ts" },

                `// Popup Demo
import { Button, Popup } from "savant/components"

Button(
    {
        class: "variant-filled",
    },

    "Popup Trigger",

    () =>
        Popup(
            {
                trigger: ${JSON.stringify(exampleTriggers.val)},
                class: "card glass vessel flex flex-col shadow",
            },

            "Hello! Click outside me to close.",
        ),
),`,
            ),

        Label(
            {
                content: "Signature",
                class: "mt-4",
            },
            Code(
                { language: "ts" },

                `function Popup(
    props: {
        visible: State<boolean> = state(false),
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
