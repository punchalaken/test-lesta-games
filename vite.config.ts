/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa'
import react from "@vitejs/plugin-react";

const vitePWA = VitePWA({ 
	registerType: "autoUpdate", 
	manifest:{
		name: 'test-lesta-games',
        short_name: 'TLG',
		start_url: '/', 
		lang: 'ru-RU',
        description: 'The test task for Lesta Games',
        theme_color: '#ffffff',
		background_color: '#ffffff',
		display: 'standalone',
		orientation: 'any',
		screenshots:[
			{
				src: '/screenshots/desktop.png', 
				sizes: '2887x1629',
				type: 'image/png',
				form_factor: 'wide'
			},
			{
				src: '/screenshots/mobile.png', 
				sizes: '535x783',
				type: 'image/png',
				form_factor: 'narrow'
			},
			
		],
		icons: [
		{
			purpose: 'maskable',
			src: 'images/favi/web-app-manifest-192x192.png',
			sizes: '192x192',
			type: 'image/png',
		},
		{	
			purpose: 'any',
			src: 'images/favi/web-app-manifest-512x512.png',
			sizes: '192x192',
			type: 'image/png',
		}]
	},
	workbox: {
		globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2,gif}"],
	}
})

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), vitePWA],
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
