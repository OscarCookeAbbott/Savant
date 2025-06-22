import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    root: ".",
    plugins: [tailwindcss()],
    build: {
        lib: {
            entry: "src/index.ts",
            name: "Savant",
            fileName: (format) => `savant.${format}.js`,
        },
        outDir: "dist",
    },
})
