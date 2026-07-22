<script setup lang="ts">
import { ref } from 'vue'
import RSelect from '../../lib/components/RSelect.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
import type { SelectOption } from '../../lib/types'

const department = ref('pisos')

const departmentOptions: SelectOption[] = [
  { value: 'recepcion', label: 'Recepción' },
  { value: 'pisos', label: 'Pisos' },
  { value: 'mantenimiento', label: 'Mantenimiento' },
]
</script>

<template>
  <DocSection
    icon="select"
    title="RSelect"
    description="Dropdown propio (sin <select> nativo) para tener control total del estilo: panel flotante, check en la opción activa y navegación con teclado."
  >
    <RSelect v-model="department" :options="departmentOptions" label="Departamento" />

    <template #code>
<pre><code>&lt;RSelect v-model="department" :options="departmentOptions" label="Departamento" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'modelValue', type: 'string', description: 'Valor seleccionado (v-model).' },
          { name: 'options', type: '{ value: string; label: string }[]', description: 'Opciones disponibles.' },
          { name: 'label', type: 'string', default: 'undefined', description: 'Etiqueta opcional sobre el select.' },
        ]"
      />
    </template>
  </DocSection>
</template>
