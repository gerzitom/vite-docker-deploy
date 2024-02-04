import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  preview: {
    port: 3012
  },
  server: {
    hmr: {
      port: 3010
    },
    port: 3011
  }
})
