<script setup lang="ts">
import { ref } from 'vue'
import RSwitch from '../../lib/components/RSwitch.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'

const notifications = ref(true)
</script>

<template>
  <DocSection
    icon="switch"
    title="RSwitch"
    description="Interruptor on/off, mismo patrón de accesibilidad que RCheckbox."
  >
    <RSwitch v-model="notifications" label="Notificaciones" />

    <template #code>
<pre><code>&lt;RSwitch v-model="notifications" label="Notificaciones" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'modelValue', type: 'boolean', description: 'Estado activado/desactivado (v-model).' },
          { name: 'label', type: 'string', default: 'undefined', description: 'Texto junto al interruptor.' },
        ]"
      />
    </template>
  </DocSection>
</template>
