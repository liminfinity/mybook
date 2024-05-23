import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
    strictPort: true
  },
  preview: {
    host: 'localhost',
    port: 3000,
    strictPort: true
  },
  resolve: {
    alias: {
      "@app": "/src/app",
      "@pages": "/src/pages",
      "@widgets": "/src/widgets",
      "@entities": "/src/entities",
      "@features": "/src/features",
      "@shared": "/src/shared",

    }
  },
})
