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
  padding: 3px 10px;
  border-radius: var(--rk-radius-pill);
  font-family: var(--rk-font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border: 2px solid var(--rk-edge);
  color: var(--rk-ink-soft);
  background: var(--rk-paper-2);
  box-shadow: var(--rk-shadow-paper-sm);
}
.rk-badge--success {
  border-color: #2f7a4d;
  color: #2f7a4d;
}
.rk-badge--warning {
  border-color: var(--rk-accent);
  color: var(--rk-accent);
}
.rk-badge--danger {
  border-color: var(--rk-danger);
  color: var(--rk-danger);
}
</style>
