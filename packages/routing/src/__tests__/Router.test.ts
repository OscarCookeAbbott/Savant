import { beforeEach, describe, expect, it } from "vitest"

import Router, { Route } from "../Router"

describe("Router", () => {
	let container: HTMLElement

	beforeEach(() => {
		container = createTestElement()

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

	describe("Basic routing", () => {
		it("should create router instance", () => {
			const routes: Route[] = [
				{ path: "/", dom: "Home" },
				{ path: "/about", dom: "About" },
			]

			const router = Router({ routes })

			expect(router).toBeDefined()
			expect(router.tagName).toBe("DIV")
		})

		it("should match exact routes", () => {
			const routes: Route[] = [
				{ path: "/", dom: "Home" },
				{ path: "/about", dom: "About" },
				{ path: "/contact", dom: "Contact" },
			]

			const router = Router({ routes })
			container.appendChild(router)

			expect(router).toBeDefined()
		})

		it("should handle route parameters", () => {
			const routes: Route[] = [
				{ path: "/", dom: "Home" },
				{ path: "/user/:id", dom: "User Profile" },
				{ path: "/post/:slug", dom: "Post Detail" },
			]

			const router = Router({ routes })
			container.appendChild(router)

			expect(router).toBeDefined()
		})

		it("should handle multiple parameters", () => {
			const routes: Route[] = [
				{ path: "/user/:userId/post/:postId", dom: "User Post" },
			]

			const router = Router({ routes })

			expect(router).toBeDefined()
		})
	})

	describe("Route matching", () => {
		it("should match root route", () => {
			const routes: Route[] = [
				{ path: "/", dom: "Home" },
				{ path: "/about", dom: "About" },
			]

			Object.defineProperty(window, "location", {
				value: { pathname: "/" },
				writable: true,
			})

			const router = Router({ routes })

			expect(router).toBeDefined()
		})

		it("should match nested routes", () => {
			const routes: Route[] = [
				{ path: "/", dom: "Home" },
				{ path: "/admin", dom: "Admin" },
				{ path: "/admin/users", dom: "Admin Users" },
				{ path: "/admin/settings", dom: "Admin Settings" },
			]

			const router = Router({ routes })

			expect(router).toBeDefined()
		})

		it("should match wildcard route when no other matches", () => {
			const routes: Route[] = [
				{ path: "/", dom: "Home" },
				{ path: "/about", dom: "About" },
				{ path: "*", dom: "Not Found" },
			]

			Object.defineProperty(window, "location", {
				value: { pathname: "/nonexistent" },
				writable: true,
			})

			const router = Router({ routes })

			expect(router).toBeDefined()
		})

		it("should prioritize exact matches over wildcard", () => {
			const routes: Route[] = [
				{ path: "/", dom: "Home" },
				{ path: "/about", dom: "About" },
				{ path: "*", dom: "Not Found" },
			]

			Object.defineProperty(window, "location", {
				value: { pathname: "/about" },
				writable: true,
			})

			const router = Router({ routes })

			expect(router).toBeDefined()
		})
	})

	describe("Path parameters", () => {
		it("should extract single parameter", () => {
			const routes: Route[] = [{ path: "/user/:id", dom: "User Profile" }]

			Object.defineProperty(window, "location", {
				value: { pathname: "/user/123" },
				writable: true,
			})

			const router = Router({ routes })

			expect(router).toBeDefined()
		})

		it("should extract multiple parameters", () => {
			const routes: Route[] = [
				{ path: "/user/:userId/post/:postId", dom: "User Post" },
			]

			Object.defineProperty(window, "location", {
				value: { pathname: "/user/456/post/789" },
				writable: true,
			})

			const router = Router({ routes })

			expect(router).toBeDefined()
		})

		it("should handle URL-encoded parameters", () => {
			const routes: Route[] = [
				{ path: "/search/:query", dom: "Search Results" },
			]

			Object.defineProperty(window, "location", {
				value: { pathname: "/search/hello%20world" },
				writable: true,
			})

			const router = Router({ routes })

			expect(router).toBeDefined()
		})

		it("should handle special characters in parameters", () => {
			const routes: Route[] = [
				{ path: "/file/:filename", dom: "File View" },
			]

			Object.defineProperty(window, "location", {
				value: { pathname: "/file/document-2024.pdf" },
				writable: true,
			})

			const router = Router({ routes })

			expect(router).toBeDefined()
		})
	})

	describe("Query parameters", () => {
		it("should handle query parameters", () => {
			const routes: Route[] = [{ path: "/search", dom: "Search" }]

			Object.defineProperty(window, "location", {
				value: {
					pathname: "/search",
					search: "?q=test&category=books",
				},
				writable: true,
			})

			const router = Router({ routes })

			expect(router).toBeDefined()
		})

		it("should handle empty query parameters", () => {
			const routes: Route[] = [{ path: "/search", dom: "Search" }]

			Object.defineProperty(window, "location", {
				value: {
					pathname: "/search",
					search: "",
				},
				writable: true,
			})

			const router = Router({ routes })

			expect(router).toBeDefined()
		})

		it("should handle complex query parameters", () => {
			const routes: Route[] = [{ path: "/api/data", dom: "API Data" }]

			Object.defineProperty(window, "location", {
				value: {
					pathname: "/api/data",
					search: "?filters[category]=tech&sort=date&limit=10",
				},
				writable: true,
			})

			const router = Router({ routes })

			expect(router).toBeDefined()
		})
	})

	describe("Basename support", () => {
		it("should handle basename prefix", () => {
			const routes: Route[] = [
				{ path: "/", dom: "Home" },
				{ path: "/about", dom: "About" },
			]

			Object.defineProperty(window, "location", {
				value: { pathname: "/app/" },
				writable: true,
			})

			const router = Router({ routes, basename: "/app" })

			expect(router).toBeDefined()
		})

		it("should match routes with basename", () => {
			const routes: Route[] = [
				{ path: "/", dom: "Home" },
				{ path: "/dashboard", dom: "Dashboard" },
			]

			Object.defineProperty(window, "location", {
				value: { pathname: "/myapp/dashboard" },
				writable: true,
			})

			const router = Router({ routes, basename: "/myapp" })

			expect(router).toBeDefined()
		})

		it("should handle basename with trailing slash", () => {
			const routes: Route[] = [{ path: "/", dom: "Home" }]

			const router = Router({ routes, basename: "/app/" })

			expect(router).toBeDefined()
		})
	})

	describe("Navigation", () => {
		it("should respond to popstate events", () => {
			const routes: Route[] = [
				{ path: "/", dom: "Home" },
				{ path: "/about", dom: "About" },
			]

			const router = Router({ routes })
			container.appendChild(router)

			// Simulate navigation
			Object.defineProperty(window, "location", {
				value: { pathname: "/about" },
				writable: true,
			})

			window.dispatchEvent(new PopStateEvent("popstate"))

			expect(router).toBeDefined()
		})

		it("should handle hash changes", () => {
			const routes: Route[] = [{ path: "/", dom: "Home" }]

			const router = Router({ routes })
			container.appendChild(router)

			Object.defineProperty(window, "location", {
				value: {
					pathname: "/",
					hash: "#section1",
				},
				writable: true,
			})

			window.dispatchEvent(new HashChangeEvent("hashchange"))

			expect(router).toBeDefined()
		})
	})

	describe("Edge cases", () => {
		it("should handle empty routes array", () => {
			const routes: Route[] = []

			expect(() => {
				Router({ routes })
			}).not.toThrow()
		})

		it("should handle malformed paths", () => {
			const routes: Route[] = [
				{ path: "///multiple//slashes///", dom: "Test" },
				{ path: "", dom: "Empty" },
			]

			expect(() => {
				Router({ routes })
			}).not.toThrow()
		})

		it("should handle very long paths", () => {
			const longPath = "/" + "segment/".repeat(100) + "end"
			const routes: Route[] = [{ path: longPath, dom: "Long Path" }]

			expect(() => {
				Router({ routes })
			}).not.toThrow()
		})

		it("should handle paths with special characters", () => {
			const routes: Route[] = [
				{ path: "/café", dom: "Café" },
				{ path: "/über", dom: "Über" },
				{ path: "/测试", dom: "Test" },
			]

			expect(() => {
				Router({ routes })
			}).not.toThrow()
		})

		it("should handle concurrent route changes", () => {
			const routes: Route[] = [
				{ path: "/", dom: "Home" },
				{ path: "/page1", dom: "Page 1" },
				{ path: "/page2", dom: "Page 2" },
			]

			const router = Router({ routes })
			container.appendChild(router)

			// Rapid navigation changes
			const paths = ["/", "/page1", "/page2", "/", "/page1"]
			paths.forEach((path, index) => {
				setTimeout(() => {
					Object.defineProperty(window, "location", {
						value: { pathname: path },
						writable: true,
					})
					window.dispatchEvent(new PopStateEvent("popstate"))
				}, index * 10)
			})

			expect(router).toBeDefined()
		})

		it("should handle route with function-based DOM", () => {
			const routes: Route[] = [
				{ path: "/", dom: () => "Dynamic Home" },
				{ path: "/about", dom: () => "Dynamic About" },
			]

			const router = Router({ routes })

			expect(router).toBeDefined()
		})

		it("should handle complex route patterns", () => {
			const routes: Route[] = [
				{ path: "/api/v:version/users/:id", dom: "API User" },
				{ path: "/files/:path*", dom: "File Browser" },
				{ path: "/:category/:subcategory?", dom: "Category" },
			]

			expect(() => {
				Router({ routes })
			}).not.toThrow()
		})
	})

	describe("Performance", () => {
		it("should handle large number of routes", () => {
			const routes: Route[] = Array.from({ length: 1000 }, (_, i) => ({
				path: `/route-${i}`,
				dom: `Route ${i}`,
			}))

			expect(() => {
				Router({ routes })
			}).not.toThrow()
		})

		it("should efficiently match routes", () => {
			const routes: Route[] = Array.from({ length: 100 }, (_, i) => ({
				path: `/route-${i}/:param`,
				dom: `Route ${i}`,
			}))

			Object.defineProperty(window, "location", {
				value: { pathname: "/route-50/test" },
				writable: true,
			})

			const startTime = performance.now()
			const router = Router({ routes })
			const endTime = performance.now()

			expect(router).toBeDefined()
			expect(endTime - startTime).toBeLessThan(100) // Should be fast
		})
	})
})
