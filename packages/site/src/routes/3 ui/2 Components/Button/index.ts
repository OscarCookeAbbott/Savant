import { html, state } from "@savant/core"
import { Button, Code, Label, Select } from "@savant/ui"

import DocPage from "../../../../components/DocPage"

export default function Page() {
	const exampleForm = state("form-soft-outline")
	const exampleMood = state("mood-none")
	const extraClasses = state([])

	return DocPage(
		html.h1("Button"),

		html.blockquote("Performs some action on user click."),

		html.h2("Design"),

		html.p(
			"Button components are used when a specific, clear and manual action needs to be performed by the user..",
		),

		html.h2("Demo"),

		html.div(
			{
				name: "Demo",
				class: "card vessel flex flex-col items-center gap-4",
			},

			html.div(
				{ class: "p-8 h-48 flex items-center" },

				Button(
					{
						class: () =>
							`${[exampleForm.val, exampleMood.val, ...extraClasses.val].join(" ")}`,
					},

					"Demo Button",
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

				Label(
					{ content: "Extras", class: "items-center" },

					Select({
						options: [
							{ value: "transition" },
							{ value: "hover:raised" },
							{ value: "active:lowered" },
						],
						value: extraClasses,
						class: "form-pack-outline w-48",
					}),
				),
			),
		),

		() =>
			Code(
				{ language: "ts" },

				`\
import { Button } from "savant/ui"

Button(
    { class: "${[exampleForm.val, exampleMood.val, ...extraClasses.val].join(" ")}" },
    "Demo Button",
)`,
			),

		html.h2("Signature"),

		Code(
			{ language: "ts" },

			`\
function Button(
    props: HTMLButtonProps,
    ...children: ChildDom[]
): HTMLButtonElement`,
		),
	)
}
