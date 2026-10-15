import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { RAccordion } from '../src/lib'

const items = [
  { id: 'a', title: 'Primero' },
  { id: 'b', title: 'Segundo' },
]

describe('RAccordion', () => {
  it('gira el chevron solo en los items abiertos', () => {
    const wrapper = mount(RAccordion, { props: { modelValue: ['b'], items } })
    const open = wrapper
      .findAll('.rk-accordion__chevron')
      .map((el) => el.classes().includes('rk-accordion__chevron--open'))
    expect(open).toEqual([false, true])
  })

  it('emite el id al pulsar un item cerrado', async () => {
    const wrapper = mount(RAccordion, { props: { modelValue: [], items } })
    await wrapper.findAll('.rk-accordion__trigger')[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['a']])
  })
})
