import { html } from "@savant/core"
import { Button, Code, Tooltip } from "@savant/ui"

import DocPage from "../../../../components/DocPage"

export default function Page() {
	return DocPage(
		html.h1("Tooltip"),

		html.blockquote("Provides concise contextual extra information."),

		html.h2("Demo"),

		html.div(
			{
				class: "card vessel flex flex-col items-center gap-4",
			},

			html.div(
				{
					class: "p-8 flex flex-col gap-8 w-3xs h-48 justify-center",
				},

				Button(
					{
						class: "text-accent-500 font-bold",
					},

					"Tooltip (Hover Me)",

					Tooltip(
						{
							direction: "top",
							class: "left-1/2 -translate-x-1/2",
						},
						"Demo Tooltip",
					),
				),
			),
		),

		() =>
			Code(
				{ language: "ts" },

				`\
import { Button, Tooltip } from "savant/ui"

Button(
    {
        class: "text-accent-500 font-bold",
    },

    "Tooltip (Hover Me)",

    Tooltip(
        {
            direction: "top",
            class: "left-1/2 -translate-x-1/2",
        },

        "Demo Tooltip",
    ),
)`,
			),

		html.h2("Signature"),

		Code(
			{ language: "ts" },

			`\
function Tooltip(
    props: {
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`,
		),
	)
}
