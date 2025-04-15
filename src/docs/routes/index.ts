import md from "../../../readme.md?raw"
import Markdown from "../../components/Markdown"

export default function Page() {
    return Markdown({}, md)
}
