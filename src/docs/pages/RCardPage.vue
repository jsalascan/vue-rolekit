<script setup lang="ts">
import RCard from '../../lib/components/RCard.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
</script>

<template>
  <DocSection
    icon="card"
    title="RCard"
    description="Contenedor simple con título opcional para agrupar contenido."
  >
    <RCard title="Reserva #482">
      Check-in 12 mar · Check-out 15 mar · Habitación 204.
    </RCard>

    <template #code>
<pre><code>&lt;RCard title="Reserva #482"&gt;
  Check-in 12 mar · Check-out 15 mar · Habitación 204.
&lt;/RCard&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'title', type: 'string', default: 'undefined', description: 'Título opcional de la card.' },
        ]"
      />
    </template>
  </DocSection>
</template>
