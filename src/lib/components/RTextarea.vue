<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: string
    label?: string
    placeholder?: string
    error?: string
    rows?: number
  }>(),
  { rows: 4 }
)

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <label class="rk-field">
    <span v-if="label" class="rk-field__label">{{ label }}</span>
    <textarea
      :rows="rows"
      :value="modelValue"
      :placeholder="placeholder"
      class="rk-field__textarea"
      :class="{ 'rk-field__input--error': error }"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <span v-if="error" class="rk-field__error">{{ error }}</span>
  </label>
</template>
