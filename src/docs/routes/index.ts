import { html } from "../.."
import md from "../../../readme.md?raw"
import TableOfContents from "../../components/TableOfContents"
import Markdown from "../../components/Markdown"

export default function Page() {
    const content = Markdown(
        { class: "language-typescript w-2xl *:scroll-m-21" },
        md,
    )

    const toc = TableOfContents(
        { class: "sticky top-24 w-sm not-xl:hidden" },
        content,
    )

    return html.div({ class: "flex gap-12 items-start" }, content, toc)
}
