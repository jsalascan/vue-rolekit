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
  padding: 10px 24px;
  border-radius: var(--rk-radius-pill);
  font-family: var(--rk-font-sans);
  font-weight: 700;
  font-size: 0.85rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: background-color 0.15s var(--rk-ease), border-color 0.15s var(--rk-ease),
    color 0.15s var(--rk-ease), box-shadow 0.15s var(--rk-ease), transform 0.1s var(--rk-ease);
}
.rk-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.rk-btn:not(:disabled):active {
  transform: scale(0.96);
}
.rk-btn--primary {
  background: var(--rk-accent);
  color: #fff;
}
.rk-btn--primary:not(:disabled):hover {
  background: var(--rk-ink);
  box-shadow: var(--rk-shadow-paper);
}
.rk-btn--secondary {
  background: var(--rk-paper-2);
  border-color: var(--rk-edge);
  color: var(--rk-ink);
}
.rk-btn--secondary:not(:disabled):hover {
  border-color: var(--rk-ink);
  box-shadow: var(--rk-shadow-paper-sm);
}
.rk-btn--danger {
  background: var(--rk-danger);
  color: #fff;
}
.rk-btn--danger:not(:disabled):hover {
  background: var(--rk-ink);
  box-shadow: var(--rk-shadow-paper);
}
</style>
