import { html } from "@savant/core"
import { Callout, Code } from "@savant/ui"
import { Markdown } from "@savant/ui"

import DocPage from "../../../components/DocPage"

export default function Page() {
	return DocPage(
		html.h1("Code"),

		html.blockquote(
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
import { Code } from "savant/ui"

Code(
    { language: "ts" },

    \`\\
import { Code } from "savant/ui"

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
}
