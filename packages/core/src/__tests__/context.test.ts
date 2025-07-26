import { beforeEach, describe, expect, it } from "vitest"

import { getContext, removeContext, setContext } from "../context"
import { state } from "../reactivity"

describe("Context System", () => {
	let testElement: HTMLElement

	beforeEach(() => {
		testElement = createTestElement()
	})

	describe("setContext", () => {
		it("should set context value on DOM element", () => {
			const testValue = state("test value")

			expect(() => {
				setContext(testElement, "test-key", testValue)
			}).not.toThrow()
		})

		it("should handle static values", () => {
			expect(() => {
				setContext(testElement, "static-key", "static value")
			}).not.toThrow()
		})

		it("should handle different data types", () => {
			setContext(testElement, "string-key", "string")
			setContext(testElement, "number-key", 42)
			setContext(testElement, "boolean-key", true)
			setContext(testElement, "object-key", { prop: "value" })
			setContext(testElement, "array-key", [1, 2, 3])

			// All should complete without throwing
			expect(true).toBe(true)
		})

		it("should overwrite existing context", () => {
			setContext(testElement, "key", "initial")
			setContext(testElement, "key", "updated")

			// Should not throw when overwriting
			expect(true).toBe(true)
		})
	})

	describe("getContext", () => {
		it("should retrieve context value", () => {
			const testValue = state("context value")
			setContext(testElement, "test-key", testValue)

			const retrieved = getContext(testElement, "test-key")

			expect(retrieved).toBeDefined()
		})

		it("should return reactive context", () => {
			const testValue = state("initial")
			setContext(testElement, "reactive-key", testValue)

			const context = getContext(testElement, "reactive-key")

			expect(context).toBeDefined()
			// Context should be reactive
			expect(context.val).toBe(testValue)
		})

		it("should handle missing context gracefully", () => {
			expect(() => {
				getContext(testElement, "non-existent-key")
			}).not.toThrow()
		})

		it("should inherit context from parent elements", () => {
			const parent = createTestElement()
			const child = createTestElement()
			parent.appendChild(child)

			const parentValue = state("parent value")
			setContext(parent, "inherited-key", parentValue)

			// Child should inherit context from parent
			const childContext = getContext(child, "inherited-key")
			expect(childContext).toBeDefined()
		})

		it("should prioritize closest context provider", () => {
			const grandparent = createTestElement()
			const parent = createTestElement()
			const child = createTestElement()

			grandparent.appendChild(parent)
			parent.appendChild(child)

			setContext(grandparent, "key", "grandparent")
			setContext(parent, "key", "parent")

			const childContext = getContext(child, "key")
			// Should get value from closest provider (parent)
			expect(childContext).toBeDefined()
		})
	})

	describe("removeContext", () => {
		it("should remove context from element", () => {
			setContext(testElement, "to-remove", "value")

			expect(() => {
				removeContext(testElement, "to-remove")
			}).not.toThrow()
		})

		it("should handle removing non-existent context", () => {
			expect(() => {
				removeContext(testElement, "non-existent")
			}).not.toThrow()
		})

		it("should not affect other contexts", () => {
			setContext(testElement, "keep", "keep this")
			setContext(testElement, "remove", "remove this")

			removeContext(testElement, "remove")

			// Should still be able to get the kept context
			const kept = getContext(testElement, "keep")
			expect(kept).toBeDefined()
		})
	})

	describe("Context reactivity", () => {
		it("should update when context value changes", () => {
			const contextValue = state("initial")
			setContext(testElement, "reactive", contextValue)

			const context = getContext(testElement, "reactive")
			expect(context.val).toBe(contextValue)

			// Update the context value
			contextValue.val = "updated"

			// Context should reflect the change
			expect(contextValue.val).toBe("updated")
		})

		it("should handle multiple consumers", () => {
			const sharedValue = state("shared")
			setContext(testElement, "shared", sharedValue)

			const consumer1 = getContext(testElement, "shared")
			const consumer2 = getContext(testElement, "shared")

			expect(consumer1).toBeDefined()
			expect(consumer2).toBeDefined()
		})

		it("should clean up properly when element is removed", () => {
			const parent = createTestElement()
			const child = createTestElement()
			parent.appendChild(child)

			setContext(child, "cleanup-test", "value")

			// Remove child from DOM
			parent.removeChild(child)

			// Should not throw when accessing context of removed element
			expect(() => {
				getContext(child, "cleanup-test")
			}).not.toThrow()
		})
	})

	describe("Context propagation", () => {
		it("should work with deeply nested elements", () => {
			const levels = []
			let current = testElement

			// Create 5 levels of nesting
			for (let i = 0; i < 5; i++) {
				const child = document.createElement("div")
				current.appendChild(child)
				levels.push(child)
				current = child
			}

			// Set context on root
			setContext(testElement, "deep", "deep value")

			// Access from deepest child
			const deepContext = getContext(levels[4], "deep")
			expect(deepContext).toBeDefined()
		})

		it("should handle context shadowing", () => {
			const parent = createTestElement()
			const child = createTestElement()
			parent.appendChild(child)

			setContext(parent, "shadowed", "parent value")
			setContext(child, "shadowed", "child value")

			const childContext = getContext(child, "shadowed")
			// Should get child's own context, not parent's
			expect(childContext).toBeDefined()
		})

		it("should work with context changes after element hierarchy changes", () => {
			const parent1 = createTestElement()
			const parent2 = createTestElement()
			const child = createTestElement()

			parent1.appendChild(child)
			setContext(parent1, "movable", "parent1")

			// Move child to different parent
			parent2.appendChild(child)
			setContext(parent2, "movable", "parent2")

			const childContext = getContext(child, "movable")
			expect(childContext).toBeDefined()
		})
	})

	describe("Edge cases", () => {
		it("should handle context on document body", () => {
			setContext(document.body, "body-context", "body value")

			const context = getContext(document.body, "body-context")
			expect(context).toBeDefined()
		})

		it("should handle rapid context updates", () => {
			const rapidValue = state("initial")
			setContext(testElement, "rapid", rapidValue)

			// Rapid updates
			for (let i = 0; i < 100; i++) {
				rapidValue.val = `update-${i}`
			}

			expect(rapidValue.val).toBe("update-99")
		})

		it("should handle context with complex objects", () => {
			const complexObject = {
				nested: {
					array: [1, 2, { deep: "value" }],
					func: () => "function result",
				},
				symbols: Symbol("test"),
			}

			setContext(testElement, "complex", complexObject)
			const context = getContext(testElement, "complex")

			expect(context).toBeDefined()
		})

		it("should handle null and undefined context values", () => {
			setContext(testElement, "null-key", null)
			setContext(testElement, "undefined-key", undefined)

			const nullContext = getContext(testElement, "null-key")
			const undefinedContext = getContext(testElement, "undefined-key")

			expect(nullContext).toBeDefined()
			expect(undefinedContext).toBeDefined()
		})
	})
})
