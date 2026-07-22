<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { navItems } from './nav-data'

const route = useRoute()

const currentIndex = computed(() => navItems.findIndex((item) => item.path === route.path))
const prev = computed(() => (currentIndex.value > 0 ? navItems[currentIndex.value - 1] : null))
const next = computed(() =>
  currentIndex.value !== -1 && currentIndex.value < navItems.length - 1
    ? navItems[currentIndex.value + 1]
    : null
)
</script>

<template>
  <nav v-if="currentIndex !== -1" class="docs-pager" aria-label="Paginación de componentes">
    <RouterLink v-if="prev" :to="prev.path" class="docs-pager__link docs-pager__link--prev">
      <span class="docs-pager__arrow">‹</span>
      <span class="docs-pager__text">
        <span class="docs-pager__hint">Anterior</span>
        <span class="docs-pager__label">{{ prev.label }}</span>
      </span>
    </RouterLink>
    <span v-else class="docs-pager__spacer" />

    <RouterLink v-if="next" :to="next.path" class="docs-pager__link docs-pager__link--next">
      <span class="docs-pager__text">
        <span class="docs-pager__hint">Siguiente</span>
        <span class="docs-pager__label">{{ next.label }}</span>
      </span>
      <span class="docs-pager__arrow">›</span>
    </RouterLink>
    <span v-else class="docs-pager__spacer" />
  </nav>
</template>

<style scoped>
.docs-pager {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 56px;
  padding-top: 24px;
  border-top: 2px solid var(--rk-edge);
}
.docs-pager__link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  max-width: 48%;
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-md);
  background: var(--rk-paper-2);
  color: var(--rk-ink);
  text-decoration: none;
  transition: border-color 0.15s var(--rk-ease), transform 0.15s var(--rk-ease),
    box-shadow 0.15s var(--rk-ease);
}
.docs-pager__link:hover {
  border-color: var(--rk-ink);
  transform: translate(-1px, -1px);
  box-shadow: var(--rk-shadow-paper-sm);
}
.docs-pager__link--next {
  flex-direction: row-reverse;
  text-align: right;
}
.docs-pager__arrow {
  font-size: 1.2rem;
  color: var(--rk-accent);
  line-height: 1;
  flex-shrink: 0;
}
.docs-pager__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.docs-pager__hint {
  font-family: var(--rk-font-mono);
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--rk-ink-soft);
}
.docs-pager__label {
  font-weight: 700;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.docs-pager__spacer {
  flex: 1;
}
</style>
