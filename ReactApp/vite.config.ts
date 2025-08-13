import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    hmr: {
      clientPort: 5173
    },
    watch: {
      usePolling: true,
    },
    allowedHosts: ["react_app"],
    port: 5173,
    strictPort: true,
    host: true
  },
  base: "/ui",
  resolve: {
    alias: {
      "@src": "/src",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@configs": "/src/configs",
      "@functions": "/src/functions",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@slices": "/src/slices",
      "@styles": "/src/styles",
      "@wrappers": "/src/wrappers"
    },
  },
});
