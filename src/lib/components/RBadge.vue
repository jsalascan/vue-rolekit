<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'default' | 'success' | 'warning' | 'danger'
  }>(),
  { variant: 'default' }
)
</script>

<template>
  <span class="rk-badge" :class="`rk-badge--${variant}`">
    <slot />
  </span>
</template>

<style scoped>
.rk-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  border-radius: var(--rk-radius);
  font-family: var(--rk-font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--rk-fg);
  background: var(--rk-subtle);
}
.rk-badge--success {
  color: var(--rk-success);
  background: color-mix(in srgb, var(--rk-success) 12%, var(--rk-bg));
}
.rk-badge--warning {
  color: var(--rk-warning);
  background: color-mix(in srgb, var(--rk-warning) 12%, var(--rk-bg));
}
.rk-badge--danger {
  color: var(--rk-danger);
  background: color-mix(in srgb, var(--rk-danger) 12%, var(--rk-bg));
}
</style>
