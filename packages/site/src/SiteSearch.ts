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
			lead: html.i({ class: "text-xl" }, "search"),
			"$data-open": searchOpen,
			class: "group md:variant-outline hover:variant-soft cursor-pointer transition-all not-md:min-w-9 min-w-32 w-0 focus-within:w-xs focus-within:variant-soft-outline data-open:w-xs data-open:variant-soft-outline not-md:*:placeholder:opacity-0 *:placeholder:transition-opacity not-md:data-open:fixed not-md:data-open:top-21 left-4 right-4 not-md:data-open:w-auto z-20",
			onfocus: () => (searchOpen.val = true),
		},
		() =>
			Popup(
				{
					visible: searchOpen,
				},
				html.div({
					class: "pointer-events-none md:hidden not-group-data-open:hidden fixed left-0 top-0 w-screen h-screen bg-background-50 glass",
				}),
			),

		() =>
			Popup(
				{
					visible: searchOpen,
					class: "card shadow-xl vessel glass w-full max-w-full transition-opacity starting:opacity-0 overflow-hidden",
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
										class: "badge variant-outline w-fit self-center",
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
