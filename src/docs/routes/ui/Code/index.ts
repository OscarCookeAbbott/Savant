import { Label, Code } from "../../../../components"
import { html } from "../../../.."

export default function Page() {
    return html.div(
        { class: "contents" },

        html.span({ class: "text-3xl font-bold" }, "Code"),

        html.p(
            { class: "text-foreground-weak" },
            "Simple code syntax highlighting via ",
            html.a({ href: "https://prismjs.com", class: "anchor" }, "PrismJS"),
            ".",
        ),

        Label(
            {
                content: "Demo",
                class: "mt-4",
            },

            () =>
                Code(
                    {
                        language: "ts",
                    },

                    `// Code Demo
import { Code } from "savant/components"

Code(
    { language: "ts" },

    \`// Code Demo
import { Code } from "savant/components"

Code(
    { language: "ts" },
    ...
)\`,
)`,
                ),

            Label(
                {
                    content: "Signature",
                    class: "mt-4",
                },
                Code(
                    { language: "ts" },

                    `function Code(
    props: { language: string, ...HTMLElementProps },
    ...children: ChildDom[]
): HTMLElement`,
                ),
            ),
        ),
    )
}
