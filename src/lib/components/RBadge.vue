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
  color: var(--rk-paper);
  background: var(--rk-ink-soft);
}
.rk-badge--success {
  background: #2f7a4d;
}
.rk-badge--warning {
  background: var(--rk-accent);
}
.rk-badge--danger {
  background: var(--rk-danger);
}
</style>
