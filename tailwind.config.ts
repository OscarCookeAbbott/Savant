import "tailwindcss"
import { Config } from "tailwindcss"

export default {
    content: [
        "./src/**/*.{html,js,ts}",
        "./node_modules/@savant/components/dist/**/*.js",
    ],
} satisfies Config
