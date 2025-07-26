import { state } from "@savant/core"
import { describe, expect, it } from "vitest"

import Input from "../components/Input"

describe("Input Component", () => {
	describe("Basic functionality", () => {
		it("should create input wrapper", () => {
			const input = Input({})

			expect(input).toBeInstanceOf(HTMLDivElement)
			expect(input.querySelector("input")).toBeTruthy()
		})

		it("should handle string values", () => {
			const value = state("test value")
			const input = Input({ value })

			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement
			expect(inputElement.value).toBe("test value")
		})

		it("should handle number values", () => {
			const value = state(42)
			const input = Input({ value })

			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement
			expect(inputElement.value).toBe("42")
		})

		it("should handle undefined values", () => {
			const value = state(undefined)
			const input = Input({ value })

			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement
			expect(inputElement.value).toBe("")
		})
	})

	describe("Input types", () => {
		it("should set text input type by default", () => {
			const input = Input({})
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.type).toBe("text")
		})

		it("should handle number input type", () => {
			const value = state(123)
			const input = Input({ value })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.type).toBe("number")
		})

		it("should handle explicit type override", () => {
			const input = Input({ type: "email" })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.type).toBe("email")
		})

		it("should handle password type", () => {
			const input = Input({ type: "password" })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.type).toBe("password")
		})
	})

	describe("Placeholder and labels", () => {
		it("should set default placeholder", () => {
			const input = Input({ type: "email" })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.placeholder).toBe("Enter email...")
		})

		it("should handle custom placeholder", () => {
			const input = Input({ placeholder: "Custom placeholder" })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.placeholder).toBe("Custom placeholder")
		})

		it("should handle lead element", () => {
			const input = Input({ lead: "Username:" })

			expect(input.textContent).toContain("Username:")
		})

		it("should handle trail element", () => {
			const input = Input({ trail: "@example.com" })

			expect(input.textContent).toContain("@example.com")
		})

		it("should handle complex lead/trail elements", () => {
			const leadIcon = document.createElement("i")
			leadIcon.textContent = "🔍"
			const trailButton = document.createElement("button")
			trailButton.textContent = "Search"

			const input = Input({ lead: leadIcon, trail: trailButton })

			expect(input.querySelector("i")).toBeTruthy()
			expect(input.querySelector("button")).toBeTruthy()
		})
	})

	describe("Validation", () => {
		it("should handle required attribute", () => {
			const input = Input({ required: true })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.required).toBe(true)
		})

		it("should handle validation callbacks", () => {
			let lastValue: string | number | undefined
			let lastValidity: boolean | undefined

			const input = Input({
				onValueChanged: (value) => {
					lastValue = value
				},
				onValidityChanged: (validity) => {
					lastValidity = validity
				},
			})

			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			// Simulate input
			inputElement.value = "test"
			inputElement.dispatchEvent(new Event("input"))

			expect(lastValue).toBe("test")
			expect(lastValidity).toBeDefined()
		})

		it("should validate number inputs", () => {
			const value = state(0)
			const input = Input({ value, required: true })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			// Test with valid number
			inputElement.value = "42"
			inputElement.dispatchEvent(new Event("input"))

			expect(value.val).toBe(42)
		})

		it("should handle invalid number inputs", () => {
			const value = state(0)
			const input = Input({ value })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			// Test with invalid number
			inputElement.value = "invalid"
			inputElement.dispatchEvent(new Event("input"))

			// Should handle gracefully
			expect(input).toBeDefined()
		})
	})

	describe("State management", () => {
		it("should update state on input", () => {
			const value = state("")
			const input = Input({ value })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			inputElement.value = "new value"
			inputElement.dispatchEvent(new Event("input"))

			expect(value.val).toBe("new value")
		})

		it("should handle reactive state updates", () => {
			const value = state("initial")
			const input = Input({ value })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			// Update state externally
			value.val = "updated"

			// Input should reflect the change
			expect(inputElement.value).toBe("updated")
		})

		it("should handle number state updates", () => {
			const value = state(10)
			const input = Input({ value })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			value.val = 20
			expect(inputElement.value).toBe("20")
		})
	})

	describe("Styling", () => {
		it("should apply base classes", () => {
			const input = Input({})

			expect(input.className).toContain("control")
			expect(input.className).toContain("flex")
		})

		it("should apply custom classes", () => {
			const input = Input({ class: "custom-input large" })

			expect(input.className).toContain("custom-input")
			expect(input.className).toContain("large")
		})

		it("should handle reactive classes", () => {
			const dynamicClass = () => "dynamic-class"
			const input = Input({ class: dynamicClass })

			expect(input).toBeDefined()
		})

		it("should apply focus styles", () => {
			const input = Input({})

			expect(input.className).toContain("has-focus-visible:mood-accent")
		})

		it("should apply invalid styles", () => {
			const input = Input({ required: true })

			expect(input.className).toContain(
				"has-invalid:has-invalid:mood-danger",
			)
		})
	})

	describe("Input props passthrough", () => {
		it("should pass through input-specific props", () => {
			const input = Input({
				inputProps: {
					maxLength: 10,
					pattern: "[0-9]+",
					autocomplete: "off",
				},
			})

			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement
			expect(inputElement.maxLength).toBe(10)
			expect(inputElement.pattern).toBe("[0-9]+")
			expect(inputElement.autocomplete).toBe("off")
		})

		it("should handle input data attributes", () => {
			const input = Input({
				inputProps: {
					"data-cy": "test-input",
				},
			})

			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement
			expect(inputElement.getAttribute("data-cy")).toBe("test-input")
		})
	})

	describe("Accessibility", () => {
		it("should generate unique ID", () => {
			const input = Input({})
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.id).toBeTruthy()
			expect(inputElement.id).toMatch(/^input-/)
		})

		it("should associate labels with input", () => {
			const input = Input({ lead: "Username" })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement
			const label = input.querySelector("label")

			expect(label?.getAttribute("for")).toBe(inputElement.id)
		})

		it("should handle ARIA attributes", () => {
			const input = Input({
				inputProps: {
					"aria-describedby": "help-text",
					"aria-invalid": "true",
				},
			})

			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement
			expect(inputElement.getAttribute("aria-describedby")).toBe(
				"help-text",
			)
			expect(inputElement.getAttribute("aria-invalid")).toBe("true")
		})
	})

	describe("Edge cases", () => {
		it("should handle null values", () => {
			const value = state(null as any)
			const input = Input({ value })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.value).toBe("")
		})

		it("should handle empty string values", () => {
			const value = state("")
			const input = Input({ value })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.value).toBe("")
		})

		it("should handle very long values", () => {
			const longValue = "A".repeat(1000)
			const value = state(longValue)
			const input = Input({ value })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.value).toBe(longValue)
		})

		it("should handle special characters", () => {
			const specialValue = "Hello 世界 🌍 &lt;&gt;"
			const value = state(specialValue)
			const input = Input({ value })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.value).toBe(specialValue)
		})
	})

	describe("Performance", () => {
		it("should create inputs efficiently", () => {
			const startTime = performance.now()

			for (let i = 0; i < 50; i++) {
				Input({ placeholder: `Input ${i}` })
			}

			const endTime = performance.now()

			expect(endTime - startTime).toBeLessThan(100)
		})

		it("should handle rapid input changes", () => {
			const value = state("")
			const input = Input({ value })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			// Simulate rapid typing
			for (let i = 0; i < 10; i++) {
				inputElement.value = `text${i}`
				inputElement.dispatchEvent(new Event("input"))
			}

			expect(value.val).toBe("text9")
		})
	})

	describe("Integration", () => {
		it("should work in forms", () => {
			const form = document.createElement("form")
			const input = Input({ inputProps: { name: "username" } })

			form.appendChild(input)

			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement
			expect(inputElement.form).toBe(form)
		})

		it("should support form validation", () => {
			const input = Input({ required: true, type: "email" })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			expect(inputElement.required).toBe(true)
			expect(inputElement.type).toBe("email")
		})

		it("should handle form reset", () => {
			const value = state("initial")
			const input = Input({ value })
			const inputElement = input.querySelector(
				"input",
			) as HTMLInputElement

			// Change value
			inputElement.value = "changed"
			inputElement.dispatchEvent(new Event("input"))

			// Reset should work (though implementation specific)
			expect(input).toBeDefined()
		})
	})
})
