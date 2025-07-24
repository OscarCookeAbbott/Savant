import {
	ChildDom,
	derive,
	ElementProps,
	html,
	State,
	state,
	svg,
} from "@savant/core"
import { getRouterPath, Link } from "@savant/routing"
import { Button } from "@savant/ui"

//////// Types ////////

export type NavOption = NavGroup | NavLink

export interface NavGroup {
	name: ChildDom
	children: NavOption[]
}

export interface NavLink {
	name: ChildDom
	path: string
	dom: ChildDom
}

//////// Component ////////

interface NavbarProps extends ElementProps<HTMLElement> {
	options: NavOption[]

	onNavigated?: () => void
}

export default function Navbar({
	options,
	onNavigated,

	class: propClass,
	...restProps
}: NavbarProps): HTMLElement {
	const path = derive(() => decodeURI(getRouterPath()))

	return html.div(
		{
			name: "Navbar",
			class: `p-6 flex flex-col overflow-y-auto fixed top-12 h-[calc(100%-3rem)] left-0 bg-background border-r border-swatch-300-surface ${propClass}`,
			...restProps,
		},

		options.map((option) =>
			"children" in option
				? NavOptionGroup(option, 0, path)
				: NavOption(option, 0, path, () => {
						window.scrollTo({ top: 0, left: 0 })
						onNavigated?.()
					}),
		),
	)
}

function NavOptionGroup(
	option: NavGroup,
	depth: number,
	currentPath: State<string>,
): ChildDom {
	const isOpen = state(true)

	return [
		html.li(
			{
				"$data-indented": () => depth !== 0,
				"$data-open": isOpen,
				style: `--indent: ${depth}rem;`,
				class: "group relative select-none flex gap-4 data-indented:text-swatch-700-mood not-data-indented:font-semibold not-data-indented:not-first:mt-6 not-data-indented:mb-1",
			},

			html.span({
				name: "Magic Divider",
				class: "absolute left-0 h-full w-px bg-swatch-400-mood not-group-data-indented:hidden",
			}),

			Button(
				{
					name: "Title",
					onclick: () => (isOpen.val = !isOpen.val),
					class: "p-0 flex items-center justify-start flex-1 py-0.5 transition-all group-data-indented:ml-(--indent)",
				},

				option.name,

				svg.svg(
					{
						viewBox: "0 0 100 100",
						class: "size-5 rounded-full text-swatch-700-mood transition not-group-data-open:rotate-180 not-group-data-indented:hidden not-disabled:group-hover:form-soft",
						style: "stroke-linecap:round; stroke-linejoin:round;",
					},

					svg.path({
						d: "M25,40L50,60L75,40",
						class: "stroke-current stroke-[10] fill-none",
					}),
				),
			),
		),

		() =>
			html.div(
				{ class: "contents" },
				isOpen.val
					? option.children?.map((childOption) =>
							"children" in childOption
								? NavOptionGroup(
										childOption,
										depth + 1,
										currentPath,
									)
								: NavOption(
										childOption,
										depth + 1,
										currentPath,
									),
						)
					: undefined,
			),
	]
}

function NavOption(
	option: NavLink,
	depth: number,
	currentPath: State<string>,

	onclick?: () => void,
): ChildDom {
	return [
		Link(
			{
				href: option.path,
				disabled: option.path === undefined,
				onclick,
				"$data-selected": () =>
					currentPath.val ===
					`${import.meta.env.BASE_URL.slice(0, -1)}${option.path}`,
				"$data-indented": () => depth !== 0,
				style: `--indent: ${depth}rem;`,
				class: "relative flex gap-4 group text-swatch-700-mood data-selected:text-swatch-500-mood not-data-selected:hover:text-swatch-900-foreground data-selected:mood-accent",
			},

			html.span({
				name: "Divider",
				class: "absolute left-0 h-full w-px bg-swatch-400-mood transition-all group-hover:w-1 group-data-selected:w-1 group-data-selected:bg-swatch-500-mood not-group-data-indented:hidden",
			}),

			html.span(
				{
					name: "Title",
					class: "flex-1 py-0.5 transition-all group-data-indented:ml-(--indent) group-data-selected:font-semibold",
				},

				option.name,
			),
		),
	]
}
