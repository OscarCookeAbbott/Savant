import { ElementProps, html, optionalAttribute, state } from ".."
import { forceReactive } from "../utils"

export default function TableOfContents(
    { class: propClass }: ElementProps,
    content: HTMLElement,
): HTMLElement {
    const reactiveClass = forceReactive(propClass)

    const headings = [...content.querySelectorAll("h1, h2, h3, h4, h5")]

    let firstVisibleHeading = state<Element | undefined>(headings[0])

    document.addEventListener("scroll", () => {
        headings.some((heading, headingIdx) => {
            const headingRect = heading.getBoundingClientRect()

            if (headingRect.bottom > content.scrollTop + 112) {
                firstVisibleHeading.val = headings[Math.max(headingIdx - 1, 0)]
                return true
            }
        })
    })

    return html.ul(
        {
            class: () => `flex flex-col ${reactiveClass.val}`,
        },

        [...headings].map((heading) => {
            const indent = parseInt(heading.tagName.slice(1)) - 1

            return html.li(
                {
                    onclick: () =>
                        heading.scrollIntoView({ behavior: "smooth" }),
                    "data-indented": optionalAttribute(() => indent),
                    "data-selected": optionalAttribute(
                        () => firstVisibleHeading.val === heading,
                    ),
                    style: `--indent: ${1 + (indent - 1) * 0.5}rem;`,
                    class: "group relative flex gap-4 cursor-pointer text-mood-weak not-data-selected:hover:text-foreground data-selected:mood-accent data-selected:text-mood",
                },

                html.span({
                    class: "absolute h-full w-px left-0 bg-current not-group-data-indented:hidden not-group-data-selected:opacity-50 group-hover:w-[4px] group-data-selected:w-[4px] transition-all",
                }),

                html.span(
                    {
                        class: "group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all",
                    },

                    heading.textContent,
                ),
            )
        }),
    )
}
