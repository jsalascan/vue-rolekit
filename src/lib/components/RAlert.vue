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
  border: 2px solid var(--rk-edge);
  border-left-width: 4px;
  border-radius: var(--rk-radius-md);
  background: var(--rk-paper-2);
  padding: 14px 18px;
  font-family: var(--rk-font-sans);
  box-shadow: var(--rk-shadow-paper-sm);
}
.rk-alert__title {
  font-family: var(--rk-font-mono);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 4px;
  color: var(--rk-ink);
}
.rk-alert__body {
  font-size: 0.88rem;
  color: var(--rk-ink-soft);
  line-height: 1.5;
}
.rk-alert--info {
  border-left-color: var(--rk-ink-soft);
}
.rk-alert--success {
  border-left-color: #2f7a4d;
}
.rk-alert--warning {
  border-left-color: var(--rk-accent);
}
.rk-alert--danger {
  border-left-color: var(--rk-danger);
}
</style>
