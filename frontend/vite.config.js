import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/manifest.json': {
        target: 'http://127.0.0.1:61262',
        changeOrigin: true,
      }
    }
  }
})