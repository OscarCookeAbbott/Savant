import {
    state,
    State,
    ChildDom,
    ElementProps,
    derive,
    html,
    optionalAttribute,
    svg,
} from ".."
import { forceReactive, arrayToggleItem, isOrArrayHas } from "../utils"
import Button from "./Button"
import Popup from "./Popup"

type SelectProps<T> = ElementProps & {
    /** What potential values to present to the user. */
    options: CustomSelectOption<T>[]

    /** Which value or set of values is currently selected.
     * Defaults to the first given option.
     */
    value?: State<T> | State<T[]>

    /** Whether to display selected values as small buttons that can be quickly deselected. */
    useChips?: boolean

    /** Optional to display to the left of the selected value(s). */
    lead?: ChildDom

    /** Optional child to display to the right of the selected value(s). */
    trail?: ChildDom
}

export type CustomSelectOption<T> = {
    value: T

    name?: string

    disabled?: boolean
}

/** A control which allows the user to select a value or values from a given set of options,
 * and persistently displays the currently selected values.
 * @note Similar to a `<select>` element.
 */
export default function Select<T>({
    options,
    value = state(options[0].value),
    useChips = false,
    lead,
    trail,
    class: propClass,
    ...restProps
}: SelectProps<T>): HTMLElement {
    const reactiveClass = forceReactive(propClass)
    const mood = derive(() =>
        reactiveClass.val
            ?.split(" ")
            .find((className) => className.includes("mood-")),
    )

    const isMulti = derive(() => Array.isArray(value.val))
    const isNull = derive(
        () =>
            value.val === undefined ||
            (Array.isArray(value.val) && value.val.length === 0),
    )

    const isOpen = state(false)

    const selectOption = (option: T) => {
        if (Array.isArray(value.val))
            return (value.val = arrayToggleItem(value.val, option))

        value.val = option
    }

    const container = Button(
        {
            name: "Select",
            class: () =>
                `flex rounded-lg button gap-2 justify-between focus-visible:mood-accent ${reactiveClass.val}`,
            tabIndex: 0,
            onclick: () => (isOpen.val = !isOpen.val),
            ...restProps,
        },

        lead,

        () =>
            html.div(
                {
                    name: "Value Display",
                    class: () =>
                        `text-nowrap text-ellipsis overflow-hidden ${isNull.val ? "text-foreground-weak" : ""} ${useChips ? "flex flex-wrap gap-1" : ""} ${isOpen.val ? "invisible" : ""}`,
                },

                (() => {
                    if (isNull.val) return String("None")

                    if (!Array.isArray(value.val)) return String(value.val)

                    if (!useChips)
                        return value.val.map((item) => String(item)).join(", ")

                    return value.val.map((item) =>
                        Button(
                            {
                                class: "group mood-accent text-xs variant-soft rounded relative",
                                onclick: (e: MouseEvent) => {
                                    e.stopPropagation()

                                    selectOption(item)
                                },
                            },

                            html.span(
                                { class: "group-hover:opacity-25" },

                                String(item),
                            ),

                            html.i(
                                {
                                    class: "not-group-hover:hidden absolute right-1",
                                },

                                "close",
                            ),
                        ),
                    )
                })(),
            ),

        trail,

        svg.svg(
            {
                viewBox: "0 0 100 100",
                class: "size-4 flex-none",
                style: "stroke-linecap:round; stroke-linejoin:round;",
            },

            svg.path({
                d: "M25,35L50,15L75,35",
                class: "stroke-current stroke-[10] fill-none",
                hidden: optionalAttribute(() => !isMulti.val || undefined),
            }),

            svg.path({
                d: "M25,65L50,85L75,65",
                class: "stroke-current stroke-[10] fill-none",
                hidden: optionalAttribute(() => !isMulti.val || undefined),
            }),

            svg.path({
                d: "M25,40L50,60L75,40",
                class: "stroke-current stroke-[10] fill-none",
                hidden: optionalAttribute(() => isMulti.val || undefined),
            }),
        ),

        Popup(
            {
                name: "Select Content",
                visible: isOpen,
                direction: "none",
                class: () =>
                    `left-1/2 -translate-x-1/2 min-w-full max-h-40 overflow-y-auto card vessel shadow-lg p-1 rounded-lg card glass select-none ${mood.val}`,
            },

            () =>
                html.ul(
                    {
                        name: "Select Options",
                        class: "flex flex-col",
                    },

                    options.map((option) => {
                        const isSelected = derive(() =>
                            isOrArrayHas(value.val, option.value),
                        )

                        return SelectOptionItem(
                            option,
                            isMulti,
                            isSelected,
                            selectOption,
                        )
                    }),
                ),
        ),
    )

    return container
}

function SelectOptionItem<T>(
    option: CustomSelectOption<T>,
    isMulti: State<boolean>,
    isSelected: State<boolean>,
    onClick: (value: T) => void,
) {
    return html.div(
        {
            "data-selected": optionalAttribute(
                () => isSelected.val || undefined,
            ),
            class: "contents group",
        },

        html.span({
            name: "Magic divider",
            class: "h-[1px] mx-1 pointer-events-none bg-surface-500/15 group-first:hidden group-hover:invisible group-data-selected:invisible [*:hover_+_*_>_&]:invisible [*[data-selected]_+_*_>_&]:invisible ",
        }),

        html.button(
            {
                class: "flex gap-2 not-disabled:hover:bg-surface-500/20 not-disabled:focus-visible:bg-surface-500/20 not-disabled:focus-visible:focus-ring disabled:bg-transparent px-1 rounded cursor-pointer justify-between disabled:opacity-50 disabled:cursor-not-allowed items-center group-data-selected:mood-accent group-data-selected:!bg-mood-500/25",
                disabled: optionalAttribute(() => option.disabled || undefined),
                tabIndex: 0,
                onclick: () => onClick?.(option.value),
            },

            html.span(
                { class: "text-nowrap" },
                option.name ?? String(option.value),
            ),

            svg.svg(
                {
                    viewBox: "0 0 100 100",
                    class: "size-4 not-group-data-selected:invisible",
                    style: "stroke-linecap:round; stroke-linejoin:round;",
                    hidden: optionalAttribute(() => !isMulti.val || undefined),
                },

                svg.path({
                    d: "M20,60L40,80L80,20",
                    class: "stroke-current stroke-[10] fill-none",
                }),
            ),

            html.div({
                class: "bg-current rounded-full size-2 m-0.75 aspect-square not-group-data-selected:invisible",
                hidden: optionalAttribute(() => isMulti.val || undefined),
            }),
        ),
    )
}
