import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    plugins: [tailwindcss()],
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
