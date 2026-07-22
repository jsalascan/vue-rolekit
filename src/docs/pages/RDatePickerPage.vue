<script setup lang="ts">
import { ref } from 'vue'
import RDatePicker from '../../lib/components/RDatePicker.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'

const checkin = ref('')
</script>

<template>
  <DocSection
    icon="datepicker"
    title="RDatePicker"
    description="Selector de fecha propio: calendario mensual desplegable, sin depender de <input type='date'> nativo."
  >
    <RDatePicker v-model="checkin" label="Fecha de entrada" />

    <template #code>
<pre><code>&lt;RDatePicker v-model="checkin" label="Fecha de entrada" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'modelValue', type: 'string', description: 'Fecha seleccionada en formato ISO (YYYY-MM-DD), v-model.' },
          { name: 'label', type: 'string', default: 'undefined', description: 'Etiqueta opcional sobre el campo.' },
        ]"
      />
    </template>
  </DocSection>
</template>
