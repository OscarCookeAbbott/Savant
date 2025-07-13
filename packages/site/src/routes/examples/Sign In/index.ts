import { html } from "@savant/core"
import { Code } from "@savant/ui"

import DocPage from "../../../components/DocPage"
import SignIn from "./SignIn"

export default function Page() {
	return DocPage(
		html.h1("Sign In"),

		html.blockquote("Example Sign In component."),

		html.h2("Demo"),

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

		html.h2("Code"),

		Code(
			{ language: "typescript" },

			`\
function SignIn() {
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

                class: "form-outline",
            }),
        ),

        Label(
            {
                content: "Password",
                trail: html.span(
                    { class: "flex flex-1 justify-end items-center" },

                    Button(
                        {
                            class: "mood-accent text-mood-500",
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
                                        ? "text-swatch-700-foreground"
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

                class: "form-outline",
            }),
        ),

        Checkbox(
            {
                value: savePassword,
                class: "form-outline",
            },

            html.span(
                { class: "text-mini text-swatch-700-mood" },
                "Remember Password",
            ),
        ),

        html.div(
            { class: "flex gap-4 justify-end" },

            Button(
                {
                    class: "hover:form-soft",
                },
                "Cancel",
            ),

            Button(
                {
                    class: "form-filled mood-accent",
                },
                "Sign In",
            ),
        ),
    )
}`,
		),
	)
}
