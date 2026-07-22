<script setup lang="ts">
import RButton from '../../lib/components/RButton.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
</script>

<template>
  <DocSection
    icon="button"
    title="RButton"
    description="Botón con tres variantes visuales y soporte para disabled."
  >
    <RButton variant="primary">Guardar</RButton>
    <RButton variant="secondary">Cancelar</RButton>
    <RButton variant="danger" disabled>Eliminar</RButton>

    <template #code>
<pre><code>&lt;RButton variant="primary"&gt;Guardar&lt;/RButton&gt;
&lt;RButton variant="secondary"&gt;Cancelar&lt;/RButton&gt;
&lt;RButton variant="danger" disabled&gt;Eliminar&lt;/RButton&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'variant', type: `'primary' | 'secondary' | 'danger'`, default: `'primary'`, description: 'Estilo visual del botón.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Desactiva el botón.' },
          { name: 'type', type: `'button' | 'submit' | 'reset'`, default: `'button'`, description: 'Atributo type nativo.' },
        ]"
      />
    </template>
  </DocSection>
</template>
