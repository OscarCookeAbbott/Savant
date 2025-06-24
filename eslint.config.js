// @ts-check

import js from "@eslint/js"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import tsEslint from "typescript-eslint"

export default tsEslint.config(
	js.configs.recommended,
	...tsEslint.configs.stylistic,
	eslintPluginPrettierRecommended,
	{
		name: "global",
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
				},
			],
		},
		languageOptions: {
			globals: { browser: true, node: true, es2021: true },
		},
	},
	{
		ignores: ["**/.DS_Store", "**/build", "**/node_modules", "**/dist"],
	},
)
