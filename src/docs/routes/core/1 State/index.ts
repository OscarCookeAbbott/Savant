import md from "./index.md?raw"
import Markdown from "../../../../components/Markdown"
import TableOfContents from "../../../../components/Contents"
import { html } from "../../../.."

export default function Page() {
    const content = Markdown(
        { class: "language-typescript min-w-2xl max-w-2xl *:scroll-m-21" },
        md,
    )

    const toc = TableOfContents({ class: "min-w-sm max-w-sm not-xl:hidden" }, content)

    return html.div({ class: "flex gap-12 items-start" }, content, toc)
}
