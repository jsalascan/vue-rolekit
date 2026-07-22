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
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-lg);
  background: var(--rk-paper-2);
  padding: 20px;
  font-family: var(--rk-font-sans);
  box-shadow: var(--rk-shadow-paper);
}
.rk-card__title {
  font-family: var(--rk-font-mono);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--rk-ink);
  margin: 0 0 10px;
}
.rk-card__body {
  color: var(--rk-ink-soft);
  font-size: 0.9rem;
  line-height: 1.6;
}
</style>
