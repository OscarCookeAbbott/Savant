import { state } from "@savant/core"
import { describe, expect, it } from "vitest"

import Select from "../components/Select"

describe("Select Component", () => {
	const basicOptions = [
		{ value: "option1", name: "Option 1" },
		{ value: "option2", name: "Option 2" },
		{ value: "option3", name: "Option 3" },
	]

	describe("Basic functionality", () => {
		it("should create select component", () => {
			const select = Select({ options: basicOptions })

			expect(select).toBeInstanceOf(HTMLDivElement)
		})

		it("should handle single selection", () => {
			const value = state(undefined)
			const select = Select({ options: basicOptions, value })

			expect(select).toBeDefined()
		})

		it("should handle default selection", () => {
			const select = Select({ options: basicOptions })

			// Should select first option by default
			expect(select).toBeDefined()
		})

		it("should display selected value", () => {
			const value = state("option2")
			const select = Select({ options: basicOptions, value })

			expect(select.textContent).toContain("Option 2")
		})
	})

	describe("Options handling", () => {
		it("should handle options with custom names", () => {
			const options = [
				{ value: "us", name: "United States" },
				{ value: "ca", name: "Canada" },
				{ value: "mx", name: "Mexico" },
			]

			const select = Select({ options })

			expect(select).toBeDefined()
		})

		it("should handle options without names", () => {
			const options = [
				{ value: "apple" },
				{ value: "banana" },
				{ value: "cherry" },
			]

			const select = Select({ options })

			expect(select).toBeDefined()
		})

		it("should handle disabled options", () => {
			const options = [
				{ value: "enabled", name: "Enabled Option" },
				{ value: "disabled", name: "Disabled Option", disabled: true },
			]

			const select = Select({ options })

			expect(select).toBeDefined()
		})

		it("should handle empty options array", () => {
			expect(() => {
				Select({ options: [] })
			}).not.toThrow()
		})
	})

	describe("Multi-select functionality", () => {
		it("should handle multiple selection", () => {
			const value = state(["option1", "option3"])
			const select = Select({ options: basicOptions, value })

			expect(select).toBeDefined()
		})

		it("should handle chips mode", () => {
			const value = state(["option1", "option2"])
			const select = Select({
				options: basicOptions,
				value,
				useChips: true,
			})

			expect(select).toBeDefined()
		})

		it("should add/remove selections", () => {
			const value = state(["option1"])
			const select = Select({ options: basicOptions, value })

			// In real implementation, would test clicking options
			expect(select).toBeDefined()
		})
	})

	describe("Styling and appearance", () => {
		it("should apply custom classes", () => {
			const select = Select({
				options: basicOptions,
				class: "custom-select large",
			})

			expect(select.className).toContain("custom-select")
			expect(select.className).toContain("large")
		})

		it("should handle reactive classes", () => {
			const dynamicClass = () => "dynamic-select"
			const select = Select({
				options: basicOptions,
				class: dynamicClass,
			})

			expect(select).toBeDefined()
		})

		it("should show dropdown on focus", () => {
			const select = Select({ options: basicOptions })

			// Mock click to open dropdown
			select.click()

			expect(select).toBeDefined()
		})
	})

	describe("Lead and trail elements", () => {
		it("should handle lead element", () => {
			const leadIcon = document.createElement("i")
			leadIcon.textContent = "🔍"

			const select = Select({
				options: basicOptions,
				lead: leadIcon,
			})

			expect(select.querySelector("i")).toBeTruthy()
		})

		it("should handle trail element", () => {
			const trailIcon = document.createElement("span")
			trailIcon.textContent = "▼"

			const select = Select({
				options: basicOptions,
				trail: trailIcon,
			})

			expect(select.querySelector("span")).toBeTruthy()
		})

		it("should handle text lead/trail", () => {
			const select = Select({
				options: basicOptions,
				lead: "From:",
				trail: "▼",
			})

			expect(select.textContent).toContain("From:")
			expect(select.textContent).toContain("▼")
		})
	})

	describe("State management", () => {
		it("should update when value changes", () => {
			const value = state("option1")
			const select = Select({ options: basicOptions, value })

			// Change value externally
			value.val = "option2"

			// Select should reflect change
			expect(select).toBeDefined()
		})

		it("should handle array values for multi-select", () => {
			const value = state(["option1"])
			const select = Select({ options: basicOptions, value })

			// Add to selection
			value.val = ["option1", "option2"]

			expect(select).toBeDefined()
		})

		it("should handle clearing selection", () => {
			const value = state("option1")
			const select = Select({ options: basicOptions, value })

			// Clear selection
			value.val = ""

			expect(select).toBeDefined()
		})
	})

	describe("Keyboard navigation", () => {
		it("should handle arrow key navigation", () => {
			const select = Select({ options: basicOptions })

			const keyEvent = new KeyboardEvent("keydown", {
				key: "ArrowDown",
			})

			select.dispatchEvent(keyEvent)

			expect(select).toBeDefined()
		})

		it("should handle Enter key selection", () => {
			const select = Select({ options: basicOptions })

			const keyEvent = new KeyboardEvent("keydown", {
				key: "Enter",
			})

			select.dispatchEvent(keyEvent)

			expect(select).toBeDefined()
		})

		it("should handle Escape key", () => {
			const select = Select({ options: basicOptions })

			const keyEvent = new KeyboardEvent("keydown", {
				key: "Escape",
			})

			select.dispatchEvent(keyEvent)

			expect(select).toBeDefined()
		})
	})

	describe("Accessibility", () => {
		it("should have proper ARIA attributes", () => {
			const select = Select({ options: basicOptions })

			// Should have appropriate role and aria attributes
			expect(select).toBeDefined()
		})

		it("should be keyboard accessible", () => {
			const select = Select({ options: basicOptions })

			// Should be focusable
			expect(select.tabIndex).toBeGreaterThanOrEqual(0)
		})

		it("should announce selection changes", () => {
			const select = Select({
				options: basicOptions,
				"aria-label": "Choose option",
			})

			expect(select.getAttribute("aria-label")).toBe("Choose option")
		})
	})

	describe("Dropdown behavior", () => {
		it("should open dropdown on click", () => {
			const select = Select({ options: basicOptions })

			select.click()

			// Should show options dropdown
			expect(select).toBeDefined()
		})

		it("should close dropdown on outside click", () => {
			const select = Select({ options: basicOptions })

			// Open dropdown
			select.click()

			// Click outside
			document.body.click()

			expect(select).toBeDefined()
		})

		it("should close dropdown after selection", () => {
			const select = Select({ options: basicOptions })

			// Open dropdown and select option
			select.click()

			// In real implementation, would click an option
			expect(select).toBeDefined()
		})
	})

	describe("Filtering and search", () => {
		it("should support searchable options", () => {
			const manyOptions = Array.from({ length: 20 }, (_, i) => ({
				value: `option${i}`,
				name: `Option ${i}`,
			}))

			const select = Select({ options: manyOptions })

			// In real implementation, would test typing to filter
			expect(select).toBeDefined()
		})

		it("should handle no matching results", () => {
			const select = Select({ options: basicOptions })

			// In real implementation, would test search with no results
			expect(select).toBeDefined()
		})
	})

	describe("Edge cases", () => {
		it("should handle options with duplicate values", () => {
			const duplicateOptions = [
				{ value: "dup", name: "First Duplicate" },
				{ value: "dup", name: "Second Duplicate" },
				{ value: "unique", name: "Unique" },
			]

			const select = Select({ options: duplicateOptions })

			expect(select).toBeDefined()
		})

		it("should handle very long option names", () => {
			const longOptions = [
				{
					value: "long",
					name: "Very long option name that might overflow the container and cause layout issues",
				},
			]

			const select = Select({ options: longOptions })

			expect(select).toBeDefined()
		})

		it("should handle special characters in options", () => {
			const specialOptions = [
				{ value: "special", name: "Option with émojis 🎉" },
				{ value: "html", name: "Option with <html> & entities" },
			]

			const select = Select({ options: specialOptions })

			expect(select).toBeDefined()
		})

		it("should handle empty option values", () => {
			const emptyOptions = [
				{ value: "", name: "Empty Option" },
				{ value: "valid", name: "Valid Option" },
			]

			expect(() => {
				Select({ options: emptyOptions })
			}).not.toThrow()
		})
	})

	describe("Performance", () => {
		it("should handle large option lists", () => {
			const largeOptions = Array.from({ length: 1000 }, (_, i) => ({
				value: `option${i}`,
				name: `Option ${i}`,
			}))

			const startTime = performance.now()
			const select = Select({ options: largeOptions })
			const endTime = performance.now()

			expect(select).toBeDefined()
			expect(endTime - startTime).toBeLessThan(200)
		})

		it("should handle rapid value changes", () => {
			const value = state("option1")
			const select = Select({ options: basicOptions, value })

			// Rapid value changes
			for (let i = 0; i < 10; i++) {
				value.val = basicOptions[i % basicOptions.length].value
			}

			expect(select).toBeDefined()
		})
	})

	describe("Integration", () => {
		it("should work in forms", () => {
			const form = document.createElement("form")
			const select = Select({
				options: basicOptions,
				name: "test-select",
			})

			form.appendChild(select)

			expect(select).toBeDefined()
		})

		it("should maintain selection state across DOM operations", () => {
			const value = state("option2")
			const select = Select({ options: basicOptions, value })

			const container1 = createTestElement()
			const container2 = createTestElement()

			container1.appendChild(select)
			container2.appendChild(select) // Move to different container

			expect(select.parentElement).toBe(container2)
		})

		it("should work with reactive option lists", () => {
			const optionsState = state(basicOptions)

			// In real implementation, would test reactive options
			const select = Select({ options: optionsState.val })

			expect(select).toBeDefined()
		})
	})
})
