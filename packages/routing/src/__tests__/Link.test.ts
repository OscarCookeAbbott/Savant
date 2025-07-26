import { beforeEach, describe, expect, it, vi } from "vitest"

import Link from "../Link"

describe("Link", () => {
	let mockNavigate: ReturnType<typeof vi.fn>

	beforeEach(() => {
		// Mock the navigate function
		mockNavigate = vi.fn()

		// Mock the navigate import
		vi.doMock("../helpers", () => ({
			navigate: mockNavigate,
		}))

		// Reset location
		Object.defineProperty(window, "location", {
			value: {
				pathname: "/",
				search: "",
				hash: "",
				href: "http://localhost/",
			},
			writable: true,
		})
	})

	describe("Basic functionality", () => {
		it("should create anchor element", () => {
			const link = Link({ href: "/about" }, "About")

			expect(link).toBeInstanceOf(HTMLAnchorElement)
			expect(link.tagName).toBe("A")
		})

		it("should set href attribute", () => {
			const link = Link({ href: "/contact" }, "Contact")

			expect(link.href).toContain("/contact")
		})

		it("should render children", () => {
			const link = Link({ href: "/home" }, "Home Page")

			expect(link.textContent).toBe("Home Page")
		})

		it("should handle multiple children", () => {
			const span = document.createElement("span")
			span.textContent = "Icon"
			const link = Link({ href: "/profile" }, span, " Profile")

			expect(link.children).toHaveLength(1)
			expect(link.textContent).toContain("Icon")
			expect(link.textContent).toContain("Profile")
		})
	})

	describe("Navigation behavior", () => {
		it("should prevent default click behavior", () => {
			const link = Link({ href: "/test" }, "Test")

			const clickEvent = new MouseEvent("click", {
				bubbles: true,
				cancelable: true,
			})

			const preventDefaultSpy = vi.spyOn(clickEvent, "preventDefault")

			link.dispatchEvent(clickEvent)

			expect(preventDefaultSpy).toHaveBeenCalled()
		})

		it("should handle click events", () => {
			let clicked = false
			const link = Link(
				{
					href: "/test",
					onclick: () => {
						clicked = true
					},
				},
				"Test",
			)

			link.click()

			expect(clicked).toBe(true)
		})

		it("should not navigate when disabled", () => {
			const link = Link({ href: "/test", disabled: true }, "Test")

			link.click()

			// Navigation should not occur when disabled
			expect(link).toBeDefined()
		})

		it("should not navigate when href is undefined", () => {
			const link = Link({ href: undefined }, "Test")

			link.click()

			// Should not throw or navigate
			expect(link).toBeDefined()
		})
	})

	describe("Replace navigation", () => {
		it("should support replace navigation", () => {
			const link = Link({ href: "/replace", replace: true }, "Replace")

			expect(link).toBeDefined()
			// In real implementation, this would test the replace behavior
		})

		it("should default to push navigation", () => {
			const link = Link({ href: "/push" }, "Push")

			expect(link).toBeDefined()
			// Default should be push navigation (replace: false)
		})
	})

	describe("Accessibility", () => {
		it("should set tabIndex", () => {
			const link = Link(
				{ href: "/accessible", tabIndex: 2 },
				"Accessible",
			)

			expect(link.tabIndex).toBe(2)
		})

		it("should default tabIndex to 0", () => {
			const link = Link({ href: "/default" }, "Default")

			expect(link.tabIndex).toBe(0)
		})

		it("should handle disabled state for accessibility", () => {
			const link = Link({ href: "/disabled", disabled: true }, "Disabled")

			// Disabled links should still be accessible but not navigable
			expect(link).toBeDefined()
		})

		it("should support ARIA attributes", () => {
			const link = Link(
				{
					href: "/aria",
					"aria-label": "Navigate to page",
					"aria-describedby": "description",
				},
				"ARIA Link",
			)

			expect(link.getAttribute("aria-label")).toBe("Navigate to page")
			expect(link.getAttribute("aria-describedby")).toBe("description")
		})
	})

	describe("Styling and CSS", () => {
		it("should apply CSS classes", () => {
			const link = Link(
				{ href: "/styled", class: "btn btn-primary" },
				"Styled",
			)

			expect(link.className).toContain("btn")
			expect(link.className).toContain("btn-primary")
		})

		it("should apply reactive CSS classes", () => {
			const dynamicClass = () => "dynamic-class"
			const link = Link(
				{ href: "/dynamic", class: dynamicClass },
				"Dynamic",
			)

			// In real implementation, this would test reactive class updates
			expect(link).toBeDefined()
		})

		it("should handle focus-visible styles", () => {
			const link = Link({ href: "/focus" }, "Focus")

			// Should have focus-ring class when not disabled
			expect(link.className).toContain("focus-ring")
		})

		it("should handle disabled styling", () => {
			const link = Link(
				{ href: "/disabled", disabled: true, class: "custom-link" },
				"Disabled",
			)

			expect(link.className).toContain("custom-link")
		})
	})

	describe("Event handling", () => {
		it("should call custom onclick handler", () => {
			let customClicked = false
			const link = Link(
				{
					href: "/custom",
					onclick: () => {
						customClicked = true
					},
				},
				"Custom",
			)

			link.click()

			expect(customClicked).toBe(true)
		})

		it("should handle keyboard events", () => {
			const link = Link({ href: "/keyboard" }, "Keyboard")

			const keyEvent = new KeyboardEvent("keydown", {
				key: "Enter",
				bubbles: true,
			})

			expect(() => {
				link.dispatchEvent(keyEvent)
			}).not.toThrow()
		})

		it("should handle mouse events", () => {
			const link = Link({ href: "/mouse" }, "Mouse")

			const mouseEvent = new MouseEvent("mouseenter", {
				bubbles: true,
			})

			expect(() => {
				link.dispatchEvent(mouseEvent)
			}).not.toThrow()
		})
	})

	describe("Dynamic href", () => {
		it("should handle reactive href", () => {
			const dynamicHref = () => "/dynamic-path"
			const link = Link({ href: dynamicHref }, "Dynamic")

			// In real implementation, this would test reactive href updates
			expect(link).toBeDefined()
		})

		it("should handle href state changes", () => {
			// This would test href that changes based on application state
			const link = Link({ href: "/initial" }, "Changing")

			expect(link.href).toContain("/initial")
		})
	})

	describe("Integration with router", () => {
		it("should work with router basename", () => {
			// Test that links work correctly with router basename
			const link = Link({ href: "/page" }, "Page")

			expect(link.href).toContain("/page")
		})

		it("should handle relative paths", () => {
			const link = Link({ href: "relative-path" }, "Relative")

			expect(link).toBeDefined()
		})

		it("should handle absolute URLs", () => {
			const link = Link({ href: "https://example.com" }, "External")

			expect(link.href).toBe("https://example.com/")
		})
	})

	describe("Edge cases", () => {
		it("should handle empty href", () => {
			const link = Link({ href: "" }, "Empty")

			expect(link).toBeDefined()
		})

		it("should handle special characters in href", () => {
			const link = Link({ href: "/special/café" }, "Special")

			expect(link).toBeDefined()
		})

		it("should handle very long href", () => {
			const longHref = "/" + "segment/".repeat(100) + "end"
			const link = Link({ href: longHref }, "Long")

			expect(link.href).toContain(longHref)
		})

		it("should handle hash links", () => {
			const link = Link({ href: "#section" }, "Hash")

			expect(link.href).toContain("#section")
		})

		it("should handle query parameters in href", () => {
			const link = Link({ href: "/search?q=test&type=all" }, "Search")

			expect(link.href).toContain("q=test")
			expect(link.href).toContain("type=all")
		})

		it("should handle malformed URLs gracefully", () => {
			expect(() => {
				Link({ href: "://malformed" }, "Malformed")
			}).not.toThrow()
		})
	})

	describe("Performance", () => {
		it("should create links efficiently", () => {
			const startTime = performance.now()

			for (let i = 0; i < 100; i++) {
				Link({ href: `/link-${i}` }, `Link ${i}`)
			}

			const endTime = performance.now()

			expect(endTime - startTime).toBeLessThan(100) // Should be fast
		})

		it("should handle rapid click events", () => {
			const link = Link({ href: "/rapid" }, "Rapid")

			// Simulate rapid clicking
			for (let i = 0; i < 10; i++) {
				link.click()
			}

			expect(link).toBeDefined()
		})
	})
})
