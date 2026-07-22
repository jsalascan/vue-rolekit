<script setup lang="ts">
import type { AccordionItem } from '../types'

const props = defineProps<{
  modelValue: string[]
  items: AccordionItem[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

function toggle(id: string) {
  const isOpen = props.modelValue.includes(id)
  emit(
    'update:modelValue',
    isOpen ? props.modelValue.filter((i) => i !== id) : [...props.modelValue, id]
  )
}
</script>

<template>
  <div class="rk-accordion">
    <div v-for="item in items" :key="item.id" class="rk-accordion__item">
      <button
        type="button"
        class="rk-accordion__trigger"
        :aria-expanded="modelValue.includes(item.id)"
        @click="toggle(item.id)"
      >
        <span>{{ item.title }}</span>
        <svg
          class="rk-accordion__chevron"
          :class="{ 'rk-accordion__chevron--open': modelValue.includes(item.id) }"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <Transition name="rk-accordion-panel">
        <div v-if="modelValue.includes(item.id)" class="rk-accordion__panel">
          <div class="rk-accordion__panel-inner">
            <slot :name="item.id" />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.rk-accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  font-family: var(--rk-font-sans);
}
.rk-accordion__item {
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-md);
  background: var(--rk-paper-2);
  overflow: hidden;
}
.rk-accordion__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 16px;
  border: none;
  background: none;
  font-family: var(--rk-font-sans);
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--rk-ink);
  cursor: pointer;
  text-align: left;
}
.rk-accordion__chevron {
  color: var(--rk-ink-soft);
  flex-shrink: 0;
  transition: transform 0.15s var(--rk-ease);
}
.rk-accordion__chevron--open {
  transform: rotate(180deg);
}
.rk-accordion__panel-inner {
  padding: 0 16px 14px;
  color: var(--rk-ink-soft);
  font-size: 0.88rem;
  line-height: 1.6;
}
.rk-accordion-panel-enter-active,
.rk-accordion-panel-leave-active {
  transition: opacity 0.12s var(--rk-ease);
}
.rk-accordion-panel-enter-from,
.rk-accordion-panel-leave-to {
  opacity: 0;
}
</style>
