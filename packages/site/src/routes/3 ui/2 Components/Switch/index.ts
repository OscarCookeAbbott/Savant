import { html, state } from "@savant/core"
import { Code, Label, Select, Switch } from "@savant/ui"

import DocPage from "../../../../components/DocPage"

export default function Page() {
	const exampleForm = state("form-soft-outline")
	const exampleMood = state("mood-none")

	return DocPage(
		html.h1("Switch"),

		html.blockquote("Offers clear binary choices."),

		html.h2("Demo"),

		html.div(
			{
				name: "Demo",
				class: "card vessel flex flex-col items-center gap-4",
			},

			html.div(
				{ class: "p-8 h-48 flex items-center" },

				Switch(
					{
						class: () =>
							`w-48 ${exampleForm.val} ${exampleMood.val}`,
					},

					"Demo Switch",
				),
			),

			html.div(
				{ class: "flex flex-wrap gap-4 justify-center" },

				Label(
					{ content: "Form", class: "items-center" },

					Select({
						options: [
							{ value: "form-outline" },
							{ value: "form-soft" },
							{ value: "form-soft-outline" },
							{ value: "form-filled" },
						],
						value: exampleForm,
						class: "form-pack-outline w-48",
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
							{ value: "mood-danger" },
						],
						value: exampleMood,
						class: "form-pack-outline w-48",
					}),
				),
			),
		),

		() =>
			Code(
				{ language: "ts" },

				`\
import { Switch } from "savant/ui"

Switch(
    { class: \`${exampleForm.val} ${exampleMood.val}\` },
    "Demo Switch",
)`,
			),

		html.h2("Signature"),

		Code(
			{ language: "ts" },

			`\
function Switch(
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
