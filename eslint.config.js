import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ ignores: ["dist", "node_modules", "build"] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
		],
		files: [
			"*.vue",
			"*.js",
			"*.jsx",
			"*.cjs",
			"*.mjs",
			"*.ts",
			"*.tsx",
			"*.cts",
			"*.mts",
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
		},
	}
);
