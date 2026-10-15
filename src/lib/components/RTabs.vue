<script setup lang="ts">
import type { TabItem } from '../types'

const props = defineProps<{
  modelValue: string
  tabs: TabItem[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

function selectTab(value: string) {
  emit('update:modelValue', value)
}

function onKeydown(event: KeyboardEvent) {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
  event.preventDefault()
  const idx = props.tabs.findIndex((t) => t.value === props.modelValue)
  const dir = event.key === 'ArrowRight' ? 1 : -1
  const next = props.tabs[(idx + dir + props.tabs.length) % props.tabs.length]
  if (next) emit('update:modelValue', next.value)
}
</script>

<template>
  <div class="rk-tabs">
    <div class="rk-tabs__list" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        type="button"
        role="tab"
        class="rk-tabs__tab"
        :class="{ 'rk-tabs__tab--active': tab.value === modelValue }"
        :aria-selected="tab.value === modelValue"
        @click="selectTab(tab.value)"
        @keydown="onKeydown"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="rk-tabs__panel" role="tabpanel">
      <slot :name="modelValue" />
    </div>
  </div>
</template>

<style scoped>
.rk-tabs {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  font-family: var(--rk-font-sans);
}
.rk-tabs__list {
  display: flex;
  border-bottom: 1px solid var(--rk-rule);
}
.rk-tabs__tab {
  padding: 8px 12px;
  border: none;
  background: none;
  font-family: var(--rk-font-sans);
  font-size: 0.9375rem;
  color: var(--rk-muted);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: color 0.15s var(--rk-ease), border-color 0.15s var(--rk-ease);
}
.rk-tabs__tab:hover {
  color: var(--rk-fg);
}
.rk-tabs__tab--active,
.rk-tabs__tab--active:hover {
  color: var(--rk-accent);
  border-bottom-color: var(--rk-accent);
}
.rk-tabs__tab:focus-visible {
  outline: 2px solid var(--rk-accent);
  outline-offset: 2px;
}
.rk-tabs__panel {
  color: var(--rk-fg);
}
</style>
