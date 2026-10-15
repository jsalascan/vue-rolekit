import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { RTable, type Column } from '../src/lib'

const columns: Column[] = [
  { key: 'name', label: 'Nombre' },
  { key: 'salary', label: 'Salario' },
]

const rows = [{ name: 'Ana', salary: '20.000 €' }]

describe('RTable', () => {
  it('renderiza las columnas y filas recibidas por props', () => {
    const wrapper = mount(RTable, { props: { columns, rows } })
    expect(wrapper.text()).toContain('Nombre')
    expect(wrapper.text()).toContain('Salario')
    expect(wrapper.text()).toContain('Ana')
    expect(wrapper.text()).toContain('20.000 €')
  })

  it('renderiza una fila por cada elemento de rows', () => {
    const wrapper = mount(RTable, {
      props: {
        columns,
        rows: [
          { name: 'Ana', salary: '20.000 €' },
          { name: 'Luis', salary: '22.000 €' },
        ],
      },
    })
    expect(wrapper.findAll('tbody tr')).toHaveLength(2)
  })
})
