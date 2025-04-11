import { html } from ".."

export default function Notifications(): HTMLElement {
    return html.div(
        {
            name: "Notifications",
            class: "flex flex-col gap-4",
        },

        html.span({ class: "text-xl font-bold text-nowrap" }, "Notifications"),

        html.ul(
            { class: "flex flex-col gap-2" },
            ["Notification 1", "Notification 2", "Notification 3"].map(
                (notificationName) => [
                    html.li({ class: "" }, notificationName),

                    html.div({
                        class: "h-[1px] bg-surface-200 dark:bg-surface-700",
                    }),
                ],
            ),
        ),
    )
}
