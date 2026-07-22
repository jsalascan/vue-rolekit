<script setup lang="ts">
import RTable from '../../lib/components/RTable.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
import type { Column } from '../../lib/types'

const columns: Column[] = [
  { key: 'name', label: 'Empleado' },
  { key: 'department', label: 'Departamento' },
  { key: 'salary', label: 'Salario' },
]

const rows = [
  { name: 'Ana', department: 'Recepción', salary: '24.000 €' },
  { name: 'Luis', department: 'Mantenimiento', salary: '22.500 €' },
  { name: 'Marta', department: 'Pisos', salary: '21.000 €' },
]
</script>

<template>
  <DocSection icon="table" title="RTable" description="Tabla simple con columnas y filas por props.">
    <RTable :columns="columns" :rows="rows" />

    <template #code>
<pre><code>const columns: Column[] = [
  { key: 'name', label: 'Empleado' },
  { key: 'department', label: 'Departamento' },
  { key: 'salary', label: 'Salario' },
]

const rows = [
  { name: 'Ana', department: 'Recepción', salary: '24.000 €' },
]</code></pre>
<pre><code>&lt;RTable :columns="columns" :rows="rows" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'columns', type: 'Column[]', description: 'key y label de cada columna.' },
          { name: 'rows', type: 'Record<string, unknown>[]', description: 'Filas de datos, indexadas por la key de cada columna.' },
        ]"
      />
    </template>
  </DocSection>
</template>
