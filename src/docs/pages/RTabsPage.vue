<script setup lang="ts">
import { ref } from 'vue'
import RTabs from '../../lib/components/RTabs.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
import type { TabItem } from '../../lib/types'

const active = ref('recepcion')

const tabs: TabItem[] = [
  { value: 'recepcion', label: 'Recepción' },
  { value: 'pisos', label: 'Pisos' },
  { value: 'mantenimiento', label: 'Mantenimiento' },
]
</script>

<template>
  <DocSection
    icon="tabs"
    title="RTabs"
    description="Pestañas con navegación por teclado y panel por slot con nombre dinámico."
  >
    <RTabs v-model="active" :tabs="tabs" style="width: 100%">
      <template #recepcion>Turno de recepción: 08:00 – 16:00.</template>
      <template #pisos>Turno de pisos: 09:00 – 15:00.</template>
      <template #mantenimiento>Turno de mantenimiento: bajo demanda.</template>
    </RTabs>
    <p class="tabs-hint">Con una pestaña enfocada, usa ← → para moverte entre ellas.</p>

    <template #code>
<pre><code>&lt;RTabs v-model="active" :tabs="tabs"&gt;
  &lt;template #recepcion&gt;...&lt;/template&gt;
  &lt;template #pisos&gt;...&lt;/template&gt;
  &lt;template #mantenimiento&gt;...&lt;/template&gt;
&lt;/RTabs&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'modelValue', type: 'string', description: 'Valor de la pestaña activa (v-model).' },
          { name: 'tabs', type: '{ value: string; label: string }[]', description: 'Pestañas disponibles.' },
        ]"
      />
    </template>
  </DocSection>
</template>

<style scoped>
.tabs-hint {
  width: 100%;
  margin: 0;
  font-family: var(--rk-font-mono);
  font-size: 0.75rem;
  color: var(--rk-ink-soft);
}
@media (hover: none) {
  .tabs-hint {
    display: none;
  }
}
</style>
