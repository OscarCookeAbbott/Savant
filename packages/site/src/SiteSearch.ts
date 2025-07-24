import { derive, html, State, state } from "@savant/core"
import { Link, Route } from "@savant/routing"
import { Button, Input, Markdown, Popup } from "@savant/ui"
import { search } from "fast-fuzzy"

const MAX_DISPLAYED_SEARCH_LINKS = 5

export default function SiteSearch(searchLinks: (Route & { name: string })[]) {
	const searchOpen = state(false)

	return Button(
		{
			class: "badge form-pack-outline",
		},

		html.i("search"),

		"Search",

		SearchPopup(searchOpen, searchLinks),
	)
}

function SearchPopup(
	searchOpen: State<boolean>,
	searchLinks: (Route & { name: string })[],
) {
	const searchText = state("")

	const filteredLinks = derive(() =>
		searchText.val
			? search(searchText.val, searchLinks, {
					keySelector: (link) => `${link.name} ${link.path}`,
				})
			: searchLinks,
	)

	const displayedLinks = derive(() =>
		filteredLinks.val.slice(0, MAX_DISPLAYED_SEARCH_LINKS),
	)

	let input: HTMLInputElement | undefined = undefined

	const searchInput = Input({
		type: "search",
		placeholder: "Search",
		value: searchText,
		lead: html.i({ class: "text-xl" }, "search"),
		class: "form-pack-outline has-focus-visible:form-soft",
	})

	input = searchInput.children[1] as HTMLInputElement

	return Popup(
		{
			visible: searchOpen,
			onShow: () => input?.focus(),
			onclick: () => (searchOpen.val = false),
			class: "fixed !top-0 inset-0 bg-surface-500/25 glass overflow-hidden starting:opacity-0 transition",
		},

		() =>
			html.popupContent(
				{
					onclick: (e: MouseEvent) => e.stopPropagation(),
					class: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-64 flex flex-col gap-4 card not-dark:ring-0 vessel bg-background w-md max-w-full shadow-lg not-sm:top-0 not-sm:translate-y-0",
				},

				searchInput,

				html.ul(
					{
						class: "flex flex-col gap-2",
					},

					html.li(
						{
							class: "font-semibold",
						},

						"Pages",
					),

					Results(displayedLinks, () => (searchOpen.val = false)),

					ResultsCount(searchText, displayedLinks, filteredLinks),
				),
			),
	)
}

function Results(
	displayedLinks: State<(Route & { name: string })[]>,
	onNavigate?: () => void,
) {
	return () =>
		html.div(
			{ class: "contents" },
			displayedLinks.val.map((link) => PageLink(link, onNavigate)),
		)
}

function PageLink(link: Route & { name: string }, onclick?: () => void) {
	const displayPath = link.path.split("/").slice(2, -1).join(" → ")

	return Link(
		{
			href: link.path,
			onclick,
			class: "button gap-2 justify-start form-pack-soft active:mood-accent",
		},

		html.i(
			{
				class: "text-swatch-700-mood",
			},
			"article",
		),

		html.span(
			{
				class: "flex-1",
			},

			html.span(
				{ class: "text-swatch-700-mood" },

				displayPath ? `${displayPath} → ` : undefined,
			),

			html.span({ class: "font-semibold" }, link.name),
		),

		html.i("chevron_right"),
	)
}

function ResultsCount(
	searchText: State<string>,
	displayedItems: State<unknown[]>,
	totalItems: State<unknown[]>,
) {
	const isEmpty = derive(
		() => displayedItems.val.length === 0 && searchText.val.length > 0,
	)

	return () =>
		Markdown(
			{
				name: "Search results info",
				class: "text-sm text-center break-all mt-1 [&_strong]:text-swatch-900-mood",
			},

			isEmpty.val
				? `No results for **${searchText.val}**`
				: `Displaying **${displayedItems.val.length}** of **${totalItems.val.length}** results`,
		)
}
