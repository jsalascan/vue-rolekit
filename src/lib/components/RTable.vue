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
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-lg);
  overflow-x: auto;
  box-shadow: var(--rk-shadow-paper);
}
.rk-table {
  width: 100%;
  min-width: max-content;
  border-collapse: collapse;
  font-family: var(--rk-font-sans);
  font-size: 0.9rem;
  color: var(--rk-ink);
}
.rk-table th,
.rk-table td {
  padding: 10px 16px;
  text-align: left;
  border-bottom: 2px solid var(--rk-edge);
}
.rk-table tr:last-child td {
  border-bottom: none;
}
.rk-table th {
  font-family: var(--rk-font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--rk-ink-soft);
  background: var(--rk-paper-3);
}
.rk-table tbody tr {
  background: var(--rk-paper-2);
  transition: background-color 0.15s ease;
}
.rk-table tbody tr:hover {
  background: var(--rk-paper);
}
</style>
