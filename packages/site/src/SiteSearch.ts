import { derive, html, state } from "@savant/core"
import { Link, Route } from "@savant/routing"
import { Input, Popup } from "@savant/ui"
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

	return Input(
		{
			type: "search",
			placeholder: "Search...",
			value: searchText,
			lead: html.i("search"),
			"$data-open": searchOpen,
			class: "variant-outline transition-all min-w-32 w-32 rounded-full focus-within:w-xs focus-within:variant-soft-outline data-open:w-xs data-open:variant-soft-outline",
			onfocus: () => (searchOpen.val = true),
		},

		() =>
			Popup(
				{
					visible: searchOpen,
					class: "card shadow-xl vessel glass rounded-2xl w-xs max-w-full transition-opacity starting:opacity-0 overflow-hidden",
				},

				() =>
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

						displayedLinks.val.length
							? displayedLinks.val.map((link) =>
									PageLink(
										link,
										() => (searchOpen.val = false),
									),
								)
							: html.span(
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
								),

						filteredLinks.val.length > MAX_DISPLAYED_SEARCH_LINKS
							? html.span(
									{
										class: "badge variant-outline rounded-full w-fit self-center",
									},

									html.span(
										{
											class: "text-swatch-600-surface",
										},
										"and ",
									),

									html.span(
										{
											class: "font-semibold",
										},
										filteredLinks.val.length -
											MAX_DISPLAYED_SEARCH_LINKS,
									),

									html.span(
										{
											class: "text-swatch-600-surface",
										},
										" more",
									),
								)
							: undefined,
					),
			),
	)
}

function PageLink(link: Route & { name: string }, onclick: () => void) {
	const displayPath = link.path
		.split("/")
		.slice(2, -1)
		.map((part) => part[0].toUpperCase() + part.slice(1))
		.join(" → ")

	return Link(
		{
			href: link.path,
			onclick,
			class: "button gap-2 justify-start variant-soft hover:raised active:lowered active:mood-accent transition",
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
