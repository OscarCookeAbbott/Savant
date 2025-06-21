import { defineConfig } from "vite"

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.ts",
            name: "SavantComponents",
            fileName: (format) => `index.${format}.js`,
        },
        outDir: "dist",
        rollupOptions: {
            external: ["@savant/core"],
            output: {
                globals: {
                    "@savant/core": "SavantCore",
                },
            },
        },
    },
})
