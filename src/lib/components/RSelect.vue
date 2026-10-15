<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
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

// En onMounted y no en setup: así el componente también se renderiza en servidor (SSR).
onMounted(() => document.addEventListener('click', onClickOutside))
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
  padding: 8px 12px;
  border: 1px solid var(--rk-rule);
  border-radius: var(--rk-radius);
  background: var(--rk-bg);
  color: var(--rk-fg);
  font-family: var(--rk-font-sans);
  font-size: 0.9375rem;
  line-height: 1.5;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s var(--rk-ease);
}
.rk-select__trigger:hover {
  border-color: var(--rk-muted);
}
.rk-select__trigger--open {
  border-color: var(--rk-accent);
}
.rk-select__trigger:focus-visible {
  outline: 2px solid var(--rk-accent);
  outline-offset: 2px;
  border-color: var(--rk-accent);
}
.rk-select__value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rk-select__chevron {
  color: var(--rk-muted);
  flex-shrink: 0;
  transition: transform 0.15s var(--rk-ease);
}
.rk-select__trigger--open .rk-select__chevron {
  transform: rotate(180deg);
}

.rk-select__panel {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 30;
  margin: 0;
  padding: 4px;
  list-style: none;
  background: var(--rk-bg);
  border: 1px solid var(--rk-rule);
  border-radius: var(--rk-radius);
  min-width: 100%;
  width: max-content;
  max-width: min(28rem, calc(100vw - 32px));
  max-height: 240px;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
}
.rk-select__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
  padding: 8px 10px;
  border-radius: var(--rk-radius);
  font-size: 0.9375rem;
  color: var(--rk-fg);
  cursor: pointer;
  transition: background-color 0.12s var(--rk-ease);
}
.rk-select__option-label {
  min-width: 0;
  white-space: normal;
  word-break: break-word;
}
.rk-select__option:hover {
  background: var(--rk-subtle);
}
.rk-select__option--active {
  color: var(--rk-accent);
  font-weight: 600;
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
@media (prefers-reduced-motion: reduce) {
  .rk-select-panel-enter-active,
  .rk-select-panel-leave-active {
    transition: none;
  }
}
</style>
