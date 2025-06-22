import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ mode }) => {
    const base = mode === "production" ? "/Savant/" : "/"

    return {
        root: "./src/site",
        base: base,
        plugins: [tailwindcss()],
    }
})
