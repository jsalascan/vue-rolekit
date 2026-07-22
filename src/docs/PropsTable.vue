<script setup lang="ts">
interface PropRow {
  name: string
  type: string
  default?: string
  description: string
}

defineProps<{
  rows: PropRow[]
}>()
</script>

<template>
  <div class="props-table-wrap">
    <table class="props-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Tipo</th>
          <th>Default</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.name">
          <td><code>{{ row.name }}</code></td>
          <td><code>{{ row.type }}</code></td>
          <td><code>{{ row.default ?? '—' }}</code></td>
          <td>{{ row.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.props-table-wrap {
  width: 100%;
  overflow-x: auto;
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-md);
}
.props-table {
  width: 100%;
  min-width: max-content;
  border-collapse: collapse;
  font-size: 0.85rem;
  font-family: var(--rk-font-sans);
  color: var(--rk-ink);
}
.props-table th,
.props-table td {
  border-bottom: 2px solid var(--rk-edge);
  padding: 8px 12px;
  text-align: left;
  vertical-align: top;
}
.props-table tr:last-child td {
  border-bottom: none;
}
.props-table th {
  background: var(--rk-paper-3);
  font-family: var(--rk-font-mono);
  font-weight: 700;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--rk-ink-soft);
}
.props-table td {
  background: var(--rk-paper-2);
}
.props-table code {
  font-family: var(--rk-font-mono);
  font-size: 0.78rem;
  color: var(--rk-accent);
}
</style>
