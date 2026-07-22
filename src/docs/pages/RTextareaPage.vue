<script setup lang="ts">
import { ref } from 'vue'
import RTextarea from '../../lib/components/RTextarea.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'

const message = ref('')
</script>

<template>
  <DocSection
    icon="textarea"
    title="RTextarea"
    description="Igual que RInput pero para texto multilínea, con altura ajustable."
  >
    <RTextarea v-model="message" label="Mensaje" placeholder="Escribe algo..." />

    <template #code>
<pre><code>&lt;RTextarea v-model="message" label="Mensaje" placeholder="Escribe algo..." /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'modelValue', type: 'string', description: 'Valor del textarea (v-model).' },
          { name: 'label', type: 'string', default: 'undefined', description: 'Etiqueta opcional.' },
          { name: 'placeholder', type: 'string', default: 'undefined', description: 'Placeholder nativo.' },
          { name: 'error', type: 'string', default: 'undefined', description: 'Mensaje de error.' },
          { name: 'rows', type: 'number', default: '4', description: 'Altura inicial en filas.' },
        ]"
      />
    </template>
  </DocSection>
</template>
