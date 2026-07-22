<script setup lang="ts">
import { ref } from 'vue'
import RInput from '../../lib/components/RInput.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'

const name = ref('')
const email = ref('')
</script>

<template>
  <DocSection
    icon="input"
    title="RInput"
    description="Input con label, v-model y estado de error opcional."
  >
    <RInput v-model="name" label="Nombre" placeholder="Escribe tu nombre" />
    <RInput v-model="email" label="Email" error="Formato inválido" />

    <template #code>
<pre><code>&lt;RInput v-model="name" label="Nombre" placeholder="Escribe tu nombre" /&gt;
&lt;RInput v-model="email" label="Email" error="Formato inválido" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'modelValue', type: 'string', description: 'Valor del input (v-model).' },
          { name: 'label', type: 'string', default: 'undefined', description: 'Etiqueta opcional sobre el input.' },
          { name: 'type', type: 'string', default: `'text'`, description: 'Tipo nativo de input (text, email, password...).' },
          { name: 'placeholder', type: 'string', default: 'undefined', description: 'Placeholder nativo.' },
          { name: 'error', type: 'string', default: 'undefined', description: 'Mensaje de error mostrado bajo el input.' },
        ]"
      />
    </template>
  </DocSection>
</template>
