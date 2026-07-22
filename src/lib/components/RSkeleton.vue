<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    width?: string | number
    height?: string | number
    circle?: boolean
  }>(),
  { width: '100%', height: '1rem', circle: false }
)

const style = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  borderRadius: props.circle ? '50%' : 'var(--rk-radius-md)',
}))
</script>

<template>
  <span class="rk-skeleton" :style="style" aria-hidden="true" />
</template>

<style scoped>
.rk-skeleton {
  display: inline-block;
  background: linear-gradient(100deg, var(--rk-paper-2) 30%, var(--rk-paper-3) 50%, var(--rk-paper-2) 70%);
  background-size: 200% 100%;
  animation: rk-skeleton-shimmer 1.4s ease-in-out infinite;
}

@keyframes rk-skeleton-shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .rk-skeleton {
    animation: none;
  }
}
</style>
