import { TagFunc, ElementProps, ChildDom, html } from "@savant/core"

const Icon: TagFunc<HTMLElement> = (
    first?: ElementProps<HTMLElement> | ChildDom,
    ...rest: readonly ChildDom[]
): HTMLElement => {
    return html.i(first, rest)
}

export default Icon
