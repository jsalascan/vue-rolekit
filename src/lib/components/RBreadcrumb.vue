<script setup lang="ts">
import type { BreadcrumbItem } from '../types'

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav class="rk-breadcrumb" aria-label="Breadcrumb">
    <template v-for="(item, i) in items" :key="i">
      <a v-if="item.to && i !== items.length - 1" :href="item.to" class="rk-breadcrumb__link">
        {{ item.label }}
      </a>
      <span v-else class="rk-breadcrumb__current" aria-current="page">{{ item.label }}</span>
      <span v-if="i !== items.length - 1" class="rk-breadcrumb__sep" aria-hidden="true">/</span>
    </template>
  </nav>
</template>

<style scoped>
.rk-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-family: var(--rk-font-sans);
  font-size: 0.875rem;
}
.rk-breadcrumb__link {
  color: var(--rk-accent);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
}
.rk-breadcrumb__link:hover {
  text-decoration-thickness: 2px;
}
.rk-breadcrumb__link:focus-visible {
  outline: 2px solid var(--rk-accent);
  outline-offset: 2px;
}
.rk-breadcrumb__current {
  color: var(--rk-fg);
}
.rk-breadcrumb__sep {
  color: var(--rk-muted);
}
</style>
