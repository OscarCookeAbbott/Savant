import { ChildDom, ElementProps, forceReactive, html } from "@savant/core"

type FormProps = ElementProps<HTMLFormElement>

export default function Form(
	{ class: propClass, ...restProps }: FormProps,
	...children: ChildDom[]
): HTMLFormElement {
	const reactiveClass = forceReactive(propClass)

	return html.form(
		{
			class: () => `flex flex-col gap-4 ${reactiveClass.val}`,
			...restProps,
		},
		children,
	)
}
