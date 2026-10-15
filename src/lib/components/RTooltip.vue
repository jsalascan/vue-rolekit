<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <span class="rk-tooltip">
    <slot />
    <span class="rk-tooltip__bubble" role="tooltip">{{ text }}</span>
  </span>
</template>

<style scoped>
.rk-tooltip {
  position: relative;
  display: inline-flex;
}
.rk-tooltip__bubble {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: var(--rk-fg);
  color: var(--rk-bg);
  font-family: var(--rk-font-sans);
  font-size: 0.8125rem;
  line-height: 1.4;
  padding: 4px 8px;
  border-radius: var(--rk-radius);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s var(--rk-ease), transform 0.15s var(--rk-ease);
}
.rk-tooltip:hover .rk-tooltip__bubble,
.rk-tooltip:focus-within .rk-tooltip__bubble {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .rk-tooltip__bubble {
    transition: none;
  }
}
</style>
