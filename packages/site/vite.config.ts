import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig(({ mode }) => {
    const base = mode === "production" ? "/Savant/" : "/"

    return {
        base: base,
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@savant/ui": path.resolve(__dirname, "../ui/src"),
            },
        },
        build: {
            outDir: "dist",
        },
    }
})
