<script setup lang="ts">
import RAlert from '../../lib/components/RAlert.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
</script>

<template>
  <DocSection
    icon="alert"
    title="RAlert"
    description="Aviso con título opcional y cuatro variantes semánticas."
  >
    <RAlert variant="info" title="Info">Los cambios se guardan automáticamente.</RAlert>
    <RAlert variant="success" title="Hecho">Reserva confirmada.</RAlert>
    <RAlert variant="warning" title="Atención">La sesión caduca en 5 minutos.</RAlert>
    <RAlert variant="danger" title="Error">No se pudo guardar el cambio.</RAlert>

    <template #code>
<pre><code>&lt;RAlert variant="warning" title="Atención"&gt;
  La sesión caduca en 5 minutos.
&lt;/RAlert&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'variant', type: `'info' | 'success' | 'warning' | 'danger'`, default: `'info'`, description: 'Color y énfasis del aviso.' },
          { name: 'title', type: 'string', default: 'undefined', description: 'Título opcional en negrita.' },
        ]"
      />
    </template>
  </DocSection>
</template>
