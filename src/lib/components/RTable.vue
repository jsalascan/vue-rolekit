<script setup lang="ts">
import type { Column } from '../types'

defineProps<{
  columns: Column[]
  rows: Record<string, unknown>[]
}>()
</script>

<template>
  <div class="rk-table-wrap">
    <table class="rk-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows" :key="i">
          <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.rk-table-wrap {
  width: 100%;
  overflow-x: auto;
}
.rk-table {
  width: 100%;
  min-width: max-content;
  border-collapse: collapse;
  font-family: var(--rk-font-sans);
  font-size: 0.9375rem;
  color: var(--rk-fg);
}
.rk-table th,
.rk-table td {
  padding: 8px 12px;
  text-align: left;
  border-bottom: 1px solid var(--rk-rule);
}
.rk-table th {
  font-family: var(--rk-font-mono);
  font-size: 0.8125rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--rk-muted);
}
.rk-table tbody tr {
  transition: background-color 0.15s var(--rk-ease);
}
.rk-table tbody tr:hover {
  background: var(--rk-subtle);
}
</style>
