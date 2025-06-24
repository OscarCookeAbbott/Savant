import { html, State, state } from "@savant/core"
import { Code, Input, Label, Select } from "@savant/ui"

import DocPage from "../../../components/DocPage"

export default function Page() {
	const exampleType: State<"text" | "number"> = state("text")
	const exampleVariant = state("variant-soft-outline")
	const exampleMood = state("mood-none")

	return DocPage(
		html.h1("Input"),

		html.blockquote("Direct entry of text or numbers."),

		html.h2("Demo"),

		html.div(
			{
				name: "Demo",
				class: "card vessel flex flex-col items-center gap-4",
			},

			html.div(
				{ class: "p-8 h-48 flex flex-col justify-center gap-8" },

				() =>
					Input({
						value: state(
							exampleType.val === "text" ? "Example text" : 42,
						),
						class: () => `${exampleVariant.val} ${exampleMood.val}`,
					}),
			),

			html.div(
				{ class: "flex flex-wrap gap-4 justify-center" },

				Label(
					{ content: "Type", class: "items-center" },

					Select({
						options: [{ value: "text" }, { value: "number" }],
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
import { Input } from "savant/ui"

Input({
    value: state(${exampleType.val === "text" ? '"Example text"' : 42}),
    class: "${exampleVariant.val} ${exampleMood.val}"
})`,
			),

		html.h2("Signature"),

		Code(
			{ language: "ts" },

			`\
function Input<T extends string | number>(
    props: {
        value: State<T | undefined> = state(undefined),
        type: string = <typeof T>,
        placeholder: string = "Enter {type}...",
        required: boolean = false,

        onValueChanged?: (value: T) => void,
        onValidityChanged?: (validity: boolean) => void,

        lead?: ChildDom,
        trail?: ChildDom,

        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`,
		),
	)
}
