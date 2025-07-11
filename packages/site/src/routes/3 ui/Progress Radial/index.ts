import { html, state } from "@savant/core"
import {
	Checkbox,
	Code,
	Input,
	Label,
	ProgressRadial,
	Select,
} from "@savant/ui"

import DocPage from "../../../components/DocPage"

export default function Page() {
	const exampleVariant = state("variant-soft-outline")
	const exampleMood = state("mood-none")
	const exampleProgress = state(50)
	const exampleIndefinite = state(true)
	const exampleThickness = state(2)

	return DocPage(
		html.h1("Circular Progress Bar"),

		html.blockquote("Displays the progress state of a lengthy process."),

		html.h2("Design"),

		html.p(
			"Circular Progress Bars are used to compactly provide feedback to the user on the current progress state of a lengthy process.",
		),

		html.p(
			"Circular Progress Bars default to matching the size of enclosing text flows, ensuring they fit seamlessly into layouts.",
		),

		html.p(
			"Circular Progress Bars can be given children which will be displayed within the circle. Such children should be short, typically a percentage or number. Anything longer should be placed beneath the progress bar.",
		),

		html.h2("Demo"),

		html.div(
			{
				name: "Demo",
				class: "card vessel flex flex-col items-center gap-4",
			},

			html.div(
				{ class: "p-8 h-48 flex gap-4 items-center" },

				ProgressRadial(
					{
						progress: exampleProgress,
						indefinite: exampleIndefinite,
						thickness: exampleThickness,
						class: () =>
							`p-2 ${exampleVariant.val} ${exampleMood.val}`,
					},
					"Loading...",
				),

				html.span(
					{ class: "flex gap-2 items-center" },

					ProgressRadial({
						progress: exampleProgress,
						indefinite: exampleIndefinite,
						thickness: exampleThickness,
						class: () => `${exampleVariant.val} ${exampleMood.val}`,
					}),

					"Loading...",
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

				Label(
					{ content: "Progress", class: "items-center" },

					Input({
						value: exampleProgress,
						min: 0,
						max: 100,
						class: "variant-outline hover:variant-soft w-48",
					}),
				),

				Label(
					{ content: "Indefinite", class: "items-center" },

					Checkbox(
						{
							value: exampleIndefinite,
							class: "variant-outline hover:variant-soft w-48",
						},
						"Enabled",
					),
				),

				Label(
					{ content: "Thickness", class: "items-center" },

					Input({
						type: "number",
						value: exampleThickness,
						class: "variant-outline hover:variant-soft w-48",
					}),
				),
			),
		),

		() =>
			Code(
				{ language: "ts" },

				`\
import { ProgressRadial } from "savant/ui"

ProgressRadial(
    {
        progress: ${exampleProgress.val},
        indefinite: ${exampleIndefinite.val},
		thickness: ${exampleThickness.val},
        class: "p-2 ${exampleVariant.val} ${exampleMood.val}"
    },
    "Loading...",
),

html.span(
	{ class: "flex gap-2 items-center" },

	ProgressRadial({
		progress: ${exampleProgress.val},
		indefinite: ${exampleIndefinite.val},
		thickness: ${exampleThickness.val},
		class: "${exampleVariant.val} ${exampleMood.val}",
	}),

	"Loading...",
),`,
			),

		html.h2("Signature"),

		Code(
			{ language: "ts" },

			`\
function ProgressRadial(
    {
        progress?: number = 50,
        indefinite?: boolean = false,

        ...restProps
    }: ProgressRadialProps,
    ...children: ChildDom[]
): HTMLElement`,
		),
	)
}
