import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    // Sin esto Vitest devuelve vacíos los imports de CSS, también los `?raw` (tests/tokens.spec.ts).
    css: true,
  },
})
