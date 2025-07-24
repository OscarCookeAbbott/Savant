import { ChildDom, ElementProps, forceReactive, html } from "@savant/core"

type ButtonProps = ElementProps<HTMLButtonElement>

export default function Button(
	{
		class: propClass,
		type = "button",
		tabIndex = 0,
		...restProps
	}: ButtonProps,
	...children: ChildDom[]
): HTMLButtonElement {
	const reactiveClass = forceReactive(propClass)

	return html.button(
		{
			type,
			tabIndex,
			class: () => `button select-none ${reactiveClass.val}`,
			...restProps,
		},

		children,
	)
}
