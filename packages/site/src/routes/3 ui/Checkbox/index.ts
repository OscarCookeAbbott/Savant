import { html, state } from "@savant/core"
import { Checkbox, Code, Label, Select } from "@savant/ui"

import DocPage from "../../../components/DocPage"

export default function Page() {
	const exampleVariant = state("variant-soft-outline")
	const exampleMood = state("mood-none")

	return DocPage(
		html.h1("Checkbox"),

		html.blockquote("Offers clear binary choices."),

		html.h2("Demo"),

		html.div(
			{
				name: "Demo",
				class: "card vessel flex flex-col items-center gap-4",
			},

			html.div(
				{ class: "p-8 h-48 flex items-center" },

				Checkbox(
					{
						class: () =>
							`w-48 ${exampleVariant.val} ${exampleMood.val}`,
					},

					"Demo Checkbox",
				),
			),

			html.div(
				{ class: "flex flex-wrap gap-4 justify-center" },

				Label(
					{ content: "Variant", class: "items-center" },

					Select({
						options: [
							{ value: "variant-outline" },
							{ value: "variant-soft" },
							{ value: "variant-soft-outline" },
							{ value: "variant-filled" },
						],
						value: exampleVariant,
						class: "variant-outline hover:variant-soft w-48",
					}),
				),

				Label(
					{ content: "Mood", class: "items-center" },

					Select({
						options: [
							{ value: "mood-none" },
							{ value: "mood-accent" },
							{ value: "mood-info" },
							{ value: "mood-success" },
							{ value: "mood-caution" },
							{ value: "mood-critical" },
						],
						value: exampleMood,
						class: "variant-outline hover:variant-soft w-48",
					}),
				),
			),
		),

		() =>
			Code(
				{ language: "ts" },

				`\
import { Checkbox } from "savant/ui"

Checkbox(
    { class: \`${exampleVariant.val} ${exampleMood.val}\` },
    "Demo Checkbox",
)`,
			),

		html.h2("Signature"),

		Code(
			{ language: "ts" },

			`\
function Checkbox(
    props: {
        value: State<boolean> = state(false),
        required: boolean = false,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`,
		),
	)
}
