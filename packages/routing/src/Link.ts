import {
	ChildDom,
	ElementProps,
	forceReactive,
	html,
	unwrapVal,
} from "@savant/core"

import { navigate } from "./helpers"

type LinkProps = ElementProps<HTMLAnchorElement> & {
	replace?: boolean
	disabled?: boolean
}

export default function Link(
	{
		replace = false,
		disabled = false,
		onclick,
		href,
		class: propClass,
		...restProps
	}: LinkProps,
	...children: ChildDom[]
): HTMLAnchorElement {
	const reactiveClass = forceReactive(propClass)

	return html.a(
		{
			href,
			onclick(this: GlobalEventHandlers, e: MouseEvent) {
				e.preventDefault()

				const hrefValue = unwrapVal(href)

				if (disabled || hrefValue === undefined) return

				navigate(String(hrefValue), { replace })

				if (typeof onclick === "function") onclick.call(this, e)
			},
			tabIndex: 0,
			class: () =>
				`not-disabled:focus-visible:focus-ring ${reactiveClass.val}`,
			...restProps,
		},
		...children,
	)
}
