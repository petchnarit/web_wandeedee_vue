import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  base: '/test2026_2/',
  plugins: [vue(), cloudflare()],
  build: {
    assetsInlineLimit: 0
  }
})