import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import DocsSidebar from '../src/docs/DocsSidebar.vue'
import { version } from '../package.json'

async function setup(path = '/') {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }],
  })
  await router.push(path)
  const wrapper = mount(DocsSidebar, { global: { plugins: [router] } })
  return { wrapper, router }
}

describe('DocsSidebar', () => {
  it('muestra nombre, versión y las cuatro categorías', async () => {
    const { wrapper } = await setup()
    expect(wrapper.text()).toContain('vue-rolekit')
    expect(wrapper.text()).toContain(`v${version} · Vue 3`)
    const cats = wrapper.findAll('.sidebar__category').map((c) => c.text())
    expect(cats).toEqual(['Formulario', 'Datos', 'Navegación', 'Feedback'])
  })

  it('enlaza solo a GitHub y npm', async () => {
    const { wrapper } = await setup()
    const labels = wrapper.findAll('.sidebar__links a').map((a) => a.text())
    expect(labels).toEqual(['GitHub ↗', 'npm ↗'])
  })

  it('marca con aria-current solo el enlace de la ruta actual', async () => {
    const { wrapper } = await setup('/r-select')
    const current = wrapper.findAll('[aria-current="page"]')
    expect(current).toHaveLength(1)
    expect(current[0].text()).toBe('RSelect')
  })

  it('el índice se abre con el botón y se cierra al navegar', async () => {
    const { wrapper, router } = await setup('/')
    const toggle = wrapper.find('.sidebar__toggle')
    expect(toggle.attributes('aria-expanded')).toBe('false')

    await toggle.trigger('click')
    expect(toggle.attributes('aria-expanded')).toBe('true')
    expect(wrapper.find('#docs-index').classes()).toContain('is-open')

    await router.push('/r-button')
    await wrapper.vm.$nextTick()
    expect(toggle.attributes('aria-expanded')).toBe('false')
    expect(wrapper.find('#docs-index').classes()).not.toContain('is-open')
  })
})
