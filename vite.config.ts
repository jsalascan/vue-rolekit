import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { cpSync } from 'node:fs'
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
        // En modo librería Vite incrusta en base64 todo recurso que pase por el bundle.
        // Las fuentes se copian tal cual a dist/ con su CSS opcional para no inflar
        // vue-rolekit.css ni meter cadenas base64 en el paquete.
        {
          name: 'copiar-fuentes',
          closeBundle() {
            cpSync(resolve(__dirname, 'src/lib/styles/fonts'), resolve(__dirname, 'dist/fonts'), {
              recursive: true,
            })
            cpSync(resolve(__dirname, 'src/lib/styles/fonts.css'), resolve(__dirname, 'dist/fonts.css'))
          },
        },
      ],
      publicDir: false,
      build: {
        // Sin minificar: el código publicado se puede revisar y la app que lo use ya minifica.
        minify: false,
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
    // Un HTML por ruta (r-select.html…): GitHub Pages sirve /vue-rolekit/r-select sin #.
    ssgOptions: {
      dirStyle: 'flat',
    },
  }
})
