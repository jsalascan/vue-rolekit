<script setup lang="ts">
import RAvatar from '../../lib/components/RAvatar.vue'
import DocSection from '../DocSection.vue'
import PropsTable from '../PropsTable.vue'
</script>

<template>
  <DocSection
    icon="avatar"
    title="RAvatar"
    description="Círculo con las iniciales derivadas del nombre. Sin imágenes que gestionar."
  >
    <RAvatar name="Ana Ruiz" />
    <RAvatar name="Luis Pérez" :size="52" />
    <RAvatar name="Marta" :size="32" />

    <template #code>
<pre><code>&lt;RAvatar name="Ana Ruiz" /&gt;
&lt;RAvatar name="Luis Pérez" :size="52" /&gt;</code></pre>
    </template>

    <template #props>
      <PropsTable
        :rows="[
          { name: 'name', type: 'string', description: 'Nombre completo; se muestran las iniciales.' },
          { name: 'size', type: 'number', default: '40', description: 'Diámetro en píxeles.' },
        ]"
      />
    </template>
  </DocSection>
</template>
