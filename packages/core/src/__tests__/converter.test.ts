import { describe, expect, it } from "vitest"

import { htmlToSavantCode } from "../converter"

describe("HTML to Savant Converter", () => {
	describe("Basic HTML elements", () => {
		it("should convert simple div", () => {
			const html = "<div>Hello World</div>"
			const result = htmlToSavantCode(html)

			expect(result.code.map((s) => s.trim()).join("")).toEqual(
				`html.div("Hello World")`,
			)
		})

		it("should convert elements with attributes", () => {
			const html = '<div id="test" class="container">Content</div>'
			const result = htmlToSavantCode(html)

			expect(result).toContain("html.div")
			expect(result).toContain("id:")
			expect(result).toContain("class:")
			expect(result).toContain("test")
			expect(result).toContain("container")
		})

		it("should handle self-closing tags", () => {
			const html = '<input type="text" placeholder="Enter text" />'
			const result = htmlToSavantCode(html)

			expect(result).toContain("html.input")
			expect(result).toContain("type:")
			expect(result).toContain("placeholder:")
		})

		it("should handle nested elements", () => {
			const html = "<div><p>Paragraph</p><span>Span</span></div>"
			const result = htmlToSavantCode(html)

			expect(result).toContain("html.div")
			expect(result).toContain("html.p")
			expect(result).toContain("html.span")
		})
	})

	describe("Attribute handling", () => {
		it("should handle boolean attributes", () => {
			const html = '<input type="checkbox" checked disabled>'
			const result = htmlToSavantCode(html)

			expect(result).toContain("checked")
			expect(result).toContain("disabled")
		})

		it("should handle data attributes", () => {
			const html =
				'<div data-testid="component" data-value="123">Content</div>'
			const result = htmlToSavantCode(html)

			expect(result).toContain("data-testid")
			expect(result).toContain("data-value")
		})

		it("should handle style attribute", () => {
			const html =
				'<div style="color: red; font-size: 16px;">Styled</div>'
			const result = htmlToSavantCode(html)

			expect(result).toContain("style:")
		})

		it("should handle event attributes", () => {
			const html = '<button onclick="handleClick()">Click me</button>'
			const result = htmlToSavantCode(html)

			expect(result).toContain("onclick")
		})

		it("should quote attribute names that need quoting", () => {
			const html =
				'<div data-test-id="test" aria-label="label">Content</div>'
			const result = htmlToSavantCode(html)

			// Should quote attribute names with hyphens
			expect(result).toMatch(/"data-test-id"/)
			expect(result).toMatch(/"aria-label"/)
		})
	})

	describe("Text content handling", () => {
		it("should handle plain text", () => {
			const html = "<p>Simple text content</p>"
			const result = htmlToSavantCode(html)

			expect(result).toContain("Simple text content")
		})

		it("should handle text with special characters", () => {
			const html = "<p>Text with &lt;special&gt; &amp; characters</p>"
			const result = htmlToSavantCode(html)

			expect(result).toContain("Text with")
		})

		it("should handle mixed text and elements", () => {
			const html = "<div>Before <strong>bold</strong> after</div>"
			const result = htmlToSavantCode(html)

			expect(result).toContain("Before")
			expect(result).toContain("html.strong")
			expect(result).toContain("after")
		})

		it("should skip empty text when configured", () => {
			const html = "<div>  \n\t  <p>Content</p>  \n  </div>"
			const result = htmlToSavantCode(html, { skipEmptyText: true })

			expect(result).toContain("html.div")
			expect(result).toContain("html.p")
			// Should not contain whitespace-only text
		})
	})

	describe("Configuration options", () => {
		it("should respect indent option", () => {
			const html = "<div><p>Nested</p></div>"
			const result2 = htmlToSavantCode(html, { indent: 4 })
			const result1 = htmlToSavantCode(html, { indent: 2 })

			// Different indentation should produce different results
			expect(result2).not.toBe(result1)
		})

		it("should respect spacing option", () => {
			const html = '<div id="test">Content</div>'
			const withSpacing = htmlToSavantCode(html, { spacing: true })
			const withoutSpacing = htmlToSavantCode(html, { spacing: false })

			expect(withSpacing).not.toBe(withoutSpacing)
		})

		it("should use custom HTML tag predicate", () => {
			const html = "<CustomComponent>Content</CustomComponent>"
			const result = htmlToSavantCode(html, {
				htmlTagPred: (name) => name.toLowerCase() === name,
			})

			expect(result).toBeDefined()
		})
	})

	describe("Complex HTML structures", () => {
		it("should handle deeply nested structures", () => {
			const html = `
				<div class="container">
					<header>
						<nav>
							<ul>
								<li><a href="#home">Home</a></li>
								<li><a href="#about">About</a></li>
							</ul>
						</nav>
					</header>
					<main>
						<section>
							<h1>Title</h1>
							<p>Content paragraph</p>
						</section>
					</main>
				</div>
			`
			const result = htmlToSavantCode(html)

			expect(result).toContain("html.div")
			expect(result).toContain("html.header")
			expect(result).toContain("html.nav")
			expect(result).toContain("html.ul")
			expect(result).toContain("html.li")
			expect(result).toContain("html.a")
			expect(result).toContain("html.main")
			expect(result).toContain("html.section")
			expect(result).toContain("html.h1")
			expect(result).toContain("html.p")
		})

		it("should handle forms with various input types", () => {
			const html = `
				<form>
					<input type="text" name="username" />
					<input type="password" name="password" />
					<input type="email" name="email" />
					<select name="country">
						<option value="us">United States</option>
						<option value="ca">Canada</option>
					</select>
					<textarea name="message"></textarea>
					<button type="submit">Submit</button>
				</form>
			`
			const result = htmlToSavantCode(html)

			expect(result).toContain("html.form")
			expect(result).toContain("html.input")
			expect(result).toContain("html.select")
			expect(result).toContain("html.option")
			expect(result).toContain("html.textarea")
			expect(result).toContain("html.button")
		})

		it("should handle tables", () => {
			const html = `
				<table>
					<thead>
						<tr>
							<th>Header 1</th>
							<th>Header 2</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Cell 1</td>
							<td>Cell 2</td>
						</tr>
					</tbody>
				</table>
			`
			const result = htmlToSavantCode(html)

			expect(result).toContain("html.table")
			expect(result).toContain("html.thead")
			expect(result).toContain("html.tbody")
			expect(result).toContain("html.tr")
			expect(result).toContain("html.th")
			expect(result).toContain("html.td")
		})
	})

	describe("Edge cases", () => {
		it("should handle empty HTML", () => {
			const html = ""
			const result = htmlToSavantCode(html)

			expect(result).toBeDefined()
		})

		it("should handle HTML with comments", () => {
			const html = "<!-- Comment --><div>Content</div>"
			const result = htmlToSavantCode(html)

			expect(result).toContain("html.div")
			expect(result).toContain("Content")
		})

		it("should handle malformed HTML gracefully", () => {
			const html = "<div><p>Unclosed paragraph<div>Nested</div>"

			expect(() => {
				htmlToSavantCode(html)
			}).not.toThrow()
		})

		it("should handle HTML with scripts", () => {
			const html = '<div><script>alert("hello")</script>Content</div>'
			const result = htmlToSavantCode(html)

			expect(result).toContain("html.div")
		})

		it("should handle HTML with inline SVG", () => {
			const html = `
				<div>
					<svg width="100" height="100">
						<circle cx="50" cy="50" r="25" fill="red" />
					</svg>
				</div>
			`
			const result = htmlToSavantCode(html)

			expect(result).toContain("html.div")
			expect(result).toContain("svg")
			expect(result).toContain("circle")
		})

		it("should handle large HTML documents", () => {
			// Generate large HTML
			const items = Array.from(
				{ length: 100 },
				(_, i) => `<li>Item ${i}</li>`,
			).join("")
			const html = `<ul>${items}</ul>`

			const result = htmlToSavantCode(html)

			expect(result).toContain("html.ul")
			expect(result).toContain("html.li")
		})
	})
})
