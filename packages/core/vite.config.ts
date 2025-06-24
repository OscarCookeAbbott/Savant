import { defineConfig } from "vite"

export default defineConfig({
	build: {
		lib: {
			entry: "src/index.ts",
			name: "SavantCore",
			fileName: (format) => `index.${format}.js`,
		},
		outDir: "dist",
	},
})
