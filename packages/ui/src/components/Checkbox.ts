import {
	ChildDom,
	ElementProps,
	forceReactive,
	html,
	State,
	state,
	svg,
} from "@savant/core"

import Button from "./Button"

type CheckboxProps = ElementProps & {
	value?: State<boolean>

	required?: boolean
}

export default function Checkbox(
	{
		value = state(false),

		required,

		class: propClass,
		...restProps
	}: CheckboxProps,
	...children: ChildDom[]
): HTMLElement {
	const reactiveClass = forceReactive(propClass)

	return html.div(
		{
			name: "Checkbox",
			onclick: () => (value.val = !value.val),
			"$data-checked": value,
			class: () =>
				`flex cursor-pointer justify-between items-center gap-2 select-none group ${reactiveClass.val
					?.split(" ")
					.filter((className) => !className.includes("form"))
					.join(" ")}`,
			...restProps,
		},

		children,

		Button(
			{
				role: "checkbox",
				class: () =>
					`button size-5 !rounded-md aspect-square focus-visible:mood-accent !p-0.5 group-has-invalid:mood-danger ${reactiveClass.val
						?.split(" ")
						.filter((className) => className.includes("form"))
						.join(" ")}`,
			},

			svg.svg(
				{
					viewBox: "0 0 100 100",
					class: "size-4 not-group-data-checked:hidden",
					style: "stroke-linecap:round; stroke-linejoin:round;",
				},

				svg.path({
					d: "M20,60L40,80L80,20",
					class: "stroke-current stroke-[10] fill-none",
				}),
			),
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
