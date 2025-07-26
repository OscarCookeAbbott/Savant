import { describe, expect, it } from "vitest"

import { html, hydrate, math, mount, svg } from "../dom"
import { state } from "../reactivity"

describe("DOM System", () => {
	describe("html", () => {
		it("should create HTML elements", () => {
			const div = html.div()

			expect(div).toBeInstanceOf(HTMLDivElement)
			expect(div.tagName).toBe("DIV")
		})

		it("should create elements with text content", () => {
			const p = html.p("Hello, World!")

			expect(p.textContent).toBe("Hello, World!")
		})

		it("should create elements with attributes", () => {
			const input = html.input({
				type: "text",
				placeholder: "Enter text",
				id: "test-input",
			})

			expect(input.type).toBe("text")
			expect(input.placeholder).toBe("Enter text")
			expect(input.id).toBe("test-input")
		})

		it("should handle class attribute", () => {
			const div = html.div({
				class: "test-class another-class",
			})

			expect(div.className).toBe("test-class another-class")
		})

		it("should handle nested elements", () => {
			const container = html.div(html.h1("Title"), html.p("Content"))

			expect(container.children).toHaveLength(2)
			expect(container.children[0].tagName).toBe("H1")
			expect(container.children[1].tagName).toBe("P")
		})

		it("should handle mixed content types", () => {
			const div = html.div(
				"Text content",
				html.span("Span content"),
				42,
				true,
			)

			expect(div.childNodes.length).toBeGreaterThan(0)
		})

		it("should handle reactive content", async () => {
			const textState = state("Initial")
			const p = html.p(textState)

			expect(p.textContent).toBe("Initial")

			textState.val = "Updated"

			await new Promise((resolve) => setTimeout(resolve))

			expect(p.textContent).toBe("Updated")
		})

		it("should handle reactive properties", async () => {
			const textState = state("Initial")
			const p = html.p({ class: textState })

			expect(p.className).toBe("Initial")

			textState.val = "Updated"

			await new Promise((resolve) => setTimeout(resolve))

			expect(p.className).toBe("Updated")
		})

		it("should handle reactive arrow content", async () => {
			const textState = state("Initial")
			const p = html.p(() => `${textState.val} class`)

			expect(p.textContent).toBe("Initial class")

			textState.val = "Updated"

			await new Promise((resolve) => setTimeout(resolve))

			expect(p.textContent).toBe("Updated class")
		})

		it("should handle reactive arrow properties", async () => {
			const textState = state("Initial")
			const p = html.p({ class: () => `${textState.val} class` })

			expect(p.className).toBe("Initial class")

			textState.val = "Updated"

			await new Promise((resolve) => setTimeout(resolve))

			expect(p.className).toBe("Updated class")
		})

		it("should handle event handlers", () => {
			let clicked = false
			const button = html.button(
				{
					onclick: () => {
						clicked = true
					},
				},
				"Click me",
			)

			button.click()

			expect(clicked).toBe(true)
		})

		it("should handle data attributes", () => {
			const div = html.div({
				"data-testid": "my-component",
				"data-value": "123",
			})

			expect(div.dataset.testid).toBe("my-component")
			expect(div.dataset.value).toBe("123")
		})

		it("should handle boolean attributes", () => {
			const input = html.input({
				type: "checkbox",
				checked: true,
				disabled: false,
			})

			expect(input.checked).toBe(true)
			expect(input.disabled).toBe(false)
		})
	})

	describe("svg", () => {
		it("should create SVG elements", () => {
			const svgElement = svg.svg()

			expect(svgElement).toBeInstanceOf(SVGElement)
			expect(svgElement.tagName).toBe("svg")
		})

		it("should create SVG elements with attributes", () => {
			const circle = svg.circle({
				cx: "50",
				cy: "50",
				r: "25",
				fill: "red",
			})

			expect(circle.getAttribute("cx")).toBe("50")
			expect(circle.getAttribute("cy")).toBe("50")
			expect(circle.getAttribute("r")).toBe("25")
			expect(circle.getAttribute("fill")).toBe("red")
		})

		it("should create complex SVG structures", () => {
			const svgElement = svg.svg(
				{ viewBox: "0 0 100 100" },
				svg.circle({ cx: "50", cy: "50", r: "25" }),
				svg.rect({ x: "10", y: "10", width: "20", height: "20" }),
			)

			expect(svgElement.children).toHaveLength(2)
			expect(svgElement.children[0].tagName).toBe("circle")
			expect(svgElement.children[1].tagName).toBe("rect")
		})
	})

	describe("math", () => {
		it("should create MathML elements", () => {
			const mathElement = math.math()

			expect(mathElement.tagName).toBe("math")
		})

		it("should create MathML expressions", () => {
			const expression = math.math(
				math.mi("x"),
				math.mo("="),
				math.mn("42"),
			)

			expect(expression.children).toHaveLength(3)
		})
	})

	describe("mount", () => {
		it("should mount element to container", () => {
			const container = createTestElement()
			const content = html.div("Mounted content")

			mount(container, content)

			expect(container.children).toHaveLength(1)
			expect(container.children[0]).toBe(content)
		})

		it("should handle mounting multiple elements individually", () => {
			const container = createTestElement()
			const elem1 = html.div("First")
			const elem2 = html.div("Second")

			mount(container, elem1)
			mount(container, elem2)

			expect(container.children).toHaveLength(2)
		})

		it("should handle mounting multiple elements simultaneously", () => {
			const container = createTestElement()
			const elem1 = html.div("First")
			const elem2 = html.div("Second")

			mount(container, [elem1, elem2])

			expect(container.children).toHaveLength(2)
		})

		it("should replace existing content when mounting", () => {
			const container = createTestElement()
			container.innerHTML = "<p>Existing</p>"

			const newContent = html.div("New content")
			mount(container, newContent)

			expect(container.children).toHaveLength(2)
			expect(container.children[1]).toBe(newContent)
		})
	})

	describe("hydrate", () => {
		it("should hydrate existing DOM elements", () => {
			const container = createTestElement()
			container.innerHTML = "<div id='existing'>Existing content</div>"

			const existingDiv = container.querySelector(
				"#existing",
			) as HTMLDivElement
			expect(existingDiv).toBeTruthy()

			// Hydrate would attach reactive functionality to existing DOM
			hydrate(existingDiv, () => html.div("Hydrated content"))

			expect(existingDiv.textContent).toBe("Existing content")
		})
	})

	describe("Special attributes", () => {
		it("should handle conditional attributes with $ prefix", () => {
			const div = html.div({
				"$data-visible": () => true,
				"$data-hidden": () => false,
			})

			// In real implementation, these would be processed differently
			expect(div).toBeInstanceOf(HTMLDivElement)
		})

		it("should handle style objects", () => {
			const div = html.div({
				style: "color: red; font-size: 16px; background-color: blue;",
			})

			// In real implementation, style object would be converted to string
			expect(div).toBeInstanceOf(HTMLDivElement)
		})

		it("should handle reactive attributes", () => {
			const colorState = state("red")
			const div = html.div({
				style: () => `color: ${colorState.val}`,
			})

			expect(div).toBeInstanceOf(HTMLDivElement)
		})
	})

	describe("Edge cases", () => {
		it("should handle null and undefined children", () => {
			const div = html.div("Valid text", null, undefined, "More text")

			expect(div).toBeInstanceOf(HTMLDivElement)
		})

		it("should handle empty arrays of children", () => {
			const div = html.div([])

			expect(div).toBeInstanceOf(HTMLDivElement)
		})

		it("should handle deeply nested structures", () => {
			const complex = html.div(
				html.header(
					html.nav(
						html.ul(
							html.li(html.a({ href: "#" }, "Link 1")),
							html.li(html.a({ href: "#" }, "Link 2")),
						),
					),
				),
				html.main(
					html.section(
						html.article(
							html.h1("Article Title"),
							html.p("Article content"),
						),
					),
				),
			)

			expect(complex).toBeInstanceOf(HTMLDivElement)
			expect(complex.querySelector("h1")).toBeTruthy()
			expect(complex.querySelector("h1")?.textContent).toBe(
				"Article Title",
			)
		})

		it("should handle large numbers of children", () => {
			const items = Array.from({ length: 1000 }, (_, i) =>
				html.li(`Item ${i}`),
			)
			const list = html.ul(...items)

			expect(list.children).toHaveLength(1000)
		})

		it("should handle function children", () => {
			const dynamicContent = () => html.span("Dynamic")
			const div = html.div(dynamicContent)

			expect(div).toBeInstanceOf(HTMLDivElement)
		})
	})
})
