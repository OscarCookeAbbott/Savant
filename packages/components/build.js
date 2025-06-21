// Example build script for @savant/components
// You can replace this with a Vite or tsc build as needed

import { fileURLToPath } from "url"
import path from "path"
import fs from "fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceFileNames = ["style.css", "markup.css", "prism.css"]

for (const fileName of sourceFileNames) {
    const src = path.resolve(__dirname, "src/styles/" + fileName)
    const destDir = path.resolve(__dirname, "dist")
    const dest = path.join(destDir, fileName)

    // Ensure dist directory exists
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true })
    }

    // Copy the file
    fs.copyFileSync(src, dest)

    console.log(`Copied ${src} to ${dest}`)
}
