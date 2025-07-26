import { beforeEach, vi } from "vitest"

// Mock DOM environment
beforeEach(() => {
	// Reset document
	document.body.innerHTML = ""

	// Mock crypto API if not available
	if (!globalThis.crypto) {
		globalThis.crypto = {
			randomUUID: () => Math.random().toString(36).substring(2, 10),
		} as Crypto
	}

	// Mock Prism for syntax highlighting
	;(globalThis as any).Prism = {
		highlightAllUnder: vi.fn(),
		highlightElement: vi.fn(),
	}

	// Clear all timers
	vi.clearAllTimers()
})

// Global test utilities
globalThis.createTestElement = (tag = "div") => {
	const element = document.createElement(tag)
	document.body.appendChild(element)
	return element
}

// Mock getBoundingClientRect for components that use it
globalThis.mockBoundingClientRect = (
	element: Element,
	rect: Partial<DOMRect>,
) => {
	const defaultRect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		toJSON: () => ({}),
	}

	vi.spyOn(element, "getBoundingClientRect").mockReturnValue({
		...defaultRect,
		...rect,
	} as DOMRect)
}

// Declare types for global utilities
declare global {
	function createTestElement(tag?: string): HTMLElement
	function mockBoundingClientRect(
		element: Element,
		rect: Partial<DOMRect>,
	): void
}
