import {
	ChildDom,
	ElementProps,
	forceReactive,
	html,
	PropValueOrDerived,
	svg,
} from "@savant/core"

type ProgressRadialProps = ElementProps & {
	/** How complete the progress is, in percentage. */
	progress?: PropValueOrDerived<number>

	/** Whether the progress is definite. Spins if indefinite. */
	indefinite?: PropValueOrDerived<boolean>

	/** Thickness of the progress bar in pixels. */
	thickness?: PropValueOrDerived<number>
}

export default function ProgressRadial(
	{
		progress = 50,
		indefinite = false,
		thickness = 2,

		class: propClass,
		...restProps
	}: ProgressRadialProps,
	...children: ChildDom[]
): HTMLElement {
	const reactiveClass = forceReactive(propClass)

	const reactiveProgress = forceReactive(progress)
	const reactiveIndefinite = forceReactive(indefinite)
	const reactiveThickness = forceReactive(thickness)

	return html.div(
		{
			name: "Progress Radial",
			"$data-indefinite": reactiveIndefinite,
			style: () =>
				`--progress-bar-value: ${reactiveProgress.val}; --progress-bar-stroke-width: ${reactiveThickness.val}px`,
			class: () =>
				`group inline-block relative min-w-[1em] min-h-[1em] ring-inset rounded-full [.variant-outline]:ring-[length:var(--progress-bar-stroke-width)] [.variant-soft-outline]:ring-[length:var(--progress-bar-stroke-width)] ${reactiveClass.val}`,
			...restProps,
		},

		svg.svg(
			{
				style: "padding: calc(var(--progress-bar-stroke-width) * 0.5)",
				class: "absolute inset-0 w-full h-full -rotate-90",
			},

			svg.circle({
				style: "cx: 50%; cy: 50%; r: 50%; stroke-dasharray: calc(1% * pi * var(--progress-bar-value)) calc(2% * pi * (100 - var(--progress-bar-value)));",
				class: () =>
					"origin-center fill-none stroke-current stroke-[length:var(--progress-bar-stroke-width)] not-group-[.variant-filled]:text-mood-500 group-data-indefinite:animate-spin",
				"stroke-linecap": "round",
			}),
		),

		html.span(
			{
				class: "relative text-xs text-center m-(--progress-bar-stroke-width) aspect-square flex items-center justify-center h-full",
			},
			children,
		),
	)
}
