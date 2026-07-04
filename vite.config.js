import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          bootstrap: ['react-bootstrap']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: true
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
})
