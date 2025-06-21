import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ mode }) => {
    const base = mode === "production" ? "/Savant/" : "/"

    return {
        base: base,
        plugins: [tailwindcss()],
        build: {
            outDir: "dist",
        },
    }
})
