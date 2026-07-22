<script setup lang="ts">
import RButton from '../../lib/components/RButton.vue'
import RTooltip from '../../lib/components/RTooltip.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
</script>

<template>
  <DocSection
    icon="tooltip"
    title="RTooltip"
    description="Tooltip en CSS puro (sin librería de posicionamiento) que envuelve cualquier contenido."
  >
    <RTooltip text="Esto es un tooltip">
      <RButton variant="secondary">
        <span class="tooltip-demo__mouse">Pasa el ratón por aquí</span>
        <span class="tooltip-demo__touch">Toca aquí</span>
      </RButton>
    </RTooltip>

    <template #code>
<pre><code>&lt;RTooltip text="Esto es un tooltip"&gt;
  &lt;RButton variant="secondary"&gt;Pasa el ratón por aquí&lt;/RButton&gt;
&lt;/RTooltip&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'text', type: 'string', description: 'Texto mostrado en el tooltip.' },
        ]"
      />
    </template>
  </DocSection>
</template>

<style scoped>
.tooltip-demo__touch {
  display: none;
}
@media (hover: none) {
  .tooltip-demo__mouse {
    display: none;
  }
  .tooltip-demo__touch {
    display: inline;
  }
}
</style>
