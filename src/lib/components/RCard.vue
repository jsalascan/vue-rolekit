<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="rk-card">
    <h3 v-if="title" class="rk-card__title">{{ title }}</h3>
    <div class="rk-card__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.rk-card {
  border: 1px solid var(--rk-rule);
  border-radius: var(--rk-radius);
  background: var(--rk-bg);
  padding: 20px;
  font-family: var(--rk-font-sans);
}
.rk-card__title {
  font-family: var(--rk-font-sans);
  font-size: 1rem;
  font-weight: 600;
  color: var(--rk-fg);
  margin: 0 0 8px;
}
.rk-card__body {
  color: var(--rk-fg);
  font-size: 0.9375rem;
  line-height: 1.6;
}
</style>
