import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "build",
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
