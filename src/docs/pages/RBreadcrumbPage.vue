<script setup lang="ts">
import RBreadcrumb from '../../lib/components/RBreadcrumb.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
import type { BreadcrumbItem } from '../../lib/types'

const items: BreadcrumbItem[] = [
  { label: 'Inicio', to: '#' },
  { label: 'Habitaciones', to: '#' },
  { label: 'Suite Deluxe' },
]
</script>

<template>
  <DocSection
    icon="breadcrumb"
    title="RBreadcrumb"
    description="Ruta de navegación agnóstica de router: usa &lt;a&gt; planas, sin depender de vue-router."
  >
    <RBreadcrumb :items="items" />

    <template #code>
<pre><code>&lt;RBreadcrumb :items="[
  { label: 'Inicio', to: '/' },
  { label: 'Habitaciones', to: '/habitaciones' },
  { label: 'Suite Deluxe' },
]" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'items', type: '{ label: string; to?: string }[]', description: 'Ruta de migas de pan; el último elemento se muestra como actual.' },
        ]"
      />
    </template>
  </DocSection>
</template>
