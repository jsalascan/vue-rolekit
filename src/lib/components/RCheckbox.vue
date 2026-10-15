<script setup lang="ts">
defineProps<{
  modelValue: boolean
  label?: string
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <label class="rk-checkbox">
    <input
      type="checkbox"
      class="rk-checkbox__input"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span class="rk-checkbox__box" aria-hidden="true" />
    <span v-if="label" class="rk-checkbox__label">{{ label }}</span>
  </label>
</template>

<style scoped>
.rk-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-family: var(--rk-font-sans);
}
.rk-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.rk-checkbox__box {
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: 1px solid var(--rk-muted);
  border-radius: var(--rk-radius);
  background: var(--rk-bg);
  position: relative;
  transition: border-color 0.12s var(--rk-ease), background-color 0.12s var(--rk-ease);
}
.rk-checkbox__box::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 9px;
  border: solid var(--rk-on-accent);
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -60%) rotate(45deg);
  opacity: 0;
  transition: opacity 0.12s var(--rk-ease);
}
.rk-checkbox:hover .rk-checkbox__box {
  border-color: var(--rk-fg);
}
.rk-checkbox__input:checked + .rk-checkbox__box {
  background: var(--rk-accent);
  border-color: var(--rk-accent);
}
.rk-checkbox__input:checked + .rk-checkbox__box::after {
  opacity: 1;
}
.rk-checkbox__input:focus-visible + .rk-checkbox__box {
  outline: 2px solid var(--rk-accent);
  outline-offset: 2px;
}
.rk-checkbox__label {
  font-size: 0.9375rem;
  color: var(--rk-fg);
}
</style>
