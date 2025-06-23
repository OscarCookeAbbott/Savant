import { ChildDom, derive, html, State } from "@savant/core"
import { Link, getRouterPath } from "@savant/routing"

type NavOption = {
    name: ChildDom
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
    const path = derive(() => decodeURI(getRouterPath()))

    return html.div(
        {
            name: "Navbar",
            class: `p-6 flex flex-col overflow-y-auto fixed top-12 h-[calc(100%-3rem)] left-0 bg-background border-r border-surface-500/50 ${propClass}`,
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
                onclick: () => {
                    window.scrollTo({ top: 0, left: 0 })
                },
                "$data-selected": () =>
                    currentPath.val ===
                    `${import.meta.env.BASE_URL.slice(0, -1)}${option.path}`,
                "$data-group": () => depth === 0 && option.children,
                "$data-indented": () => depth !== 0,
                style: `--indent: ${depth}rem;`,
                class: "relative flex gap-4 group text-mood-weak data-selected:text-mood data-group:font-semibold data-group:not-first:mt-6 data-group:mb-1 not-data-selected:hover:text-foreground data-selected:mood-accent data-selected:z-10",
            },

            html.span({
                name: "Divider",
                class: "absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-1 group-data-selected:w-1 transition-all",
            }),

            html.span(
                {
                    name: "Title",
                    class: "group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all",
                },

                option.name,
            ),
        ),

        option.children?.map((childOption) =>
            NavOption(childOption, depth + 1, currentPath),
        ),
    ]
}
