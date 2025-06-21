import { Markdown } from "@savant/components"
import DocPage from "../../../components/DocPage"
import md from "./index.md?raw"

export default function Page() {
    return DocPage(Markdown({ class: "language-typescript" }, md))
}
