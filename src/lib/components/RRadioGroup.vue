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
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border: 2px solid var(--rk-edge);
  border-radius: 50%;
  background: var(--rk-paper-2);
  position: relative;
  transition: border-color 0.15s var(--rk-ease), background-color 0.15s var(--rk-ease);
}
.rk-radio__circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.15s var(--rk-ease);
}
.rk-radio:hover .rk-radio__circle {
  border-color: var(--rk-ink-soft);
}
.rk-radio__input:checked + .rk-radio__circle {
  background: var(--rk-accent);
  border-color: var(--rk-accent);
}
.rk-radio__input:checked + .rk-radio__circle::after {
  transform: translate(-50%, -50%) scale(1);
}
.rk-radio__input:focus-visible + .rk-radio__circle {
  outline: 2px solid var(--rk-ink);
  outline-offset: 2px;
}
.rk-radio:active .rk-radio__circle {
  transform: scale(0.92);
}
.rk-radio__label {
  font-size: 0.9rem;
  color: var(--rk-ink);
}
</style>
