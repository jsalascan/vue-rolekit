<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import type { SelectOption } from '../types'

const props = defineProps<{
  modelValue: string
  options: SelectOption[]
  label?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const open = ref(false)
const rootEl = ref<HTMLElement | null>(null)

const selected = computed(() => props.options.find((opt) => opt.value === props.modelValue))

function toggle() {
  open.value = !open.value
}

function select(value: string) {
  emit('update:modelValue', value)
  open.value = false
}

function onClickOutside(event: MouseEvent) {
  if (rootEl.value && !rootEl.value.contains(event.target as Node)) {
    open.value = false
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    open.value = false
    return
  }
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    toggle()
    return
  }
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    if (!open.value) {
      open.value = true
      return
    }
    const currentIndex = props.options.findIndex((opt) => opt.value === props.modelValue)
    const direction = event.key === 'ArrowDown' ? 1 : -1
    const next =
      props.options[(currentIndex + direction + props.options.length) % props.options.length]
    if (next) emit('update:modelValue', next.value)
  }
}

document.addEventListener('click', onClickOutside)
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
  <div ref="rootEl" class="rk-select">
    <span v-if="label" class="rk-field__label">{{ label }}</span>

    <button
      type="button"
      class="rk-select__trigger"
      :class="{ 'rk-select__trigger--open': open }"
      aria-haspopup="listbox"
      :aria-expanded="open"
      @click="toggle"
      @keydown="onKeydown"
    >
      <span class="rk-select__value">{{ selected?.label ?? '—' }}</span>
      <svg
        class="rk-select__chevron"
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

    <Transition name="rk-select-panel">
      <ul v-if="open" class="rk-select__panel" role="listbox">
        <li
          v-for="opt in options"
          :key="opt.value"
          role="option"
          :aria-selected="opt.value === modelValue"
          class="rk-select__option"
          :class="{ 'rk-select__option--active': opt.value === modelValue }"
          @click="select(opt.value)"
        >
          <span class="rk-select__option-label">{{ opt.label }}</span>
          <svg
            v-if="opt.value === modelValue"
            class="rk-select__check"
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12.5l4.5 4.5L19 7" />
          </svg>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.rk-select {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: var(--rk-font-sans);
}
.rk-select__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  padding: 10px 14px;
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-md);
  background: var(--rk-paper-2);
  color: var(--rk-ink);
  font-family: var(--rk-font-sans);
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s var(--rk-ease), box-shadow 0.15s var(--rk-ease);
}
.rk-select__trigger:hover {
  border-color: var(--rk-ink-soft);
}
.rk-select__trigger--open,
.rk-select__trigger:focus-visible {
  outline: none;
  border-color: var(--rk-ink);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--rk-accent) 25%, transparent);
}
.rk-select__value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rk-select__chevron {
  color: var(--rk-ink-soft);
  flex-shrink: 0;
  transition: transform 0.15s var(--rk-ease);
}
.rk-select__trigger--open .rk-select__chevron {
  transform: rotate(180deg);
}

.rk-select__panel {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 30;
  margin: 0;
  padding: 6px;
  list-style: none;
  background: var(--rk-paper-2);
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-md);
  box-shadow: var(--rk-shadow-paper);
  min-width: 100%;
  width: max-content;
  max-width: min(28rem, calc(100vw - 32px));
  max-height: 240px;
  overflow-x: hidden;
  overflow-y: auto;
}
.rk-select__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
  padding: 9px 10px;
  border-radius: 6px;
  font-size: 0.88rem;
  color: var(--rk-ink);
  cursor: pointer;
  transition: background-color 0.12s ease;
}
.rk-select__option-label {
  min-width: 0;
  white-space: normal;
  word-break: break-word;
}
.rk-select__option:hover {
  background: var(--rk-paper-3);
}
.rk-select__option--active {
  color: var(--rk-accent);
  font-weight: 700;
}
.rk-select__check {
  color: var(--rk-accent);
  flex-shrink: 0;
}

.rk-select-panel-enter-active,
.rk-select-panel-leave-active {
  transition: opacity 0.12s var(--rk-ease), transform 0.12s var(--rk-ease);
}
.rk-select-panel-enter-from,
.rk-select-panel-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
