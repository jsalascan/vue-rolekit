<script setup lang="ts">
import { ref } from 'vue'
import RAccordion from '../../lib/components/RAccordion.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
import type { AccordionItem } from '../../lib/types'

const openItems = ref(['horario'])

const items: AccordionItem[] = [
  { id: 'horario', title: '¿Cuál es el horario de check-in?' },
  { id: 'mascotas', title: '¿Se admiten mascotas?' },
  { id: 'cancelacion', title: '¿Cuál es la política de cancelación?' },
]
</script>

<template>
  <DocSection
    icon="accordion"
    title="RAccordion"
    description="Paneles colapsables independientes; varios pueden estar abiertos a la vez (modelValue es un array de ids)."
  >
    <RAccordion v-model="openItems" :items="items" style="width: 100%">
      <template #horario>El check-in es a partir de las 15:00 y el check-out hasta las 12:00.</template>
      <template #mascotas>Sí, se admiten mascotas pequeñas con suplemento.</template>
      <template #cancelacion>Cancelación gratuita hasta 48h antes de la llegada.</template>
    </RAccordion>

    <template #code>
<pre><code>&lt;RAccordion v-model="openItems" :items="items"&gt;
  &lt;template #horario&gt;...&lt;/template&gt;
  &lt;template #mascotas&gt;...&lt;/template&gt;
  &lt;template #cancelacion&gt;...&lt;/template&gt;
&lt;/RAccordion&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'modelValue', type: 'string[]', description: 'Ids de los paneles abiertos (v-model).' },
          { name: 'items', type: '{ id: string; title: string }[]', description: 'Paneles disponibles.' },
        ]"
      />
    </template>
  </DocSection>
</template>
