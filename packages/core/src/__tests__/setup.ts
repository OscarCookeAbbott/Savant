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

	// Clear all timers
	vi.clearAllTimers()
})

// Global test utilities
globalThis.createTestElement = (tag = "div") => {
	const element = document.createElement(tag)
	document.body.appendChild(element)
	return element
}

// Declare types for global utilities
declare global {
	function createTestElement(tag?: string): HTMLElement
}
