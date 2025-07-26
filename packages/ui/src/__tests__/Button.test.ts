import { describe, expect, it } from "vitest"

import Button from "../components/Button"

describe("Button Component", () => {
	describe("Basic functionality", () => {
		it("should create button element", () => {
			const button = Button({}, "Click me")

			expect(button).toBeInstanceOf(HTMLButtonElement)
			expect(button.tagName).toBe("BUTTON")
		})

		it("should render button text", () => {
			const button = Button({}, "Submit")

			expect(button.textContent).toBe("Submit")
		})

		it("should handle multiple children", () => {
			const icon = document.createElement("i")
			icon.textContent = "→"
			const button = Button({}, icon, " Next")

			expect(button.textContent).toContain("→")
			expect(button.textContent).toContain("Next")
		})

		it("should handle empty content", () => {
			const button = Button({})

			expect(button).toBeInstanceOf(HTMLButtonElement)
		})
	})

	describe("Button attributes", () => {
		it("should set button type", () => {
			const submitBtn = Button({ type: "submit" }, "Submit")
			const resetBtn = Button({ type: "reset" }, "Reset")
			const buttonBtn = Button({ type: "button" }, "Button")

			expect(submitBtn.type).toBe("submit")
			expect(resetBtn.type).toBe("reset")
			expect(buttonBtn.type).toBe("button")
		})

		it("should handle disabled state", () => {
			const button = Button({ disabled: true }, "Disabled")

			expect(button.disabled).toBe(true)
		})

		it("should handle form attributes", () => {
			const button = Button(
				{
					form: "my-form",
					formaction: "/submit",
					formmethod: "post",
				},
				"Form Button",
			)

			expect(button.getAttribute("form")).toBe("my-form")
			expect(button.formAction).toContain("/submit")
			expect(button.formMethod).toBe("post")
		})

		it("should handle name and value", () => {
			const button = Button(
				{
					name: "action",
					value: "save",
				},
				"Save",
			)

			expect(button.name).toBe("action")
			expect(button.value).toBe("save")
		})
	})

	describe("Event handling", () => {
		it("should handle click events", () => {
			let clicked = false
			const button = Button(
				{
					onclick: () => {
						clicked = true
					},
				},
				"Click",
			)

			button.click()
			expect(clicked).toBe(true)
		})

		it("should not fire events when disabled", () => {
			let clicked = false
			const button = Button(
				{
					disabled: true,
					onclick: () => {
						clicked = true
					},
				},
				"Disabled",
			)

			button.click()
			expect(clicked).toBe(false) // Should not trigger when disabled
		})

		it("should handle keyboard events", () => {
			let keyPressed = false
			const button = Button(
				{
					onkeydown: () => {
						keyPressed = true
					},
				},
				"Keyboard",
			)

			const keyEvent = new KeyboardEvent("keydown", { key: "Enter" })
			button.dispatchEvent(keyEvent)

			expect(keyPressed).toBe(true)
		})

		it("should handle focus events", () => {
			let focused = false
			const button = Button(
				{
					onfocus: () => {
						focused = true
					},
				},
				"Focus",
			)

			button.focus()
			expect(focused).toBe(true)
		})
	})

	describe("Styling", () => {
		it("should apply base button classes", () => {
			const button = Button({}, "Test")

			expect(button.className).toContain("button")
		})

		it("should apply custom classes", () => {
			const button = Button({ class: "btn btn-primary" }, "Custom")

			expect(button.className).toContain("btn")
			expect(button.className).toContain("btn-primary")
		})

		it("should handle reactive classes", () => {
			const dynamicClass = () => "dynamic-btn"
			const button = Button({ class: dynamicClass }, "Dynamic")

			expect(button).toBeDefined()
		})

		it("should handle style attributes", () => {
			const button = Button(
				{
					style: "background-color: red; color: white;",
				},
				"Styled",
			)

			expect(button.style.backgroundColor).toBe("red")
			expect(button.style.color).toBe("white")
		})
	})

	describe("Accessibility", () => {
		it("should handle ARIA attributes", () => {
			const button = Button(
				{
					"aria-label": "Close dialog",
					"aria-expanded": "false",
					role: "button",
				},
				"×",
			)

			expect(button.getAttribute("aria-label")).toBe("Close dialog")
			expect(button.getAttribute("aria-expanded")).toBe("false")
			expect(button.getAttribute("role")).toBe("button")
		})

		it("should be keyboard accessible by default", () => {
			const button = Button({}, "Accessible")

			expect(button.tabIndex).toBeGreaterThanOrEqual(0)
		})

		it("should handle tabindex", () => {
			const button = Button({ tabIndex: -1 }, "No Tab")

			expect(button.tabIndex).toBe(-1)
		})

		it("should support screen reader text", () => {
			const button = Button(
				{
					"aria-describedby": "help-text",
				},
				"Help",
			)

			expect(button.getAttribute("aria-describedby")).toBe("help-text")
		})
	})

	describe("Button variants", () => {
		it("should handle different button types", () => {
			const primary = Button({ class: "btn-primary" }, "Primary")
			const secondary = Button({ class: "btn-secondary" }, "Secondary")
			const danger = Button({ class: "btn-danger" }, "Danger")

			expect(primary.className).toContain("btn-primary")
			expect(secondary.className).toContain("btn-secondary")
			expect(danger.className).toContain("btn-danger")
		})

		it("should handle size variants", () => {
			const small = Button({ class: "btn-sm" }, "Small")
			const large = Button({ class: "btn-lg" }, "Large")

			expect(small.className).toContain("btn-sm")
			expect(large.className).toContain("btn-lg")
		})

		it("should handle state variants", () => {
			const loading = Button({ class: "btn-loading" }, "Loading...")
			const success = Button({ class: "btn-success" }, "Success")

			expect(loading.className).toContain("btn-loading")
			expect(success.className).toContain("btn-success")
		})
	})

	describe("Form integration", () => {
		it("should work in forms", () => {
			const form = document.createElement("form")
			const button = Button({ type: "submit" }, "Submit Form")

			form.appendChild(button)

			expect(button.form).toBe(form)
		})

		it("should handle form validation", () => {
			const button = Button(
				{
					type: "submit",
					formnovalidate: true,
				},
				"Submit Without Validation",
			)

			expect(button.formNoValidate).toBe(true)
		})

		it("should handle form data", () => {
			const button = Button(
				{
					name: "action",
					value: "delete",
					type: "submit",
				},
				"Delete",
			)

			expect(button.name).toBe("action")
			expect(button.value).toBe("delete")
		})
	})

	describe("Edge cases", () => {
		it("should handle null children", () => {
			const button = Button({}, "Text", null, "More")

			expect(button.textContent).toContain("Text")
			expect(button.textContent).toContain("More")
		})

		it("should handle undefined children", () => {
			const button = Button({}, "Text", undefined, "More")

			expect(button.textContent).toContain("Text")
			expect(button.textContent).toContain("More")
		})

		it("should handle complex nested content", () => {
			const icon = document.createElement("svg")
			const text = document.createElement("span")
			text.textContent = "Complex Button"

			const button = Button({}, icon, text)

			expect(button.querySelector("svg")).toBeTruthy()
			expect(button.querySelector("span")).toBeTruthy()
		})

		it("should handle very long text", () => {
			const longText = "A".repeat(1000)
			const button = Button({}, longText)

			expect(button.textContent).toBe(longText)
		})

		it("should handle special characters", () => {
			const button = Button({}, "Click → Submit ✓")

			expect(button.textContent).toBe("Click → Submit ✓")
		})
	})

	describe("Performance", () => {
		it("should create buttons efficiently", () => {
			const startTime = performance.now()

			for (let i = 0; i < 100; i++) {
				Button({}, `Button ${i}`)
			}

			const endTime = performance.now()

			expect(endTime - startTime).toBeLessThan(100)
		})

		it("should handle rapid clicking", () => {
			let clickCount = 0
			const button = Button(
				{
					onclick: () => {
						clickCount++
					},
				},
				"Rapid Click",
			)

			// Simulate rapid clicking
			for (let i = 0; i < 10; i++) {
				button.click()
			}

			expect(clickCount).toBe(10)
		})
	})

	describe("Integration", () => {
		it("should work with event delegation", () => {
			const container = createTestElement()
			const button = Button({ "data-action": "test" }, "Test")

			container.appendChild(button)

			let delegatedClick = false
			container.addEventListener("click", (e) => {
				if ((e.target as HTMLElement).dataset.action === "test") {
					delegatedClick = true
				}
			})

			button.click()
			expect(delegatedClick).toBe(true)
		})

		it("should maintain references after DOM manipulation", () => {
			const container1 = createTestElement()
			const container2 = createTestElement()
			const button = Button({ id: "movable-btn" }, "Movable")

			container1.appendChild(button)
			container2.appendChild(button) // Move to different container

			expect(container2.querySelector("#movable-btn")).toBe(button)
			expect(container1.querySelector("#movable-btn")).toBeNull()
		})
	})
})
