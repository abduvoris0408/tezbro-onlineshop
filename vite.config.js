import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	darkMode: ['class', '[data-theme="dark"]'],
	plugins: [react(), tailwindcss()],
})
