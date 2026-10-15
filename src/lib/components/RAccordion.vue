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
            <div class="rk-accordion__panel-body">
              <slot :name="item.id" />
            </div>
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
  width: 100%;
  border: 1px solid var(--rk-rule);
  border-radius: var(--rk-radius);
  font-family: var(--rk-font-sans);
}
.rk-accordion__item + .rk-accordion__item {
  border-top: 1px solid var(--rk-rule);
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
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--rk-fg);
  cursor: pointer;
  text-align: left;
}
.rk-accordion__trigger:hover .rk-accordion__chevron {
  color: var(--rk-fg);
}
.rk-accordion__trigger:focus-visible {
  outline: 2px solid var(--rk-accent);
  outline-offset: -2px;
}
.rk-accordion__chevron {
  color: var(--rk-muted);
  flex-shrink: 0;
  transition: transform 0.15s var(--rk-ease), color 0.15s var(--rk-ease);
}
.rk-accordion__chevron--open {
  transform: rotate(180deg);
}
/* El alto se anima con grid-template-rows (0fr ↔ 1fr): el panel se despliega
   y se pliega sin saltos, sin medir alturas en JS. */
.rk-accordion__panel {
  display: grid;
  grid-template-rows: 1fr;
}
.rk-accordion__panel-inner {
  min-height: 0;
  overflow: hidden;
}
.rk-accordion__panel-body {
  padding: 0 16px 14px;
  color: var(--rk-fg);
  font-size: 0.9375rem;
  line-height: 1.6;
}
.rk-accordion-panel-enter-active,
.rk-accordion-panel-leave-active {
  transition: grid-template-rows 0.15s var(--rk-ease);
}
.rk-accordion-panel-enter-from,
.rk-accordion-panel-leave-to {
  grid-template-rows: 0fr;
}
@media (prefers-reduced-motion: reduce) {
  .rk-accordion-panel-enter-active,
  .rk-accordion-panel-leave-active,
  .rk-accordion__chevron {
    transition: none;
  }
}
</style>
