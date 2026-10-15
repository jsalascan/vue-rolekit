import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './docs/router'
import { legacyHashPath } from './docs/legacy-hash'
import './lib/styles/fonts.css'
import './lib/styles/tokens.css'
import './docs/docs.css'

// vite-ssg pre-renderiza un HTML por ruta en el build y en el navegador
// hidrata la app con historial web normal (URLs sin #).
export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior() {
      return { top: 0 }
    },
  },
  ({ router, isClient }) => {
    if (!isClient) return
    const path = legacyHashPath(window.location.hash)
    // Tras la navegación inicial: si se hace antes, esta la pisa con la home.
    if (path) router.isReady().then(() => router.replace(path))
  }
)
