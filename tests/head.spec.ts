// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createHead, renderSSRHead } from '@unhead/vue/server'
import App from '../src/App.vue'
import { routes } from '../src/docs/router'

async function headFor(path: string) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  const head = createHead()
  const app = createSSRApp(App).use(router).use(head)
  await router.push(path)
  await router.isReady()
  await renderToString(app)
  return renderSSRHead(head)
}

describe('metas por página', () => {
  it('cada componente tiene su título, descripción y URL canónica sin #', async () => {
    const { headTags } = await headFor('/r-select')
    expect(headTags).toContain('<title>RSelect · vue-rolekit</title>')
    expect(headTags).toContain('content="Dropdown propio')
    expect(headTags).toContain('href="https://jsalascan.github.io/vue-rolekit/r-select"')
    expect(headTags).toContain('property="og:url" content="https://jsalascan.github.io/vue-rolekit/r-select"')
  })

  it('la home mantiene el título general', async () => {
    const { headTags } = await headFor('/')
    expect(headTags).toContain('<title>vue-rolekit · componentes Vue 3</title>')
    expect(headTags).toContain('href="https://jsalascan.github.io/vue-rolekit/"')
  })
})
