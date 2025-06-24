import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceFileNames = [
	"styles/style.css",
	"styles/markup.css",
	"styles/prism.css",
]

for (const fileName of sourceFileNames) {
	const src = path.resolve(__dirname, "src/" + fileName)
	const destDir = path.resolve(
		__dirname,
		"dist" + path.dirname("/" + fileName),
	)
	const dest = path.join(__dirname, "dist/" + fileName)

	// Ensure dist directory exists
	if (!fs.existsSync(destDir)) {
		fs.mkdirSync(destDir, { recursive: true })
	}

	// eslint-disable-next-line
	console.log(`Copying ${src} to ${dest}`)

	// Copy the file
	fs.copyFileSync(src, dest)

	// eslint-disable-next-line
	console.log(`Copied ${src} to ${dest}`)
}
