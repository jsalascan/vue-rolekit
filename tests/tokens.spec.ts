import { describe, it, expect } from 'vitest'
import css from '../src/lib/styles/tokens.css?raw'
import fontsCss from '../src/lib/styles/fonts.css?raw'

const NAMES = ['bg', 'fg', 'muted', 'rule', 'subtle', 'accent', 'on-accent', 'danger', 'success', 'warning']

function block(selector: string): Record<string, string> {
  const start = css.indexOf(`${selector} {`)
  if (start === -1) throw new Error(`No se encuentra el bloque ${selector}`)
  const body = css.slice(css.indexOf('{', start) + 1, css.indexOf('}', start))
  const vars: Record<string, string> = {}
  for (const m of body.matchAll(/--rk-([a-z-]+):\s*(#[0-9a-f]{6})\s*;/gi)) vars[m[1]] = m[2].toLowerCase()
  return vars
}

function rgb(hex: string): number[] {
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16))
}
function luminance(c: number[]): number {
  const [r, g, b] = c.map((v) => {
    const s = v / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
function contrast(a: number[], b: number[]): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}
function tint(tone: number[], bg: number[]): number[] {
  return tone.map((v, i) => Math.round(v * 0.12 + bg[i] * 0.88))
}

const light = block(':where(:root)')
const dark = block(":where(:root[data-theme='dark'])")
const darkMedia = block(":where(:root:not([data-theme='light']))")

describe('tokens', () => {
  it('define todos los tokens de color en claro y en oscuro', () => {
    for (const name of NAMES) {
      expect(light[name], `claro: --rk-${name}`).toBeDefined()
      expect(dark[name], `oscuro: --rk-${name}`).toBeDefined()
    }
  })

  it('el oscuro por media query usa los mismos valores que data-theme="dark"', () => {
    expect(darkMedia).toEqual(dark)
  })

  it('los bloques de tokens no tienen especificidad para que un :root del consumidor los sobrescriba en ambos modos', () => {
    const code = css.replace(/\/\*[\s\S]*?\*\//g, '')
    const selectors = [...code.matchAll(/([^{}]+)\{[^{}]*--rk-bg:/g)].map((m) => m[1].trim())
    expect(selectors.length).toBe(3)
    for (const sel of selectors) expect(sel, sel).toMatch(/^:where\(/)
  })

  it('las fuentes van aparte y como archivos, no incrustadas en el CSS principal', () => {
    expect(css).not.toMatch(/@font-face/)
    const urls = [...fontsCss.matchAll(/url\('([^']+)'\)/g)].map((m) => m[1])
    expect(urls).toEqual([
      './fonts/public-sans-400.woff2',
      './fonts/public-sans-600.woff2',
      './fonts/ibm-plex-mono-400.woff2',
    ])
  })

  it('no conserva tokens antiguos ni fuentes antiguas', () => {
    expect(css).not.toMatch(/--rk-(paper|edge|ink|shadow|radius-(md|lg|pill))/)
    expect(css).not.toMatch(/Urbanist|ProFont/)
  })

  for (const [mode, t] of [['claro', light], ['oscuro', dark]] as const) {
    it(`contraste AA en modo ${mode}`, () => {
      const bg = rgb(t.bg)
      for (const tone of ['fg', 'muted', 'accent', 'danger', 'success', 'warning']) {
        expect(contrast(rgb(t[tone]), bg), `${tone} sobre bg`).toBeGreaterThanOrEqual(4.5)
        expect(contrast(rgb(t[tone]), rgb(t.subtle)), `${tone} sobre subtle`).toBeGreaterThanOrEqual(4.5)
        expect(contrast(rgb(t[tone]), tint(rgb(t[tone]), bg)), `${tone} sobre su tinte`).toBeGreaterThanOrEqual(4.5)
      }
      for (const fill of ['accent', 'danger', 'success']) {
        expect(contrast(rgb(t['on-accent']), rgb(t[fill])), `on-accent sobre ${fill}`).toBeGreaterThanOrEqual(4.5)
      }
    })
  }
})
