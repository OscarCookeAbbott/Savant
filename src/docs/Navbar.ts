import { derive, html, optionalAttribute } from ".."
import { Link } from "../routing"
import { getRouterPathname } from "../routing/helpers"

export default function Navbar({
    options,
    class: propClass,
}: {
    options: Map<string, string[]>
    class?: string
}): HTMLElement {
    const path = derive(() => decodeURI(getRouterPathname()))

    return html.div(
        {
            name: "Navbar",
            class: `p-6 flex flex-col overflow-y-auto fixed top-12 h-[calc(100%-3rem)] left-0 bg-background border-r border-surface-200 dark:border-surface-700 ${propClass}`,
        },

        [...options.entries()].map(([header, pages]) => [
            html.span(
                {
                    class: "text-mini uppercase not-first:mt-6 mb-1",
                },
                header,
            ),

            pages.map((option) => {
                const optionPath = `/${header}/${option}`

                return Link(
                    {
                        href: optionPath,
                        "data-selected": optionalAttribute(
                            () => path.val === optionPath || undefined,
                        ),
                        class: "relative flex gap-4 group text-foreground-weak hover:text-foreground data-selected:text-foreground-invert data-selected:mood-accent data-selected:z-10",
                    },

                    html.span({
                        class: "absolute h-full w-px left-0 bg-current not-group-data-selected:opacity-50 group-hover:w-[4px] group-data-selected:w-full group-data-selected:bg-accent transition-all",
                    }),

                    html.span(
                        {
                            class: "ml-4 justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all",
                        },

                        option,
                    ),
                )
            }),
        ]),
    )
}
