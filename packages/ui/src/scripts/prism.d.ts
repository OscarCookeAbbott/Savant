declare const Prism: Prism

interface Prism {
	highlight: (code: string, grammar: any, language: string) => string
	highlightAll: () => void
	highlightAllUnder: (dom: Element) => void
	languages: Record<string, unknown>
}
