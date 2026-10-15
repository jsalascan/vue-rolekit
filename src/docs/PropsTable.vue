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
          <th>Defecto</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.name">
          <td><code>{{ row.name }}</code></td>
          <td><code>{{ row.type }}</code></td>
          <td class="props-table__default"><code>{{ row.default ?? '—' }}</code></td>
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
}
.props-table {
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
  font-size: 0.9375rem;
}
.props-table th,
.props-table td {
  padding: 8px 16px 8px 0;
  border-bottom: 1px solid var(--rk-rule);
  text-align: left;
  vertical-align: top;
}
.props-table th {
  font-family: var(--rk-font-mono);
  font-size: 0.8125rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--rk-muted);
}
.props-table code {
  font-family: var(--rk-font-mono);
  font-size: 0.8125rem;
  color: var(--rk-fg);
}
.props-table__default code {
  color: var(--rk-muted);
}
</style>
