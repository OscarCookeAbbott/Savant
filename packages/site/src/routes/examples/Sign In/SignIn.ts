import { html, state } from "@savant/core"
import { Button, Checkbox, Form, Icon, Input, Label } from "@savant/ui"

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

				class: "form-outline",
			}),
		),

		Label(
			{
				content: html.span(
					{ class: "flex flex-1 justify-between items-center" },

					"Password",

					Button(
						{
							class: "mood-accent text-mood-500",
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
						class: "p-0",
					},

					Icon(
						{
							class: () =>
								`transition ${
									passwordVisible.val
										? ""
										: "text-swatch-700-foreground"
								}`,
						},

						() =>
							passwordVisible.val
								? "visibility"
								: "visibility_off",
					),
				),

				onValidityChanged: (valid) => (passwordValid.val = valid),

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
}
