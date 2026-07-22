import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

export default defineConfig(({ mode, command }) => {
  if (mode === 'lib') {
    return {
      plugins: [
        vue(),
        dts({
          entryRoot: 'src/lib',
          include: ['src/lib'],
          outDir: 'dist',
          insertTypesEntry: true,
        }),
      ],
      publicDir: false,
      build: {
        lib: {
          entry: resolve(__dirname, 'src/lib/index.ts'),
          name: 'VueRolekit',
          fileName: 'vue-rolekit',
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: { vue: 'Vue' },
          },
        },
      },
    }
  }

  return {
    plugins: [vue()],
    base: command === 'build' ? '/vue-rolekit/' : '/',
    build: {
      outDir: 'site',
    },
  }
})
