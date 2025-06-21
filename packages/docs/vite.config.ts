import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ mode }) => {
    const base = mode === "production" ? "/Savant/" : "/"

    return {
        base: base,
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
    }
})
