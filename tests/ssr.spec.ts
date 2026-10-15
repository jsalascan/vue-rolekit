// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createHead } from '@unhead/vue/server'
import * as lib from '../src/lib'
import App from '../src/App.vue'
import { routes } from '../src/docs/router'

const props: Record<string, Record<string, unknown>> = {
  RInput: { modelValue: '' },
  RTextarea: { modelValue: '' },
  RSelect: { modelValue: 'a', options: [{ value: 'a', label: 'A' }] },
  RCheckbox: { modelValue: false },
  RSwitch: { modelValue: false },
  RRadioGroup: { modelValue: 'a', options: [{ value: 'a', label: 'A' }] },
  RDatePicker: { modelValue: '2026-10-15' },
  RTable: { columns: [], rows: [] },
  RAvatar: { name: 'Ana López' },
  RPagination: { modelValue: 1, pageCount: 3 },
  RBreadcrumb: { items: [] },
  RTabs: { modelValue: 'a', tabs: [{ value: 'a', label: 'A' }] },
  RAccordion: { modelValue: [], items: [] },
  RTooltip: { text: 'hola' },
  RProgressBar: { value: 50 },
  RModal: { modelValue: false },
}

describe('SSR', () => {
  const components = Object.entries(lib).filter(([name]) => name.startsWith('R'))

  for (const [name, component] of components) {
    it(`${name} se renderiza en servidor sin tocar document ni window`, async () => {
      const app = createSSRApp({ render: () => h(component as never, props[name] ?? {}) })
      await expect(renderToString(app)).resolves.toBeTypeOf('string')
    })
  }

  it('la web de docs se renderiza en servidor en cada ruta', async () => {
    for (const route of routes) {
      const router = createRouter({ history: createMemoryHistory(), routes })
      const app = createSSRApp(App).use(router).use(createHead())
      await router.push(route.path)
      await router.isReady()
      const html = await renderToString(app)
      expect(html, route.path).toContain('vue-rolekit')
    }
  })
})
