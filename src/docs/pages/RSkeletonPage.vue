<script setup lang="ts">
import RSkeleton from '../../lib/components/RSkeleton.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
</script>

<template>
  <DocSection
    icon="skeleton"
    title="RSkeleton"
    description="Placeholder de carga con efecto shimmer, para avatares, líneas de texto o bloques."
  >
    <div style="display: flex; align-items: center; gap: 12px">
      <RSkeleton :width="40" :height="40" circle />
      <div style="display: flex; flex-direction: column; gap: 8px">
        <RSkeleton width="160px" height="0.9rem" />
        <RSkeleton width="110px" height="0.75rem" />
      </div>
    </div>

    <template #code>
<pre><code>&lt;RSkeleton :width="40" :height="40" circle /&gt;
&lt;RSkeleton width="160px" height="0.9rem" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'width', type: 'string | number', default: `'100%'`, description: 'Ancho del bloque.' },
          { name: 'height', type: 'string | number', default: `'1rem'`, description: 'Alto del bloque.' },
          { name: 'circle', type: 'boolean', default: 'false', description: 'Renderiza como círculo (para avatares).' },
        ]"
      />
    </template>
  </DocSection>
</template>
