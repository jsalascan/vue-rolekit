<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { findNavItemForRoute, navItems } from './nav-data'

const route = useRoute()

const currentIndex = computed(() => {
  const item = findNavItemForRoute(route.name, route.path)
  return item ? navItems.indexOf(item) : -1
})
const prev = computed(() => (currentIndex.value > 0 ? navItems[currentIndex.value - 1] : null))
const next = computed(() =>
  currentIndex.value !== -1 && currentIndex.value < navItems.length - 1
    ? navItems[currentIndex.value + 1]
    : null
)
</script>

<template>
  <nav v-if="currentIndex !== -1" class="pager" aria-label="Paginación de componentes">
    <RouterLink v-if="prev" :to="prev.path" class="pager__link">
      <span class="pager__hint">‹ Anterior</span>
      <span class="enlace">{{ prev.label }}</span>
    </RouterLink>
    <span v-else />

    <RouterLink v-if="next" :to="next.path" class="pager__link pager__link--next">
      <span class="pager__hint">Siguiente ›</span>
      <span class="enlace">{{ next.label }}</span>
    </RouterLink>
  </nav>
</template>

<style scoped>
.pager {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  padding-top: 20px;
  border-top: 1px solid var(--rk-rule);
}
.pager__link {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  text-decoration: none;
}
.pager__link--next {
  text-align: right;
}
.pager__hint {
  font-family: var(--rk-font-mono);
  font-size: 0.8125rem;
  color: var(--rk-muted);
}
</style>
