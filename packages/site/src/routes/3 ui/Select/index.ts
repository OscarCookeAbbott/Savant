import { html, State, state } from "@savant/core"
import { Code, Label, Select } from "@savant/ui"

import DocPage from "../../../components/DocPage"

const DemoSelectType = {
	SINGLE: "single",
	MULTI: "multi",
	MULTICHIPS: "multichips",
} as const
type DemoSelectType = (typeof DemoSelectType)[keyof typeof DemoSelectType]

export default function Page() {
	const exampleType: State<DemoSelectType> = state(DemoSelectType.SINGLE)
	const exampleVariant = state("variant-soft-outline")
	const exampleMood = state("mood-none")

	return DocPage(
		html.h1("Select"),

		html.blockquote("Enables compact selection of one or more options."),

		html.h2("Demo"),

		html.div(
			{
				name: "Demo",
				class: "card vessel flex flex-col items-center gap-4",
			},

			html.div(
				{
					class: "p-8 flex flex-col justify-center gap-8 w-3xs h-48",
				},

				() =>
					Select({
						value:
							exampleType.val === DemoSelectType.SINGLE
								? state("Option 1")
								: state(["Option 1", "Option 2"]),
						options: [
							{ value: "Option 1" },
							{ value: "Option 2", disabled: true },
							{ value: "Option 3" },
							{ value: "Option 4" },
						],
						useChips: exampleType.val === DemoSelectType.MULTICHIPS,
						class: () => `${exampleVariant.val} ${exampleMood.val}`,
					}),
			),

			html.div(
				{ class: "flex flex-wrap gap-4 justify-center" },

				Label(
					{ content: "Type", class: "items-center" },

					Select({
						options: [
							{ value: "single" },
							{ value: "multi" },
							{ value: "multichips" },
						],
						value: exampleType,
						class: "variant-outline w-48",
					}),
				),

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
						class: "variant-outline w-48",
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
							{ value: "mood-warning" },
							{ value: "mood-critical" },
						],
						value: exampleMood,
						class: "variant-outline w-48",
					}),
				),
			),
		),

		() =>
			Code(
				{ language: "ts" },

				`\
import { Select } from "savant/ui"

Select({
    value: state(${exampleType.val === DemoSelectType.SINGLE ? `"Option 1"` : `["Option 1", "Option 2"])`}),
    options: [
        { value: "Option 1" },
        { value: "Option 2", disabled: true },
        { value: "Option 3" },
        { value: "Option 4" },
    ],${
		exampleType.val === DemoSelectType.MULTICHIPS
			? `
    useChips: true,`
			: ""
	}
    class: "${exampleVariant.val} ${exampleMood.val}",
})`,
			),

		html.h2("Signature"),

		Code(
			{ language: "ts" },

			`\
function Select<T>(
    props: {
        options: SelectOption<T>[],
        value: State<SelectOption<T> | undefined> = state(undefined),
        required: boolean = false,
        ...HTMLElementProps
}): HTMLElement

type SelectOption<T> = {
    value: T
    name?: string
    disabled?: boolean
}`,
		),
	)
}
