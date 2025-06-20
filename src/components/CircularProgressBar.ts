import { ChildDom, ElementProps, html, PropValueOrDerived, svg } from ".."
import { forceReactive } from "../utils"

type CircularProgressBarProps = ElementProps & {
    progress?: PropValueOrDerived<number>
    indefinite?: PropValueOrDerived<boolean>
}

export default function CircularProgressBar(
    {
        progress = 50,
        indefinite = false,

        class: propClass,
        ...restProps
    }: CircularProgressBarProps,
    ...children: ChildDom[]
): HTMLElement {
    const reactiveClass = forceReactive(propClass)

    const reactiveProgress = forceReactive(progress)
    const reactiveIndefinite = forceReactive(indefinite)

    return html.div(
        {
            name: "Circular Progress Bar",
            style: "--progress-bar-stroke-width: 2px",
            class: () =>
                `group inline-block relative min-w-[1em] min-h-[1em] rounded-full [.variant-outline]:ring-[length:var(--progress-bar-stroke-width)] [.variant-ghost]:ring-[length:var(--progress-bar-stroke-width)] !p-0 ${reactiveClass.val}`,
            ...restProps,
        },

        svg.svg(
            {
                style: "padding: calc(var(--progress-bar-stroke-width) * 0.5)",
                class: "absolute inset-0 -rotate-90",
                viewBox: "0 0 36 36",
            },

            svg.circle({
                style: () =>
                    `cx: 50%; cy: 50%; r: 50%; stroke-dasharray: calc(1% * pi * ${reactiveProgress.val}) calc(1% * pi * (100 - ${reactiveProgress.val}));`,
                class: () =>
                    `origin-center fill-none stroke-current stroke-[length:var(--progress-bar-stroke-width)] not-group-[.variant-filled]:text-mood-500 ${reactiveIndefinite.val ? "animate-spin" : ""}`,
                "stroke-linecap": "round",
            }),
        ),

        html.span(
            {
                class: "relative text-xs text-center m-[calc(2_*_var(--progress-bar-stroke-width))] aspect-square flex items-center justify-center h-full",
            },
            children,
        ),
    )
}
