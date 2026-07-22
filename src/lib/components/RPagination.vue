<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: number
  pageCount: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const pages = computed(() => {
  const total = props.pageCount
  const current = props.modelValue
  const delta = 1
  const range: (number | '…')[] = []
  const start = Math.max(2, current - delta)
  const end = Math.min(total - 1, current + delta)

  range.push(1)
  if (start > 2) range.push('…')
  for (let i = start; i <= end; i++) range.push(i)
  if (end < total - 1) range.push('…')
  if (total > 1) range.push(total)

  return range
})

function go(page: number) {
  if (page < 1 || page > props.pageCount || page === props.modelValue) return
  emit('update:modelValue', page)
}
</script>

<template>
  <nav class="rk-pagination" aria-label="Paginación">
    <button
      type="button"
      class="rk-pagination__btn"
      :disabled="modelValue <= 1"
      aria-label="Página anterior"
      @click="go(modelValue - 1)"
    >
      ‹
    </button>

    <template v-for="(page, i) in pages" :key="`${page}-${i}`">
      <span v-if="page === '…'" class="rk-pagination__ellipsis">…</span>
      <button
        v-else
        type="button"
        class="rk-pagination__btn"
        :class="{ 'rk-pagination__btn--active': page === modelValue }"
        :aria-current="page === modelValue ? 'page' : undefined"
        @click="go(page)"
      >
        {{ page }}
      </button>
    </template>

    <button
      type="button"
      class="rk-pagination__btn"
      :disabled="modelValue >= pageCount"
      aria-label="Página siguiente"
      @click="go(modelValue + 1)"
    >
      ›
    </button>
  </nav>
</template>

<style scoped>
.rk-pagination {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--rk-font-sans);
}
.rk-pagination__btn {
  min-width: 34px;
  height: 34px;
  padding: 0 8px;
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-md);
  background: var(--rk-paper-2);
  color: var(--rk-ink);
  font-family: var(--rk-font-sans);
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: border-color 0.15s var(--rk-ease), background-color 0.15s var(--rk-ease),
    color 0.15s var(--rk-ease);
}
.rk-pagination__btn:hover:not(:disabled) {
  border-color: var(--rk-ink-soft);
}
.rk-pagination__btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.rk-pagination__btn--active {
  background: var(--rk-accent);
  border-color: var(--rk-accent);
  color: #fff;
}
.rk-pagination__ellipsis {
  padding: 0 4px;
  color: var(--rk-ink-soft);
  font-family: var(--rk-font-mono);
}
</style>
