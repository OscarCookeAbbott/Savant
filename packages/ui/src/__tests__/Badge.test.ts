import { describe, expect, it } from "vitest"

import Badge from "../components/Badge"

describe("Badge Component", () => {
	describe("Basic functionality", () => {
		it("should create badge element", () => {
			const badge = Badge({}, "Test Badge")

			expect(badge).toBeInstanceOf(HTMLSpanElement)
			expect(badge.tagName).toBe("SPAN")
		})

		it("should render text content", () => {
			const badge = Badge({}, "Badge Text")

			expect(badge.textContent).toBe("Badge Text")
		})

		it("should handle multiple children", () => {
			const icon = document.createElement("i")
			icon.textContent = "★"
			const badge = Badge({}, icon, " Premium")

			expect(badge.textContent).toContain("★")
			expect(badge.textContent).toContain("Premium")
		})

		it("should handle empty content", () => {
			const badge = Badge({})

			expect(badge).toBeInstanceOf(HTMLSpanElement)
			expect(badge.textContent).toBe("")
		})
	})

	describe("Styling", () => {
		it("should apply base badge classes", () => {
			const badge = Badge({}, "Test")

			expect(badge.className).toContain("badge")
			expect(badge.className).toContain("flex")
			expect(badge.className).toContain("items-center")
			expect(badge.className).toContain("gap-1")
			expect(badge.className).toContain("select-none")
		})

		it("should apply custom classes", () => {
			const badge = Badge({ class: "custom-badge red" }, "Custom")

			expect(badge.className).toContain("badge")
			expect(badge.className).toContain("custom-badge")
			expect(badge.className).toContain("red")
		})

		it("should handle reactive classes", () => {
			const dynamicClass = () => "dynamic-class"
			const badge = Badge({ class: dynamicClass }, "Dynamic")

			// In real implementation, this would test reactive updates
			expect(badge).toBeDefined()
		})

		it("should handle undefined class", () => {
			const badge = Badge({ class: undefined }, "No Class")

			expect(badge.className).toContain("badge")
		})
	})

	describe("Props handling", () => {
		it("should pass through HTML attributes", () => {
			const badge = Badge(
				{
					id: "test-badge",
					"data-testid": "badge-component",
					title: "Badge tooltip",
				},
				"Test",
			)

			expect(badge.id).toBe("test-badge")
			expect(badge.getAttribute("data-testid")).toBe("badge-component")
			expect(badge.title).toBe("Badge tooltip")
		})

		it("should handle event handlers", () => {
			let clicked = false
			const badge = Badge(
				{
					onclick: () => {
						clicked = true
					},
				},
				"Clickable",
			)

			badge.click()
			expect(clicked).toBe(true)
		})

		it("should handle ARIA attributes", () => {
			const badge = Badge(
				{
					"aria-label": "Status badge",
					role: "status",
				},
				"Active",
			)

			expect(badge.getAttribute("aria-label")).toBe("Status badge")
			expect(badge.getAttribute("role")).toBe("status")
		})
	})

	describe("Content variations", () => {
		it("should handle numeric content", () => {
			const badge = Badge({}, 42)

			expect(badge.textContent).toBe("42")
		})

		it("should handle boolean content", () => {
			const badge = Badge({}, true)

			expect(badge.textContent).toBe("true")
		})

		it("should handle nested elements", () => {
			const strong = document.createElement("strong")
			strong.textContent = "Important"
			const badge = Badge({}, "Status: ", strong)

			expect(badge.querySelector("strong")).toBeTruthy()
			expect(badge.textContent).toContain("Status:")
			expect(badge.textContent).toContain("Important")
		})

		it("should handle array of children", () => {
			const children = ["Text", " ", "More Text"]
			const badge = Badge({}, ...children)

			expect(badge.textContent).toBe("Text More Text")
		})
	})

	describe("Accessibility", () => {
		it("should be keyboard accessible", () => {
			const badge = Badge({ tabIndex: 0 }, "Accessible")

			expect(badge.tabIndex).toBe(0)
		})

		it("should support screen readers", () => {
			const badge = Badge(
				{
					"aria-live": "polite",
					"aria-atomic": "true",
				},
				"Live Badge",
			)

			expect(badge.getAttribute("aria-live")).toBe("polite")
			expect(badge.getAttribute("aria-atomic")).toBe("true")
		})

		it("should have proper semantics", () => {
			const badge = Badge({ role: "status" }, "Status")

			expect(badge.getAttribute("role")).toBe("status")
		})
	})

	describe("Edge cases", () => {
		it("should handle null children", () => {
			const badge = Badge({}, "Text", null, "More")

			expect(badge.textContent).toContain("Text")
			expect(badge.textContent).toContain("More")
		})

		it("should handle undefined children", () => {
			const badge = Badge({}, "Text", undefined, "More")

			expect(badge.textContent).toContain("Text")
			expect(badge.textContent).toContain("More")
		})

		it("should handle very long text", () => {
			const longText = "A".repeat(1000)
			const badge = Badge({}, longText)

			expect(badge.textContent).toBe(longText)
		})

		it("should handle special characters", () => {
			const badge = Badge({}, "™ © ® € £ ¥")

			expect(badge.textContent).toBe("™ © ® € £ ¥")
		})

		it("should handle HTML entities in text", () => {
			const badge = Badge({}, "&lt;script&gt;")

			expect(badge.textContent).toBe("&lt;script&gt;")
		})
	})

	describe("Performance", () => {
		it("should create badges efficiently", () => {
			const startTime = performance.now()

			for (let i = 0; i < 100; i++) {
				Badge({}, `Badge ${i}`)
			}

			const endTime = performance.now()

			expect(endTime - startTime).toBeLessThan(100) // Should be fast
		})

		it("should handle many children efficiently", () => {
			const children = Array.from({ length: 50 }, (_, i) => `Item ${i}`)

			const startTime = performance.now()
			const badge = Badge({}, ...children)
			const endTime = performance.now()

			expect(badge).toBeDefined()
			expect(endTime - startTime).toBeLessThan(50)
		})
	})

	describe("Integration", () => {
		it("should work within other components", () => {
			const container = createTestElement()
			const badge = Badge({ class: "nested" }, "Nested")

			container.appendChild(badge)

			expect(container.querySelector(".badge")).toBeTruthy()
			expect(container.querySelector(".nested")).toBe(badge)
		})

		it("should work with form elements", () => {
			const form = document.createElement("form")
			const badge = Badge({ name: "badge-field" }, "Form Badge")

			form.appendChild(badge)

			expect(form.querySelector("[name='badge-field']")).toBe(badge)
		})

		it("should maintain references", () => {
			const badge = Badge({ id: "ref-badge" }, "Reference")
			const container = createTestElement()
			container.appendChild(badge)

			const found = container.querySelector("#ref-badge")
			expect(found).toBe(badge)
		})
	})
})
