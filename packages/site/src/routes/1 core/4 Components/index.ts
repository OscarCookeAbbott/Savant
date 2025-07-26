import { Markdown } from "@savant/ui"

import DocPage from "../../../components/DocPage"
import md from "./index.md?raw"

export default function Page() {
	return DocPage(Markdown({}, md))
}
