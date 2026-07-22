<script setup lang="ts">
import { ref } from 'vue'
import RRadioGroup from '../../lib/components/RRadioGroup.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
import type { SelectOption } from '../../lib/types'

const plan = ref('mensual')

const planOptions: SelectOption[] = [
  { value: 'mensual', label: 'Mensual' },
  { value: 'anual', label: 'Anual (2 meses gratis)' },
]
</script>

<template>
  <DocSection
    icon="radio"
    title="RRadioGroup"
    description="Grupo de radios con estilo propio a partir de una lista de opciones, hermano de RCheckbox."
  >
    <RRadioGroup v-model="plan" :options="planOptions" label="Plan de facturación" />

    <template #code>
<pre><code>&lt;RRadioGroup v-model="plan" :options="planOptions" label="Plan de facturación" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'modelValue', type: 'string', description: 'Valor seleccionado (v-model).' },
          { name: 'options', type: '{ value: string; label: string }[]', description: 'Opciones disponibles.' },
          { name: 'label', type: 'string', default: 'undefined', description: 'Etiqueta opcional sobre el grupo.' },
        ]"
      />
    </template>
  </DocSection>
</template>
