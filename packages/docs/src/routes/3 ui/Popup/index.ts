import {
    Button,
    Code,
    Label,
    Popup,
    Select,
    PopupTrigger,
} from "@savant/components"
import { html, state } from "@savant/core"
import DocPage from "../../../components/DocPage"

export default function Page() {
    const exampleTriggers = state<PopupTrigger[]>([PopupTrigger.CLICK])

    return DocPage(
        html.h1("Popup"),

        html.blockquote("Versatile dynamic content floating near its parent."),

        html.h2("Demo"),

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

        () =>
            Code(
                { language: "ts" },

                `\
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

        html.h2("Signature"),

        Code(
            { language: "ts" },

            `\
function Popup(
    props: {
        visible: State<boolean> = state(false),
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`,
        ),
    )
}
