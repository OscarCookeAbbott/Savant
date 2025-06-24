import {
    ElementProps,
    html,
    state,
    forceReactive,
} from "@savant/core"

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
                    "$data-indented": () => indent > 0,
                    "$data-selected": () => firstVisibleHeading.val === heading,
                    style: `--indent: ${1 + (indent - 1) * 0.5}rem;`,
                    class: "group relative flex gap-4 cursor-pointer text-swatch-700-mood not-data-selected:hover:text-swatch-900-foreground data-selected:mood-accent data-selected:text-mood-500",
                },

                html.span({
                    name: "Divider",
                    class: "absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-[4px] group-data-selected:w-[4px] transition-all",
                }),

                html.span(
                    {
                        name: "Title",
                        class: "group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all",
                    },

                    heading.textContent,
                ),
            )
        }),
    )
}
