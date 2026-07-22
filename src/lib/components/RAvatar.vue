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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--rk-ink);
  color: var(--rk-paper);
  font-family: var(--rk-font-mono);
  font-weight: 700;
  flex-shrink: 0;
}
</style>
