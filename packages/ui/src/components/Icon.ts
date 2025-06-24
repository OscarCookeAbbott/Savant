import { ChildDom, ElementProps, html, TagFunc } from "@savant/core"

const Icon: TagFunc<HTMLElement> = (
	first?: ElementProps<HTMLElement> | ChildDom,
	...rest: readonly ChildDom[]
): HTMLElement => {
	return html.i(first, rest)
}

export default Icon
