import { describe, it, expect, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { RModal } from '../src/lib'

function fakeScrollbar(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1000 })
  Object.defineProperty(document.documentElement, 'clientWidth', { configurable: true, value: 1000 - width })
}

afterEach(() => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
})

describe('RModal', () => {
  it('al abrir bloquea el scroll y compensa la barra para que la página no se desplace', async () => {
    fakeScrollbar(15)
    const wrapper = mount(RModal, { props: { modelValue: false }, attachTo: document.body })
    await wrapper.setProps({ modelValue: true })
    expect(document.body.style.overflow).toBe('hidden')
    expect(document.body.style.paddingRight).toBe('15px')

    await wrapper.setProps({ modelValue: false })
    expect(document.body.style.overflow).toBe('')
    expect(document.body.style.paddingRight).toBe('')
    wrapper.unmount()
  })

  it('sin barra de scroll no añade padding', async () => {
    fakeScrollbar(0)
    const wrapper = mount(RModal, { props: { modelValue: false }, attachTo: document.body })
    await wrapper.setProps({ modelValue: true })
    expect(document.body.style.paddingRight).toBe('')
    wrapper.unmount()
  })
})
