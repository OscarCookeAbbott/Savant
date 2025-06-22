import {
    Button,
    Checkbox,
    Icon,
    Label,
    Input,
    Form,
} from "@savant/ui"
import { html, state } from "@savant/core"

export default function SignIn(): HTMLElement {
    const username = state("")
    const password = state("")
    const savePassword = state(false)

    const passwordVisible = state(false)

    const passwordValid = state(false)

    return Form(
        {
            name: "Sign In",
            class: "flex flex-col gap-4",
        },

        html.span({ class: "text-xl font-bold" }, "Sign In"),

        Label(
            {
                content: "Username",
            },

            Input({
                type: "username",
                value: username,
                placeholder: "Enter username...",
                required: true,

                lead: Icon("person"),

                class: "variant-outline",
            }),
        ),

        Label(
            {
                content: html.span(
                    { class: "flex flex-1 justify-between items-center" },

                    "Password",

                    Button(
                        {
                            type: "button",
                            class: "mood-accent text-mood",
                        },

                        "Forgot?",
                    ),
                ),
            },

            Input({
                type: () => (passwordVisible.val ? "text" : "password"),
                value: password,
                placeholder: "Enter password...",
                required: true,

                lead: Icon("key"),
                trail: Button(
                    {
                        onclick: () =>
                            (passwordVisible.val = !passwordVisible.val),
                    },

                    Icon(
                        {
                            class: () =>
                                `transition ${
                                    passwordVisible.val
                                        ? ""
                                        : "text-foreground-weak"
                                }`,
                        },

                        () =>
                            passwordVisible.val
                                ? "visibility"
                                : "visibility_off",
                    ),
                ),

                onValidityChanged: (valid) => (passwordValid.val = valid),

                class: "variant-outline",
            }),
        ),

        Checkbox(
            {
                value: savePassword,
                class: "variant-outline",
            },

            html.span(
                { class: "text-mini text-mood-weak" },
                "Remember Password",
            ),
        ),

        html.div(
            { class: "flex gap-4 justify-end" },

            Button(
                {
                    type: "button",
                    class: "variant-base hover:variant-soft",
                },
                "Cancel",
            ),

            Button(
                {
                    type: "button",
                    class: "variant-filled mood-accent",
                },
                "Sign In",
            ),
        ),
    )
}
