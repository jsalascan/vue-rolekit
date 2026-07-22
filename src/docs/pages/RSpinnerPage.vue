<script setup lang="ts">
import RSpinner from '../../lib/components/RSpinner.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
</script>

<template>
  <DocSection
    icon="spinner"
    title="RSpinner"
    description="Indicador de carga circular, respeta prefers-reduced-motion."
  >
    <RSpinner />
    <RSpinner :size="32" />

    <template #code>
<pre><code>&lt;RSpinner /&gt;
&lt;RSpinner :size="32" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'size', type: 'number', default: '22', description: 'Diámetro en píxeles.' },
        ]"
      />
    </template>
  </DocSection>
</template>
