import { ElementProps, html } from ".."
import { forceReactive } from "../utils"
import Showdown from "showdown"

type MarkdownProps = ElementProps & {}

export default function Markdown(
    { class: propClass, ...restProps }: MarkdownProps,
    markdown: string,
): HTMLElement {
    const reactiveClass = forceReactive(propClass)

    const mdConverter = new Showdown.Converter()
    const mdHtml = mdConverter.makeHtml(markdown)

    const mdDom = html.div({
        class: `style-defaults ${reactiveClass.val}`,
        ...restProps,
    })
    mdDom.innerHTML = mdHtml

    // Convert any internal code snippets
    Prism.highlightAllUnder(mdDom)

    return mdDom
}
