import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        // Local dev only: mirror Vercel's /api -> backend routing (prefix stripped).
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
