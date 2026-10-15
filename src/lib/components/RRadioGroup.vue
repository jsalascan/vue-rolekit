<script setup lang="ts">
import type { SelectOption } from '../types'

defineProps<{
  modelValue: string
  options: SelectOption[]
  label?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <fieldset class="rk-radio-group">
    <legend v-if="label" class="rk-field__label">{{ label }}</legend>
    <label v-for="opt in options" :key="opt.value" class="rk-radio">
      <input
        type="radio"
        class="rk-radio__input"
        :value="opt.value"
        :checked="opt.value === modelValue"
        @change="$emit('update:modelValue', opt.value)"
      />
      <span class="rk-radio__circle" aria-hidden="true" />
      <span class="rk-radio__label">{{ opt.label }}</span>
    </label>
  </fieldset>
</template>

<style scoped>
.rk-radio-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: none;
  padding: 0;
  margin: 0;
  font-family: var(--rk-font-sans);
}
.rk-radio-group legend {
  padding: 0 0 4px;
}
.rk-radio {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: fit-content;
}
.rk-radio__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.rk-radio__circle {
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: 1px solid var(--rk-muted);
  border-radius: 50%;
  background: var(--rk-bg);
  position: relative;
  transition: border-color 0.12s var(--rk-ease), background-color 0.12s var(--rk-ease);
}
.rk-radio__circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--rk-on-accent);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.12s var(--rk-ease);
}
.rk-radio:hover .rk-radio__circle {
  border-color: var(--rk-fg);
}
.rk-radio__input:checked + .rk-radio__circle {
  background: var(--rk-accent);
  border-color: var(--rk-accent);
}
.rk-radio__input:checked + .rk-radio__circle::after {
  opacity: 1;
}
.rk-radio__input:focus-visible + .rk-radio__circle {
  outline: 2px solid var(--rk-accent);
  outline-offset: 2px;
}
.rk-radio__label {
  font-size: 0.9375rem;
  color: var(--rk-fg);
}
</style>
