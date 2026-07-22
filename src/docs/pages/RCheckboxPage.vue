<script setup lang="ts">
import { ref } from 'vue'
import RCheckbox from '../../lib/components/RCheckbox.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'

const accepted = ref(false)
</script>

<template>
  <DocSection
    icon="checkbox"
    title="RCheckbox"
    description="Checkbox con estilo propio (accesible, usa un input nativo oculto por debajo)."
  >
    <RCheckbox v-model="accepted" label="Acepto los términos" />

    <template #code>
<pre><code>&lt;RCheckbox v-model="accepted" label="Acepto los términos" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'modelValue', type: 'boolean', description: 'Estado marcado/desmarcado (v-model).' },
          { name: 'label', type: 'string', default: 'undefined', description: 'Texto junto a la casilla.' },
        ]"
      />
    </template>
  </DocSection>
</template>
