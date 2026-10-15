import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import DocsPager from '../src/docs/DocsPager.vue'
import { navItems } from '../src/docs/nav-data'

describe('DocsPager', () => {
  it('muestra anterior y siguiente aunque la URL lleve barra final', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: navItems.map((item) => ({ path: item.path, name: item.id, component: { template: '<div />' } })),
    })
    await router.push('/r-input/')
    const wrapper = mount(DocsPager, { global: { plugins: [router] } })
    const labels = wrapper.findAll('.pager__link .enlace').map((el) => el.text())
    expect(labels).toEqual(['RButton', 'RTextarea'])
  })
})
