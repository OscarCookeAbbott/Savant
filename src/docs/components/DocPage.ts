import TableOfContents from "../../components/TableOfContents"
import { ChildDom, html } from "../../core"

export default function DocPage(...children: ChildDom[]): HTMLElement {
    const content = html.div(
        { class: "language-typescript w-2xl *:scroll-m-21" },
        ...children,
    )

    const toc = TableOfContents(
        { class: "sticky top-24 w-xs not-xl:hidden" },
        content,
    )

    return html.div({ class: "flex gap-8 items-start" }, content, toc)
}
