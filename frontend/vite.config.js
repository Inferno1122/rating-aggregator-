import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/configure/',
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Changed to local dist
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html') // Correct path
      }
    }
  }
})