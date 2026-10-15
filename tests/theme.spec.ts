import { describe, it, expect, beforeEach } from 'vitest'
import { THEME_STORAGE_KEY, applyTheme, currentTheme, nextTheme } from '../src/docs/theme'

const root = document.documentElement

beforeEach(() => {
  delete root.dataset.theme
  localStorage.clear()
})

describe('theme', () => {
  it('cicla auto → light → dark → auto', () => {
    expect(nextTheme('auto')).toBe('light')
    expect(nextTheme('light')).toBe('dark')
    expect(nextTheme('dark')).toBe('auto')
  })

  it('lee el tema actual del atributo data-theme', () => {
    expect(currentTheme()).toBe('auto')
    root.dataset.theme = 'dark'
    expect(currentTheme()).toBe('dark')
    root.dataset.theme = 'cualquiera'
    expect(currentTheme()).toBe('auto')
  })

  it('applyTheme pone el atributo y lo guarda; auto lo quita y lo borra', () => {
    applyTheme('dark')
    expect(root.dataset.theme).toBe('dark')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')

    applyTheme('auto')
    expect(root.hasAttribute('data-theme')).toBe(false)
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBeNull()
  })

  it('no lanza si el almacenamiento falla', () => {
    const broken = {
      setItem() {
        throw new Error('bloqueado')
      },
      removeItem() {
        throw new Error('bloqueado')
      },
    } as unknown as Storage
    expect(() => applyTheme('light', root, broken)).not.toThrow()
    expect(root.dataset.theme).toBe('light')
    expect(() => applyTheme('auto', root, null)).not.toThrow()
  })
})
