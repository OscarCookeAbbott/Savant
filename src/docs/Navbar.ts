import { ChildDom, derive, html, optionalAttribute, State } from ".."
import { Link } from "../routing"
import { getRouterPathname } from "../routing/helpers"

type NavOption = {
    name: string
    path?: string
    dom?: ChildDom
    children?: NavOption[]
}

export default function Navbar({
    options,
    class: propClass,
}: {
    options: NavOption[]
    class?: string
}): HTMLElement {
    const path = derive(() => decodeURI(getRouterPathname()))

    return html.div(
        {
            name: "Navbar",
            class: `p-6 flex flex-col overflow-y-auto fixed top-12 h-[calc(100%-3rem)] left-0 bg-background border-r border-surface-200 dark:border-surface-700 ${propClass}`,
        },

        options.map((option) => NavOption(option, 0, path)),
    )
}

function NavOption(
    option: NavOption,
    depth: number,
    currentPath: State<string>,
): ChildDom {
    return [
        Link(
            {
                href: option.path,
                disabled: option.path === undefined,
                "data-selected": optionalAttribute(
                    () => currentPath.val === option.path || undefined,
                ),
                "data-group": optionalAttribute(
                    () => (depth === 0 && option.children) || undefined,
                ),
                style: `--indent: ${depth}rem;`,
                class: "relative flex gap-4 group text-mood-weak data-group:text-mini data-group:uppercase data-group:not-first:mt-6 data-group:mb-1 not-data-selected:hover:text-foreground data-selected:mood-accent data-selected:z-10",
            },

            html.span({
                class: "absolute h-full w-px left-0 bg-current not-group-data-selected:opacity-50 group-data-group:hidden group-hover:w-[4px] group-data-selected:w-[4px] transition-all",
            }),

            html.span(
                {
                    class: "not-group-data-group:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all",
                },

                option.name,
            ),
        ),

        option.children?.map((childOption) =>
            NavOption(childOption, depth + 1, currentPath),
        ),
    ]
}
