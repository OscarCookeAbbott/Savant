import { Code, Label } from "../../../../components"
import { html } from "../../../.."
import SignIn from "./SignIn"

export default function Page() {
    return html.div(
        { class: "contents" },

        html.span({ class: "text-3xl font-bold" }, "Sign In"),

        html.p({ class: "text-foreground-weak" }, "Example Sign In component."),

        Label(
            { content: "Demo" },

            html.div(
                {
                    class: "card vessel bg-zebra zebra-opacity-20 flex flex-col items-center gap-4",
                },

                html.div(
                    {
                        class: "p-8 card vessel bg-background flex items-center",
                    },
                    SignIn(),
                ),
            ),
        ),

        Label(
            { content: "Code" },

            Code(
                { language: "typescript" },

                `function SignIn(): HTMLElement {
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
                content: "Password",
                trail: html.span(
                    { class: "flex flex-1 justify-end items-center" },

                    Button(
                        {
                            class: "mood-accent text-mood",
                        },

                        "Forgot?",
                    ),
                ),
            },

            Input({
                type: () =>
                    passwordVisible.val ? "text" : "password",
                value: password,
                placeholder: "Enter password...",
                required: true,

                lead: Icon("key"),
                trail: Button(
                    {
                        onclick: () =>
                            (passwordVisible.val =
                                !passwordVisible.val),
                    },

                    Icon(
                        {
                            class: () =>
                                \`transition \${
                                    !passwordVisible.val
                                        ? "text-foreground-weak"
                                        : ""
                                }\`,
                        },

                        () =>
                            passwordVisible.val
                                ? "visibility"
                                : "visibility_off",
                    ),
                ),

                onValidityChanged: (valid) =>
                    (passwordValid.val = valid),

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
}`,
            ),
        ),
    )
}
