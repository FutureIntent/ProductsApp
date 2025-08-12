import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    watch: {
      usePolling: true,
    },
    allowedHosts: ["react_app"],
    port: 5173,
    strictPort: true,
    host: true
  },
  base: "/ui"
})
