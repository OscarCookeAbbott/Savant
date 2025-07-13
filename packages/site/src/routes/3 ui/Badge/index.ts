import { html, state } from "@savant/core"
import { Badge, Code, Label, Select } from "@savant/ui"

import DocPage from "../../../components/DocPage"

export default function Page() {
	const exampleForm = state("form-soft-outline")
	const exampleMood = state("mood-none")

	return DocPage(
		html.h1("Badge"),

		html.blockquote("Delivers small but important pieces of information."),

		html.h2("Design"),

		html.p(
			"Badges are designed to be a small, unobtrusive elements that convey important information concisely. It is typically used to highlight new or unread items, notifications, or status updates.",
		),

		html.p(
			"Badges use a smaller font size and padding to make them the same height as standard text, ensuring it fits seamlessly into layouts.",
		),

		html.p(
			"Badges color the text slightly based on mood to indicate they are not interactive, differentiating them from small buttons which instead use the standard foreground text color.",
		),

		html.h2("Demo"),

		html.div(
			{
				name: "Demo",
				class: "card vessel flex flex-col items-center gap-4",
			},

			html.div(
				{ class: "p-8 h-48 flex items-center" },

				Badge(
					{
						class: () => `${exampleForm.val} ${exampleMood.val}`,
					},

					"Demo Badge",
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
import { Badge } from "savant/ui"

Badge(
    { class: "${exampleForm.val} ${exampleMood.val}" },
    "Demo Badge",
)`,
			),

		html.h2("Signature"),

		Code(
			{ language: "ts" },

			`\
function Badge(
    props: HTMLElementProps,
    ...children: ChildDom[]
): HTMLElement`,
		),
	)
}
