import { beforeEach, vi } from "vitest"

// Mock DOM environment
beforeEach(() => {
	// Reset document
	document.body.innerHTML = ""

	// Mock window.location
	Object.defineProperty(window, "location", {
		value: {
			pathname: "/",
			search: "",
			hash: "",
			href: "http://localhost/",
		},
		writable: true,
	})

	// Mock history API
	Object.defineProperty(window, "history", {
		value: {
			pushState: vi.fn(),
			replaceState: vi.fn(),
			back: vi.fn(),
			forward: vi.fn(),
			go: vi.fn(),
		},
		writable: true,
	})

	// Clear all timers
	vi.clearAllTimers()
})

// Global test utilities
globalThis.createTestElement = (tag = "div") => {
	const element = document.createElement(tag)
	document.body.appendChild(element)
	return element
}

// Mock navigation events
globalThis.mockNavigationEvent = (path: string) => {
	window.location.pathname = path
	window.dispatchEvent(new PopStateEvent("popstate"))
}

// Declare types for global utilities
declare global {
	function createTestElement(tag?: string): HTMLElement
	function mockNavigationEvent(path: string): void
}
