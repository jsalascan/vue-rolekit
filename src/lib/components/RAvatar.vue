<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    size?: number
  }>(),
  { size: 40 }
)

const initials = computed(() =>
  props.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('')
)
</script>

<template>
  <span
    class="rk-avatar"
    :style="{ width: `${size}px`, height: `${size}px`, fontSize: `${Math.round(size * 0.4)}px` }"
    :title="name"
  >
    {{ initials }}
  </span>
</template>

<style scoped>
.rk-avatar {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--rk-rule);
  background: var(--rk-subtle);
  color: var(--rk-fg);
  font-family: var(--rk-font-sans);
  font-weight: 600;
  flex-shrink: 0;
}
</style>
