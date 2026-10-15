import { useHead } from '@unhead/vue'

export const SITE_URL = 'https://jsalascan.github.io/vue-rolekit'

interface PageHead {
  title: string
  description: string
  path: string
  ogDescription?: string
}

// Título, descripción y URL canónica propios de cada página pre-renderizada.
export function usePageHead(page: () => PageHead) {
  useHead(() => {
    const { title, description, path, ogDescription = description } = page()
    const url = `${SITE_URL}${path === '/' ? '/' : path}`
    return {
      title,
      link: [{ rel: 'canonical', href: url }],
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: ogDescription },
        { property: 'og:url', content: url },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: ogDescription },
      ],
    }
  })
}
