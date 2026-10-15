import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import ThemeToggle from '../src/docs/ThemeToggle.vue'

beforeEach(() => {
  delete document.documentElement.dataset.theme
  localStorage.clear()
})

describe('ThemeToggle', () => {
  it('muestra el tema actual y cicla al pulsar', async () => {
    const wrapper = mount(ThemeToggle)
    expect(wrapper.text()).toBe('tema: auto')

    await wrapper.trigger('click')
    expect(wrapper.text()).toBe('tema: claro')
    expect(document.documentElement.dataset.theme).toBe('light')

    await wrapper.trigger('click')
    expect(wrapper.text()).toBe('tema: oscuro')

    await wrapper.trigger('click')
    expect(wrapper.text()).toBe('tema: auto')
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false)
  })

  it('al montarse muestra el tema ya aplicado por el script de index.html', async () => {
    document.documentElement.dataset.theme = 'dark'
    const wrapper = mount(ThemeToggle)
    await nextTick()
    expect(wrapper.text()).toBe('tema: oscuro')
  })
})
