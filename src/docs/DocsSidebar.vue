<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { version } from '../../package.json'
import { categories } from './nav-data'

const route = useRoute()
const indexOpen = ref(false)

// En móvil el índice va plegado; al navegar se recoge solo.
watch(
  () => route.path,
  () => {
    indexOpen.value = false
  }
)

const links = [
  { href: 'https://github.com/jsalascan/vue-rolekit', label: 'GitHub ↗' },
  { href: 'https://www.npmjs.com/package/vue-rolekit', label: 'npm ↗' },
]
</script>

<template>
  <header class="sidebar">
    <div class="sidebar__brand">
      <RouterLink to="/" class="sidebar__name">vue-rolekit</RouterLink>
      <p class="sidebar__meta">v{{ version }} · Vue 3</p>
    </div>

    <ul class="sidebar__links">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" target="_blank" rel="noopener" class="enlace">{{ link.label }}</a>
      </li>
    </ul>

    <button
      type="button"
      class="sidebar__toggle"
      aria-controls="docs-index"
      :aria-expanded="indexOpen"
      @click="indexOpen = !indexOpen"
    >
      {{ indexOpen ? 'Ocultar componentes' : 'Componentes' }}
    </button>

    <nav id="docs-index" class="sidebar__nav" :class="{ 'is-open': indexOpen }" aria-label="Componentes">
      <div class="sidebar__nav-inner">
        <ul class="sidebar__list">
          <li><RouterLink to="/" class="sidebar__link">Introducción</RouterLink></li>
        </ul>
        <template v-for="cat in categories" :key="cat.name">
          <p class="sidebar__category">{{ cat.name }}</p>
          <ul class="sidebar__list">
            <li v-for="item in cat.items" :key="item.id">
              <RouterLink :to="item.path" class="sidebar__link">{{ item.label }}</RouterLink>
            </li>
          </ul>
        </template>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 0 20px;
  border-bottom: 1px solid var(--rk-rule);
}
.sidebar__name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--rk-fg);
  text-decoration: none;
  transition: color 0.15s var(--rk-ease);
}
.sidebar__name:hover {
  color: var(--rk-accent);
}
.sidebar__meta {
  margin: 2px 0 0;
  font-family: var(--rk-font-mono);
  font-size: 0.875rem;
  color: var(--rk-muted);
}
.sidebar__links {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.875rem;
}
.sidebar__toggle {
  align-self: flex-start;
  padding: 6px 10px;
  border: 1px solid var(--rk-rule);
  border-radius: var(--rk-radius);
  background: var(--rk-bg);
  color: var(--rk-fg);
  font-family: var(--rk-font-mono);
  font-size: 0.875rem;
  cursor: pointer;
}
.sidebar__toggle:hover {
  border-color: var(--rk-muted);
}
/* En móvil el índice se despliega animando el alto (0fr ↔ 1fr), como RAccordion.
   visibility lo saca del foco y de los lectores de pantalla cuando está plegado. */
.sidebar__nav {
  display: grid;
  grid-template-rows: 0fr;
  visibility: hidden;
  transition: grid-template-rows 0.15s var(--rk-ease), visibility 0s linear 0.15s;
}
.sidebar__nav.is-open {
  grid-template-rows: 1fr;
  visibility: visible;
  transition: grid-template-rows 0.15s var(--rk-ease), visibility 0s;
}
.sidebar__nav-inner {
  min-height: 0;
  overflow: hidden;
}
@media (prefers-reduced-motion: reduce) {
  .sidebar__nav,
  .sidebar__nav.is-open {
    transition: none;
  }
}
.sidebar__category {
  margin: 20px 0 6px;
  font-family: var(--rk-font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--rk-muted);
}
.sidebar__list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.sidebar__link {
  font-size: 0.9375rem;
  color: var(--rk-muted);
  text-decoration: none;
  transition: color 0.15s var(--rk-ease);
}
.sidebar__link:hover {
  color: var(--rk-fg);
}
.sidebar__link[aria-current='page'] {
  color: var(--rk-accent);
}

@media (min-width: 1024px) {
  .sidebar {
    position: sticky;
    top: 0;
    align-self: start;
    box-sizing: border-box;
    max-height: 100vh;
    overflow-y: auto;
    padding: 64px 8px 32px 0;
    border-bottom: none;
    gap: 28px;
  }
  .sidebar__toggle {
    display: none;
  }
  .sidebar__nav {
    display: block;
    visibility: visible;
    transition: none;
  }
  .sidebar__nav-inner {
    overflow: visible;
  }
  .sidebar__category:first-of-type {
    margin-top: 16px;
  }
  .sidebar__links {
    order: 1;
  }
}
</style>
