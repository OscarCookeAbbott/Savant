import md from "./index.md?raw"
import { Markdown } from "@savant/components"
import DocPage from "../components/DocPage"

export default function Page() {
    return DocPage(
        Markdown({ class: "language-typescript w-2xl *:scroll-m-21" }, md),
    )
}
