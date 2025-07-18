import { ChildDom, ElementProps, forceReactive, html } from "@savant/core"

export interface ControlGroupProps extends ElementProps {}

export default function ControlGroup(
	{ class: propClass, ...restProps }: ControlGroupProps,
	...children: ChildDom[]
): HTMLElement {
	const reactiveClass = forceReactive(propClass)

	return html.div(
		{
			class: () =>
				`group control !p-0 flex justify-between *:flex-[1_0_0] *:rounded-control *:not-first:rounded-l-none *:not-last:rounded-r-none *:[.button]:hover:form-soft ${reactiveClass.val}`,
			...restProps,
		},

		children.flatMap((child, childIdx) => [
			child,
			childIdx < children.length - 1
				? html.span({ class: "bg-current/50 w-px max-w-px h-auto" })
				: undefined,
		]),
	)
}
