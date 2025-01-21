/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "build",
	},
	test:{
		environment: "jsdom",
		setupFiles: ["./src/shared/config/test/setupTest.ts"],
		globals: true,

	},
	resolve: {
		alias: {
			"@": "/src",
			"@app": "/src/app",
			"@shared": "/src/shared",
			"@pages": "/src/pages",
			"@widgets": "/src/widgets",
			"@entities": "/src/entities",
		},
	},
});
