import { html, state } from "@savant/core"
import { Code, Label, Radio, Select } from "@savant/ui"

import DocPage from "../../../../components/DocPage"

export default function Page() {
	const exampleForm = state("form-soft-outline")
	const exampleMood = state("mood-none")

	return DocPage(
		html.h1("Radio"),

		html.blockquote("Offers a clear and direct set of exclusive options."),

		html.h2("Demo"),

		html.div(
			{
				name: "Demo",
				class: "card vessel flex flex-col items-center gap-4",
			},

			html.div(
				{ class: "p-8 h-48 flex items-center" },

				Radio({
					value: state("Option 1"),
					options: [
						{ value: "Option 1" },
						{ value: "Option 2" },
						{ value: "Option 3" },
					],
					class: () => `w-48 ${exampleForm.val} ${exampleMood.val}`,
				}),
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
import { Radio } from "savant/ui"

Radio({
    value: state("Option 1"),
    options: [
        { value: "Option 1" },
        { value: "Option 2" },
        { value: "Option 3" },
    ],
    class: "${exampleForm.val} ${exampleMood.val}",
})`,
			),

		html.h2("Signature"),

		Code(
			{ language: "ts" },

			`\
function Radio<T>(
    props: {
        options: RadioOption<T>[],
        value: State<RadioOption<T> | undefined> = state(undefined),
        required: boolean = false,
        ...HTMLElementProps
}): HTMLElement

type RadioOption<T> = {
    value: T
    name?: string
    disabled?: boolean
}`,
		),
	)
}
