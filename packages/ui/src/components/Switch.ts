import {
	ChildDom,
	ElementProps,
	forceReactive,
	html,
	State,
	state,
} from "@savant/core"

import Button from "./Button"

type Switch = ElementProps & {
	value?: State<boolean>

	required?: boolean
}

export default function Switch(
	{
		value = state(false),

		required,

		class: propClass,
		...restProps
	}: Switch,
	...children: ChildDom[]
): HTMLElement {
	const reactiveClass = forceReactive(propClass)

	return html.div(
		{
			name: "Switch",
			onclick: () => (value.val = !value.val),
			"$data-checked": value,
			class: () =>
				`flex cursor-pointer justify-between items-center gap-2 select-none group ${reactiveClass.val
					?.split(" ")
					.filter((className) => !className.includes("variant"))
					.join(" ")}`,
			...restProps,
		},

		children,

		Button(
			{
				name: "Toggle",
				role: "checkbox",
				class: () =>
					`rounded-full !gap-0 justify-start !p-1 w-12 ${reactiveClass.val
						?.split(" ")
						.filter((className) => className.includes("variant"))
						.join(" ")}`,
				...restProps,
			},

			html.span({
				name: "Spacer",
				class: "transition-[flex] group-data-checked:grow",
			}),

			html.span({
				name: "Thumb",
				class: "bg-current rounded-full w-6 h-4 transition-opacity not-group-data-checked:opacity-75",
			}),
		),

		// Hidden checkbox input for form interaction
		html.input({
			type: "checkbox",
			checked: value,
			required: required,
			hidden: true,
		}),
	)
}
