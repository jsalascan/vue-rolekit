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
  <label class="rk-switch">
    <input
      type="checkbox"
      class="rk-switch__input"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span class="rk-switch__track" aria-hidden="true">
      <span class="rk-switch__thumb" />
    </span>
    <span v-if="label" class="rk-switch__label">{{ label }}</span>
  </label>
</template>

<style scoped>
.rk-switch {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-family: var(--rk-font-sans);
}
.rk-switch__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.rk-switch__track {
  box-sizing: border-box;
  width: 42px;
  height: 24px;
  flex-shrink: 0;
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-pill);
  background: var(--rk-paper-2);
  position: relative;
  transition: border-color 0.15s var(--rk-ease), background-color 0.15s var(--rk-ease);
}
.rk-switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--rk-ink-soft);
  transition: transform 0.15s var(--rk-ease), background-color 0.15s var(--rk-ease);
}
.rk-switch:hover .rk-switch__track {
  border-color: var(--rk-ink-soft);
}
.rk-switch__input:checked + .rk-switch__track {
  background: var(--rk-accent);
  border-color: var(--rk-accent);
}
.rk-switch__input:checked + .rk-switch__track .rk-switch__thumb {
  transform: translateX(18px);
  background: #fff;
}
.rk-switch__input:focus-visible + .rk-switch__track {
  outline: 2px solid var(--rk-ink);
  outline-offset: 2px;
}
.rk-switch__label {
  font-size: 0.9rem;
  color: var(--rk-ink);
}
</style>
