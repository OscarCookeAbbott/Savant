import {
    add,
    ChildDom,
    derive,
    ElementProps,
    html,
    state,
    State,
    forceReactive,
} from "@savant/core"
import { delay, match, detectExternalClick, isOrArrayHas } from "../utils"

//////// Types ////////

type PopupProps = ElementProps & {
    visible?: State<boolean>
    direction?: PopupDirection
    trigger?: PopupTrigger | PopupTrigger[]
}

export const PopupDirection = {
    NONE: "none",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left",
} as const
export type PopupDirection =
    (typeof PopupDirection)[keyof typeof PopupDirection]

export const PopupTrigger = {
    HOVER_IN: "hover-in",
    HOVER_OUT: "hover-out",
    HOVER: "hover",
    CLICK: "click",
    FOCUS: "focus",
    FOCUS_IN: "focus-in",
    FOCUS_OUT: "focus-out",
} as const
export type PopupTrigger = (typeof PopupTrigger)[keyof typeof PopupTrigger]

//////// State ////////

/** Root container for all popups which will render them above all other content. */
const container = html.div({
    name: "Popups",
    class: "fixed inset-0 z-[100] pointer-events-none",
})
add(document.documentElement, container)

//////// API ////////

export default function Popup(
    {
        visible = state(false),
        direction = PopupDirection.BOTTOM,
        trigger = PopupTrigger.CLICK,

        name,

        class: propClass,
        ...restProps
    }: PopupProps,
    ...children: ChildDom[]
): HTMLElement {
    const reactiveClass = forceReactive(propClass)

    let dom:
        | {
              anchor: HTMLElement
              popup: HTMLElement
              abortController: AbortController
          }
        | undefined = undefined

    const targetCoords = state({
        height: 0,
        width: 0,
        left: 0,
        top: 0,
        yOffset: 0,
        xOffset: 0,
    })

    const updateCoords = async () => {
        if (!dom) return

        if (!target.isConnected) return clearPopup()

        if (!target.parentElement)
            throw new Error("Popup target has been removed from DOM")

        const targetRect = target.parentElement.getBoundingClientRect()

        targetCoords.val = {
            top: targetRect.top,
            left: targetRect.left,

            width: targetRect.width,
            height: targetRect.height,

            xOffset: 0,
            yOffset: 0,
        }

        // Wait for DOM to apply base position
        await delay()

        const containerRect = container.getBoundingClientRect()
        const popupRect = dom.popup.getBoundingClientRect()

        const startOffset = {
            x: Math.max(-popupRect.left, 0),
            y: Math.max(-popupRect.top, 0),
        }

        const endOffset = {
            x: Math.min(
                containerRect.width - popupRect.left - popupRect.width,
                0,
            ),
            y: Math.min(
                containerRect.height - popupRect.top - popupRect.height,
                0,
            ),
        }

        targetCoords.val = {
            ...targetCoords.val,

            xOffset: startOffset.x + endOffset.x,
            yOffset: startOffset.y + endOffset.y,
        }
    }

    const createPopup = () => {
        const directionStyle = match(direction, [
            [PopupDirection.NONE, ""],
            [PopupDirection.TOP, "bottom-full mb-1"],
            [PopupDirection.RIGHT, "left-full ml-1"],
            [PopupDirection.BOTTOM, "top-full mt-1"],
            [PopupDirection.LEFT, "right-full mr-1"],
        ])

        const popup = html.div(
            {
                name: `${name} Popup`,
                class: () =>
                    `absolute pointer-events-auto ${directionStyle} ${reactiveClass.val}`,
                ...restProps,
            },
            children,
        )

        const anchor = html.div(
            {
                name: `${name} Popup Anchor`,
                class: () => `absolute transition pointer-events-none`,
                style: () =>
                    `left: ${targetCoords.val.left + targetCoords.val.xOffset}px; top: ${targetCoords.val.top + targetCoords.val.yOffset}px; height: ${targetCoords.val.height}px; width: ${targetCoords.val.width}px;`,
            },
            popup,
        )

        // Hide popup after other click-triggered effects
        const abortController = detectExternalClick(popup, () =>
            delay().then(() => (visible.val = false)),
        )

        add(container, anchor)

        dom = { anchor, popup, abortController }
    }

    const clearPopup = () => {
        dom?.anchor.remove()
        dom?.popup.remove()
        dom?.abortController.abort()

        dom = undefined
    }

    const setupTriggers = () => {
        if (!target.parentElement)
            throw new Error("Popup target has been removed from DOM")

        if (isOrArrayHas(trigger, [PopupTrigger.HOVER, PopupTrigger.HOVER_IN]))
            target.parentElement.addEventListener(
                "mouseenter",
                () => (visible.val = true),
            )

        if (isOrArrayHas(trigger, [PopupTrigger.HOVER, PopupTrigger.HOVER_OUT]))
            target.parentElement.addEventListener(
                "mouseleave",
                () => (visible.val = false),
            )

        if (isOrArrayHas(trigger, PopupTrigger.CLICK))
            target.parentElement.addEventListener(
                "click",
                () => (visible.val = true),
            )

        if (isOrArrayHas(trigger, [PopupTrigger.FOCUS, PopupTrigger.FOCUS_IN]))
            target.parentElement.addEventListener(
                "focusin",
                () => (visible.val = true),
            )

        if (isOrArrayHas(trigger, [PopupTrigger.FOCUS, PopupTrigger.FOCUS_OUT]))
            target.parentElement.addEventListener(
                "focusout",
                () => (visible.val = false),
            )
    }

    // Create, update or clear popup when visibility changes
    derive(async () => {
        if (!visible.val) return clearPopup()

        if (!dom) createPopup()

        updateCoords()
    })

    // Create placeholder element to be the actual child
    const target = html.div({
        name: `${name} Popup Target`,
        hidden: true,
    })

    // Update coords based on DOM events
    window.addEventListener("resize", updateCoords)

    // Update when marker changes size
    const resizeObserver = new ResizeObserver(updateCoords)

    // Wait until current DOM is created to set initial position
    delay()
        .then(() => resizeObserver.observe(target.parentElement!))
        .then(() => setupTriggers())

    return target
}
