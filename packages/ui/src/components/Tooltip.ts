import { ChildDom, ElementProps, forceReactive } from "@savant/core"

import Popup, { PopupDirection, PopupTrigger } from "./Popup"

type TooltipProps = ElementProps & {
	direction?: PopupDirection
	trigger?: PopupTrigger | PopupTrigger[]
}

export default function Tooltip(
	{
		trigger = [PopupTrigger.HOVER, PopupTrigger.FOCUS],
		direction = PopupDirection.BOTTOM,

		class: propClass,
		...restProps
	}: TooltipProps,
	...children: ChildDom[]
): HTMLElement {
	const reactiveClass = forceReactive(propClass)

	return Popup(
		{
			trigger: trigger,
			direction: direction,
			class: () =>
				`!control variant-soft-outline badge glass px-2 py-1 max-w-xs text-xs flex ${reactiveClass.val}`,
			...restProps,
		},

		children,
	)
}
