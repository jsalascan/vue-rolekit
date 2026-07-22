<script setup lang="ts">
import RBadge from '../../lib/components/RBadge.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
</script>

<template>
  <DocSection icon="badge" title="RBadge" description="Etiqueta pequeña de estado, cuatro variantes.">
    <RBadge>Nuevo</RBadge>
    <RBadge variant="success">Activo</RBadge>
    <RBadge variant="warning">Pendiente</RBadge>
    <RBadge variant="danger">Error</RBadge>

    <template #code>
<pre><code>&lt;RBadge&gt;Nuevo&lt;/RBadge&gt;
&lt;RBadge variant="success"&gt;Activo&lt;/RBadge&gt;
&lt;RBadge variant="warning"&gt;Pendiente&lt;/RBadge&gt;
&lt;RBadge variant="danger"&gt;Error&lt;/RBadge&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'variant', type: `'default' | 'success' | 'warning' | 'danger'`, default: `'default'`, description: 'Color de la etiqueta.' },
        ]"
      />
    </template>
  </DocSection>
</template>
