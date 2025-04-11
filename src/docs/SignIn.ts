import {
    Button,
    Checkbox,
    Icon,
    Label,
    Popup,
    Input,
    Form,
} from "../components"
import { html, state } from ".."

export default function SignIn(): HTMLElement {
    const username = state("")
    const password = state("")
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
                content: "Password",
                trail: html.span(
                    { class: "flex flex-1 justify-end items-center" },

                    Button(
                        {
                            class: "button mood-accent text-mood",
                        },

                        "Forgot?",
                    ),
                ),
            },

            Input(
                {
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
                                            : "text-foreground-weak text-weak"
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
                },

                Popup(
                    {
                        trigger: ["focus", "hover"],
                        direction: "top",
                        class: () =>
                            `variant-ghost vessel glass mood-error badge left-1/2 -translate-x-1/2 ${passwordValid.val ? "hidden" : ""}`,
                    },
                    "Password is invalid",
                ),
            ),
        ),

        Checkbox(
            {
                value: state(false),
                class: "variant-outline",
            },

            html.span(
                { class: "text-mini text-mood-weak" },
                "Remember Credentials",
            ),
        ),

        html.div(
            { class: "flex gap-4 justify-end" },

            Button(
                {
                    class: "variant-basic hover:variant-subtle",
                },
                "Cancel",
            ),

            Button(
                {
                    class: "variant-filled mood-accent",
                },
                "Sign In",
            ),
        ),
    )
}
