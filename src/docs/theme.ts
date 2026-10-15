export type ThemeChoice = 'auto' | 'light' | 'dark'

export const THEME_STORAGE_KEY = 'rk-theme'

export const THEME_LABEL: Record<ThemeChoice, string> = {
  auto: 'auto',
  light: 'claro',
  dark: 'oscuro',
}

const ORDER: ThemeChoice[] = ['auto', 'light', 'dark']

export function nextTheme(choice: ThemeChoice): ThemeChoice {
  return ORDER[(ORDER.indexOf(choice) + 1) % ORDER.length]
}

export function currentTheme(root: HTMLElement = document.documentElement): ThemeChoice {
  const theme = root.dataset.theme
  return theme === 'light' || theme === 'dark' ? theme : 'auto'
}

function defaultStorage(): Storage | null {
  try {
    return window.localStorage
  } catch {
    return null
  }
}

// «auto» no guarda nada y deja que mande prefers-color-scheme.
export function applyTheme(
  choice: ThemeChoice,
  root: HTMLElement = document.documentElement,
  storage: Storage | null = defaultStorage()
): void {
  if (choice === 'auto') delete root.dataset.theme
  else root.dataset.theme = choice

  try {
    if (choice === 'auto') storage?.removeItem(THEME_STORAGE_KEY)
    else storage?.setItem(THEME_STORAGE_KEY, choice)
  } catch {
    // Almacenamiento bloqueado: el tema vale para esta visita.
  }
}
