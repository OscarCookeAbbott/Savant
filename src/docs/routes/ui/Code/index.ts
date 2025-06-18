import { Label, Code } from "../../../../components"
import TableOfContents from "../../../../components/Contents"
import { html } from "../../../.."
import Callout from "../../../../components/Callout"
import Markdown from "../../../../components/Markdown"

export default function Page() {
    const content = html.div(
        { class: "w-2xl *:scroll-m-21" },

        html.h1("Code"),

        html.p(
            { class: "text-foreground-weak" },
            "Simple code syntax highlighting via ",
            html.a({ href: "https://prismjs.com", class: "anchor" }, "PrismJS"),
            ".",
        ),

        Callout(
            {
                class: "mood-info p",
                icon: "info",
            },

            Markdown(
                { class: "language-typescript" },
                "Every code snippet in these docs uses the `Code` component.",
            ),
        ),

        html.h2("Demo"),

        () =>
            Code(
                {
                    language: "ts",
                },

                `\
import { Code } from "savant/components"

Code(
    { language: "ts" },

    \`\\
import { Code } from "savant/components"

Code(
    { language: "ts" },
    ...
)\`,
)`,
            ),

        html.h2("Signature"),

        Code(
            { language: "ts" },

            `\
function Code(
    props: { language: string, ...HTMLElementProps },
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
