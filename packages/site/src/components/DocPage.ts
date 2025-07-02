import { type ChildDom, html } from "@savant/core"
import { TableOfContents } from "@savant/ui"

export default function DocPage(...children: ChildDom[]): HTMLElement {
	const content = html.div(
		{
			class: "*:language-typescript w-2xl not-md:max-w-full *:scroll-m-21",
		},
		...children,
	)

	const toc = TableOfContents(
		{ class: "sticky top-24 w-xs not-xl:hidden" },
		content,
	)

	return html.div(
		{ class: "flex gap-8 justify-center items-start" },
		content,
		toc,
	)
}
