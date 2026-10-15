import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createHead } from '@unhead/vue/client'
import DocSection from '../src/docs/DocSection.vue'

async function mountAt(path: string) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }],
  })
  await router.push(path)
  return mount(DocSection, {
    global: { plugins: [router, createHead()] },
    slots: {
      default: '<button>demo</button>',
      code: '<pre><code>codigo</code></pre>',
      props: '<table></table>',
    },
  })
}

describe('DocSection', () => {
  it('toma nombre y descripción de nav-data según la ruta', async () => {
    const wrapper = await mountAt('/r-button')
    expect(wrapper.find('h1').text()).toBe('RButton')
    expect(wrapper.find('.doc__desc').text()).toContain('tres variantes')
  })

  it('pinta los bloques Ejemplo, Código y Props con sus slots', async () => {
    const wrapper = await mountAt('/r-button')
    const rotulos = wrapper.findAll('h2.rotulo').map((h) => h.text())
    expect(rotulos).toEqual(['Ejemplo', 'Código', 'Props'])
    expect(wrapper.find('.doc__demo').text()).toBe('demo')
  })

  it('encuentra el componente por nombre de ruta aunque la URL lleve barra final', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/r-button', name: 'r-button', component: { template: '<div />' } }],
    })
    await router.push('/r-button/')
    const wrapper = mount(DocSection, { global: { plugins: [router, createHead()] }, slots: { default: '<span />' } })
    expect(wrapper.find('h1').text()).toBe('RButton')
  })
})
