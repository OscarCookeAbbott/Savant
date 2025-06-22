import md from "./index.md?raw"
import DocPage from "../../components/DocPage"
import { Markdown } from "@savant/ui"

export default function Page() {
    return DocPage(Markdown({ class: "language-typescript" }, md))
}
