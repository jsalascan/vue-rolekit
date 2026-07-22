<script setup lang="ts">
import { ref } from 'vue'
import RPagination from '../../lib/components/RPagination.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'

const page = ref(4)
</script>

<template>
  <DocSection
    icon="pagination"
    title="RPagination"
    description="Navegación entre páginas con elipsis automática cuando hay muchas."
  >
    <RPagination v-model="page" :page-count="12" />

    <template #code>
<pre><code>&lt;RPagination v-model="page" :page-count="12" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'modelValue', type: 'number', description: 'Página actual (v-model), 1-indexada.' },
          { name: 'pageCount', type: 'number', description: 'Número total de páginas.' },
        ]"
      />
    </template>
  </DocSection>
</template>
