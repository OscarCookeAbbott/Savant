import { ChildDom, ElementFunction, ElementProps, html } from "@savant/core"

const Icon: ElementFunction<HTMLElement> = (
	first?: ElementProps<HTMLElement> | ChildDom,
	...rest: readonly ChildDom[]
): HTMLElement => {
	return html.i(first, rest)
}

export default Icon
