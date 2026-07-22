<script setup lang="ts">
import RProgressBar from '../../lib/components/RProgressBar.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
</script>

<template>
  <DocSection
    icon="progress"
    title="RProgressBar"
    description="Barra de progreso lineal con etiqueta opcional y porcentaje."
  >
    <RProgressBar :value="35" label="Ocupación" style="width: 260px; max-width: 100%" />

    <template #code>
<pre><code>&lt;RProgressBar :value="35" label="Ocupación" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'value', type: 'number', description: 'Valor actual del progreso.' },
          { name: 'max', type: 'number', default: '100', description: 'Valor máximo del progreso.' },
          { name: 'label', type: 'string', default: 'undefined', description: 'Etiqueta opcional sobre la barra.' },
        ]"
      />
    </template>
  </DocSection>
</template>
