<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'info' | 'success' | 'warning' | 'danger'
    title?: string
  }>(),
  { variant: 'info' }
)
</script>

<template>
  <div class="rk-alert" :class="`rk-alert--${variant}`">
    <p v-if="title" class="rk-alert__title">{{ title }}</p>
    <div class="rk-alert__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.rk-alert {
  border-left: 2px solid var(--rk-accent);
  border-radius: var(--rk-radius);
  background: color-mix(in srgb, var(--rk-accent) 12%, var(--rk-bg));
  padding: 12px 16px;
  font-family: var(--rk-font-sans);
}
.rk-alert__title {
  font-size: 0.9375rem;
  font-weight: 600;
  margin: 0 0 2px;
  color: var(--rk-fg);
}
.rk-alert__body {
  font-size: 0.9375rem;
  color: var(--rk-fg);
  line-height: 1.5;
}
.rk-alert--success {
  border-left-color: var(--rk-success);
  background: color-mix(in srgb, var(--rk-success) 12%, var(--rk-bg));
}
.rk-alert--warning {
  border-left-color: var(--rk-warning);
  background: color-mix(in srgb, var(--rk-warning) 12%, var(--rk-bg));
}
.rk-alert--danger {
  border-left-color: var(--rk-danger);
  background: color-mix(in srgb, var(--rk-danger) 12%, var(--rk-bg));
}
</style>
