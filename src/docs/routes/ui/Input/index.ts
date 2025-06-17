import { Code, Label, Select, Input } from "../../../../components"
import { html, State, state } from "../../../.."

export default function Page() {
    const exampleType: State<"text" | "number"> = state("text")
    const exampleVariant = state("variant-outline")
    const exampleMood = state("mood-none")

    return html.div(
        { class: "contents" },

        html.span({ class: "text-3xl font-bold" }, "Input"),

        html.p(
            { class: "text-foreground-weak" },
            "Inputs allow entry of text or numbers.",
        ),

        Label(
            {
                content: "Demo",
                class: "mt-4",
            },

            html.div(
                {
                    name: "Demo",
                    class: "card vessel flex flex-col items-center gap-4",
                },

                html.div(
                    { class: "p-8 h-48 flex flex-col justify-center gap-8" },

                    () =>
                        Input({
                            value: state(
                                exampleType.val === "text"
                                    ? "Example text"
                                    : 42,
                            ),
                            class: () =>
                                `${exampleVariant.val} ${exampleMood.val}`,
                        }),
                ),

                html.div(
                    { class: "flex flex-wrap gap-4 justify-center" },

                    Label(
                        { content: "Type", class: "items-center" },

                        Select({
                            options: [{ value: "text" }, { value: "number" }],
                            value: exampleType,
                            class: "variant-outline w-48",
                        }),
                    ),

                    Label(
                        { content: "Variant", class: "items-center" },

                        Select({
                            options: [
                                { value: "variant-outline" },
                                { value: "variant-subtle" },
                                { value: "variant-ghost" },
                                { value: "variant-filled" },
                            ],
                            value: exampleVariant,
                            class: "variant-outline w-48",
                        }),
                    ),

                    Label(
                        { content: "Mood", class: "items-center" },

                        Select({
                            options: [
                                { value: "mood-none" },
                                { value: "mood-accent" },
                                { value: "mood-warning" },
                                { value: "mood-error" },
                            ],
                            value: exampleMood,
                            class: "variant-outline w-48",
                        }),
                    ),
                ),
            ),
        ),

        () =>
            Code(
                { language: "ts" },

                `\
import { Input } from "savant/components"

Input({
    value: state(${exampleType.val === "text" ? '"Example text"' : 42}),
    class: "${exampleVariant.val} ${exampleMood.val}"
})`,
            ),

        Label(
            {
                content: "Signature",
                class: "mt-4",
            },
            Code(
                { language: "ts" },

                `\
function Input<T extends string | number>(
    props: {
        value: State<T | undefined> = state(undefined),
        type: string = <typeof T>,
        placeholder: string = "Enter {type}...",
        required: boolean = false,

        onValueChanged?: (value: T) => void,
        onValidityChanged?: (validity: boolean) => void,

        lead?: ChildDom,
        trail?: ChildDom,

        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`,
            ),
        ),
    )
}
