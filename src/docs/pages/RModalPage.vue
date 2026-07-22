<script setup lang="ts">
import { ref } from 'vue'
import RButton from '../../lib/components/RButton.vue'
import RModal from '../../lib/components/RModal.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'

const open = ref(false)
</script>

<template>
  <DocSection
    icon="modal"
    title="RModal"
    description="Diálogo modal con overlay, cierre por Escape/click fuera y slot #footer opcional. Usa Teleport a body."
  >
    <RButton variant="primary" @click="open = true">Abrir modal</RButton>

    <RModal v-model="open" title="Confirmar reserva">
      <p>¿Confirmas la reserva de la Suite Deluxe para el 12 de agosto?</p>

      <template #footer>
        <RButton variant="secondary" @click="open = false">Cancelar</RButton>
        <RButton variant="primary" @click="open = false">Confirmar</RButton>
      </template>
    </RModal>

    <template #code>
<pre><code>&lt;RModal v-model="open" title="Confirmar reserva"&gt;
  &lt;p&gt;¿Confirmas la reserva...?&lt;/p&gt;
  &lt;template #footer&gt;
    &lt;RButton variant="secondary" @click="open = false"&gt;Cancelar&lt;/RButton&gt;
    &lt;RButton variant="primary" @click="open = false"&gt;Confirmar&lt;/RButton&gt;
  &lt;/template&gt;
&lt;/RModal&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'modelValue', type: 'boolean', description: 'Visibilidad del modal (v-model).' },
          { name: 'title', type: 'string', default: 'undefined', description: 'Título opcional en la cabecera.' },
        ]"
      />
    </template>
  </DocSection>
</template>
