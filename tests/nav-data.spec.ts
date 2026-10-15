import { describe, it, expect } from 'vitest'
import { routes } from '../src/docs/router'
import { findNavItem, navItems } from '../src/docs/nav-data'

describe('nav-data', () => {
  it('cada ruta de componente tiene entrada con descripción', () => {
    const paths = routes.map((r) => r.path).filter((p) => p !== '/')
    expect(paths.length).toBe(navItems.length)
    for (const path of paths) {
      const item = findNavItem(path)
      expect(item, path).toBeDefined()
      expect(item!.description.length, path).toBeGreaterThan(10)
    }
  })

  it('findNavItem devuelve undefined para rutas desconocidas', () => {
    expect(findNavItem('/')).toBeUndefined()
    expect(findNavItem('/no-existe')).toBeUndefined()
  })
})
