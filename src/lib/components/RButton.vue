<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'danger'
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    disabled: false,
    type: 'button',
  }
)
</script>

<template>
  <button :type="type" :disabled="disabled" class="rk-btn" :class="`rk-btn--${variant}`">
    <slot />
  </button>
</template>

<style scoped>
.rk-btn {
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: var(--rk-radius);
  font-family: var(--rk-font-sans);
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 1.4;
  cursor: pointer;
  transition: background-color 0.15s var(--rk-ease), border-color 0.15s var(--rk-ease),
    color 0.15s var(--rk-ease);
}
.rk-btn:focus-visible {
  outline: 2px solid var(--rk-accent);
  outline-offset: 2px;
}
.rk-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.rk-btn--primary {
  background: var(--rk-accent);
  color: var(--rk-on-accent);
}
.rk-btn--primary:not(:disabled):hover {
  background: color-mix(in srgb, var(--rk-accent) 88%, var(--rk-fg));
}
.rk-btn--secondary {
  background: var(--rk-bg);
  border-color: var(--rk-rule);
  color: var(--rk-fg);
}
.rk-btn--secondary:not(:disabled):hover {
  border-color: var(--rk-muted);
}
.rk-btn--danger {
  background: var(--rk-danger);
  color: var(--rk-on-accent);
}
.rk-btn--danger:not(:disabled):hover {
  background: color-mix(in srgb, var(--rk-danger) 88%, var(--rk-fg));
}
</style>
