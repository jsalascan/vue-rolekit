<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 22 }
)
</script>

<template>
  <span
    class="rk-spinner"
    :style="{ width: `${size}px`, height: `${size}px` }"
    role="status"
    aria-label="Cargando"
  />
</template>

<style scoped>
.rk-spinner {
  display: inline-block;
  border-radius: 50%;
  border: 3px solid var(--rk-edge);
  border-top-color: var(--rk-accent);
  animation: rk-spin 0.8s linear infinite;
}

@keyframes rk-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .rk-spinner {
    animation: none;
  }
}
</style>
