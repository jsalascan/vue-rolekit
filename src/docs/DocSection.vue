<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { findNavItemForRoute } from './nav-data'
import { usePageHead } from './seo'

const route = useRoute()
const item = computed(() => findNavItemForRoute(route.name, route.path))

usePageHead(() => ({
  title: `${item.value?.label ?? ''} · vue-rolekit`,
  description: item.value?.description ?? '',
  path: item.value?.path ?? route.path,
}))
</script>

<template>
  <article class="doc">
    <header class="doc__header">
      <h1 class="doc__title">{{ item?.label }}</h1>
      <p v-if="item" class="doc__desc">{{ item.description }}</p>
    </header>

    <section class="doc__block" aria-labelledby="doc-ejemplo">
      <h2 id="doc-ejemplo" class="rotulo">Ejemplo</h2>
      <div class="doc__demo">
        <slot />
      </div>
    </section>

    <section v-if="$slots.code" class="doc__block" aria-labelledby="doc-codigo">
      <h2 id="doc-codigo" class="rotulo">Código</h2>
      <div class="doc__code">
        <slot name="code" />
      </div>
    </section>

    <section v-if="$slots.props" class="doc__block" aria-labelledby="doc-props">
      <h2 id="doc-props" class="rotulo">Props</h2>
      <slot name="props" />
    </section>
  </article>
</template>

<style scoped>
.doc__header {
  margin-bottom: 32px;
}
.doc__title {
  margin: 0 0 6px;
  font-size: 1.75rem;
  line-height: 1.25;
  font-weight: 600;
}
.doc__desc {
  margin: 0;
  max-width: 65ch;
  color: var(--rk-muted);
}
.doc__block {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px 0;
  border-top: 1px solid var(--rk-rule);
}
.doc__demo {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
  padding: 24px;
  border: 1px solid var(--rk-rule);
  border-radius: var(--rk-radius);
}
.doc__code :deep(pre) {
  margin: 0;
  padding: 14px 16px;
  background: var(--rk-subtle);
  border: 1px solid var(--rk-rule);
  border-radius: var(--rk-radius);
  overflow-x: auto;
  font-family: var(--rk-font-mono);
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--rk-fg);
}
.doc__code :deep(code) {
  font-size: inherit;
}

@media (max-width: 479px) {
  .doc__demo {
    padding: 16px;
  }
}
</style>
