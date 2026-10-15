<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value: number
    max?: number
    label?: string
  }>(),
  { max: 100 }
)

const percent = computed(() => Math.min(100, Math.max(0, (props.value / props.max) * 100)))
</script>

<template>
  <div class="rk-progress">
    <div v-if="label" class="rk-progress__label">
      <span>{{ label }}</span>
      <span>{{ Math.round(percent) }}%</span>
    </div>
    <div
      class="rk-progress__track"
      role="progressbar"
      :aria-valuenow="value"
      aria-valuemin="0"
      :aria-valuemax="max"
    >
      <div class="rk-progress__fill" :style="{ width: `${percent}%` }" />
    </div>
  </div>
</template>

<style scoped>
.rk-progress {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  font-family: var(--rk-font-sans);
}
.rk-progress__label {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 0.875rem;
  color: var(--rk-fg);
}
.rk-progress__label span:last-child {
  font-family: var(--rk-font-mono);
  font-size: 0.8125rem;
  color: var(--rk-muted);
}
.rk-progress__track {
  width: 100%;
  height: 4px;
  border-radius: var(--rk-radius);
  background: var(--rk-rule);
  overflow: hidden;
}
.rk-progress__fill {
  height: 100%;
  background: var(--rk-accent);
  border-radius: var(--rk-radius);
  transition: width 0.15s var(--rk-ease);
}
</style>
