import { derive, html, State, state } from "@savant/core"
import { Link, Route } from "@savant/routing"
import { Button, Input, Popup } from "@savant/ui"
import { search } from "fast-fuzzy"

const MAX_DISPLAYED_SEARCH_LINKS = 5

export default function SiteSearch(searchLinks: (Route & { name: string })[]) {
	const searchOpen = state(false)

	const searchText = state("")

	const filteredLinks = derive(() =>
		searchText.val
			? search(searchText.val, searchLinks, {
					keySelector: (link) => link.name + " " + link.path,
				})
			: searchLinks,
	)

	const displayedLinks = derive(() =>
		filteredLinks.val.slice(0, MAX_DISPLAYED_SEARCH_LINKS),
	)

	let input: HTMLInputElement | undefined = undefined

	return Button(
		{
			class: "badge variant-pack-soft-outline",
		},

		html.i("search"),

		"Search",

		Popup(
			{
				visible: searchOpen,
				onShow: () => input?.focus(),
				onclick: () => (searchOpen.val = false),
				class: "fixed !top-0 inset-0 bg-background-50 glass overflow-hidden starting:opacity-0 transition",
			},

			() => {
				const searchInput = Input({
					type: "search",
					placeholder: "Search",
					value: searchText,
					lead: html.i({ class: "text-xl" }, "search"),
					class: "variant-pack-outline has-focus-visible:variant-soft",
				})

				input = searchInput.children[1] as HTMLInputElement

				return html.div(
					{
						onclick: (e: MouseEvent) => e.stopPropagation(),
						class: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-64 flex flex-col gap-4 card vessel bg-background w-md max-w-full shadow-xl not-sm:top-0 not-sm:translate-y-0",
					},

					searchInput,

					html.ul(
						{
							class: "flex flex-col gap-2",
						},

						html.li(
							{
								class: "text-mini uppercase",
							},

							"Pages",
						),

						() =>
							Results(
								displayedLinks,
								() => (searchOpen.val = false),
							),

						() =>
							ResultsCount(
								searchText,
								displayedLinks.val.length,
								filteredLinks.val.length,
							),
					),
				)
			},
		),
	)
}

function Results(
	displayedLinks: State<(Route & { name: string })[]>,
	onNavigate?: () => void,
) {
	return html.div(
		{ class: "contents" },
		displayedLinks.val.map((link) => PageLink(link, onNavigate)),
	)
}

function PageLink(link: Route & { name: string }, onclick?: () => void) {
	const displayPath = link.path
		.split("/")
		.slice(2, -1)
		.map((part) => part[0].toUpperCase() + part.slice(1))
		.join(" → ")

	return Link(
		{
			href: link.path,
			onclick,
			class: "button gap-2 justify-start variant-pack-soft active:mood-accent",
		},

		html.i(
			{
				class: "opacity-75",
			},
			"article",
		),

		html.span(
			{
				class: "flex-1",
			},

			html.span(
				{ class: "opacity-75" },

				displayPath ? `${displayPath} → ` : undefined,
			),

			html.span({ class: "font-semibold" }, link.name),
		),

		html.i("chevron_right"),
	)
}

function ResultsCount(
	searchText: State<string>,
	displayCount: number,
	totalCount: number,
) {
	if (displayCount === 0 && searchText.val.length > 0)
		return html.span(
			{
				class: "text-sm text-center break-all",
			},

			html.span(
				{
					class: "text-swatch-600-surface",
				},
				"No results for ",
			),

			html.span(
				{
					class: "font-semibold",
				},
				searchText,
			),
		)

	return html.span(
		{
			class: "text-xs w-fit self-center mt-1",
		},

		html.span(
			{
				class: "text-swatch-600-surface",
			},
			"Displaying ",
		),

		html.span(
			{
				class: "font-semibold",
			},
			displayCount,
		),

		html.span(
			{
				$hidden: () => totalCount === displayCount,
				class: "text-swatch-600-surface",
			},
			" of ",
		),

		html.span(
			{
				$hidden: () => totalCount === displayCount,
				class: "font-semibold",
			},
			totalCount,
		),

		html.span(
			{
				class: "text-swatch-600-surface",
			},
			" result",
			totalCount !== 1 ? "s" : "",
		),
	)
}
