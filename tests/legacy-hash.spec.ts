import { describe, it, expect } from 'vitest'
import { legacyHashPath } from '../src/docs/legacy-hash'

describe('legacyHashPath', () => {
  it('convierte los enlaces antiguos #/ruta en /ruta', () => {
    expect(legacyHashPath('#/r-select')).toBe('/r-select')
    expect(legacyHashPath('#/')).toBe('/')
  })

  it('ignora anclas normales y hash vacío', () => {
    expect(legacyHashPath('')).toBeNull()
    expect(legacyHashPath('#doc-ejemplo')).toBeNull()
  })
})
