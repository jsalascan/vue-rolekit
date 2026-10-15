import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DocsFooter from '../src/docs/DocsFooter.vue'

describe('DocsFooter', () => {
  it('separa el botón de tema del texto legal', () => {
    const wrapper = mount(DocsFooter)
    expect(wrapper.find('.docs-footer__legal').text()).toBe(`© ${new Date().getFullYear()} Jose Salas · MIT`)
    expect(wrapper.find('.docs-footer__legal .theme-toggle').exists()).toBe(false)
    expect(wrapper.find('.docs-footer > .theme-toggle').exists()).toBe(true)
  })
})
