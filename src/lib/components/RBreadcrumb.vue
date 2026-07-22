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
  font-size: 0.85rem;
}
.rk-breadcrumb__link {
  color: var(--rk-ink-soft);
  text-decoration: none;
  font-weight: 700;
  transition: color 0.15s ease;
}
.rk-breadcrumb__link:hover {
  color: var(--rk-accent);
}
.rk-breadcrumb__current {
  color: var(--rk-ink);
  font-weight: 700;
}
.rk-breadcrumb__sep {
  color: var(--rk-edge);
}
</style>
