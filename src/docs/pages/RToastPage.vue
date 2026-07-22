<script setup lang="ts">
import RButton from '../../lib/components/RButton.vue'
import RToast from '../../lib/components/RToast.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
import { useToast } from '../../lib/composables/useToast'

const { show } = useToast()
</script>

<template>
  <DocSection
    icon="toast"
    title="RToast"
    description="Notificaciones flotantes vía composable useToast(). Monta <RToast /> una vez en la raíz de tu app y llama a show() desde cualquier componente."
  >
    <RButton variant="primary" @click="show('Reserva guardada correctamente.', { variant: 'success', title: 'Listo' })">
      Mostrar éxito
    </RButton>
    <RButton variant="secondary" @click="show('No se pudo contactar con el servidor.', { variant: 'danger', title: 'Error' })">
      Mostrar error
    </RButton>
    <RToast />

    <template #code>
<pre><code>import { useToast } from 'vue-rolekit'

const { show } = useToast()
show('Reserva guardada correctamente.', { variant: 'success', title: 'Listo' })

&lt;!-- una sola vez, en la raíz de la app --&gt;
&lt;RToast /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'message', type: 'string', description: 'Primer argumento de show(message, options).' },
          { name: 'options.variant', type: `'info' | 'success' | 'warning' | 'danger'`, default: `'info'`, description: 'Color del toast.' },
          { name: 'options.title', type: 'string', default: 'undefined', description: 'Título opcional en negrita.' },
          { name: 'options.duration', type: 'number', default: '4000', description: 'Milisegundos antes de autodesaparecer (0 = no desaparece).' },
        ]"
      />
    </template>
  </DocSection>
</template>
