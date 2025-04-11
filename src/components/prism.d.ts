declare const Prism: Prism

interface Prism {
    highlightAll: () => void
    highlight: (code: string, grammar: any, language: string) => string
    languages: Record<string, unknown>
}
