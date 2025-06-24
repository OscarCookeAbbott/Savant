import { ChildDom, ElementProps, forceReactive, html } from "@savant/core"

type CalloutProps = ElementProps & {
	icon: string
}

export default function Callout(
	{ icon, class: propClass, ...restProps }: CalloutProps,
	...children: ChildDom[]
): HTMLElement {
	const reactiveClass = forceReactive(propClass)

	return html.div(
		{
			class: () =>
				`flex items-center control variant-soft-outline text-swatch-700-mood gap-2 ${reactiveClass.val}`,
			...restProps,
		},

		html.i({ class: `text-mood-500` }, icon),

		children,
	)
}
