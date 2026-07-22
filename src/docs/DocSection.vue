<script setup lang="ts">
import Icon from './Icon.vue'
import type { IconName } from './icon-names'

defineProps<{
  icon: IconName
  title: string
  description?: string
}>()
</script>

<template>
  <section class="doc-section">
    <p class="doc-section__eyebrow">
      <Icon :name="icon" :size="18" class="doc-section__icon" />
      <span class="doc-section__slash">componente //</span>
    </p>
    <h1>{{ title }}</h1>
    <p v-if="description" class="doc-section__desc">{{ description }}</p>

    <div class="doc-section__demo">
      <slot />
    </div>

    <details v-if="$slots.code" class="doc-section__code" open>
      <summary>Código</summary>
      <slot name="code" />
    </details>

    <div v-if="$slots.props" class="doc-section__props">
      <p class="doc-section__props-label">Props</p>
      <slot name="props" />
    </div>
  </section>
</template>

<style scoped>
.doc-section {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.doc-section__eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-family: var(--rk-font-mono);
  color: var(--rk-accent);
}
.doc-section__icon {
  color: var(--rk-accent);
}
.doc-section__slash {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.doc-section h1 {
  font-family: var(--rk-font-mono);
  font-size: 1.7rem;
  font-weight: 700;
  margin: 0;
  color: var(--rk-ink);
}
.doc-section__desc {
  font-family: var(--rk-font-sans);
  color: var(--rk-ink-soft);
  margin: 0;
  max-width: 60ch;
  line-height: 1.6;
}
.doc-section__demo {
  padding: 28px;
  border: 2px dashed var(--rk-edge);
  border-radius: var(--rk-radius-lg);
  background: var(--rk-paper);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
}
.doc-section__code {
  font-size: 0.85rem;
  font-family: var(--rk-font-sans);
}
.doc-section__code summary {
  cursor: pointer;
  font-family: var(--rk-font-mono);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: var(--rk-ink-soft);
}
.doc-section__code summary:hover {
  color: var(--rk-accent);
}
.doc-section__code :deep(pre) {
  background: var(--rk-ink);
  color: var(--rk-paper);
  padding: 16px 18px;
  border-radius: var(--rk-radius-md);
  overflow-x: auto;
  margin-top: 10px;
  font-family: var(--rk-font-mono);
  font-size: 0.8rem;
  line-height: 1.6;
}
.doc-section__props-label {
  font-family: var(--rk-font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--rk-ink-soft);
  margin: 0 0 10px;
}

@media (max-width: 480px) {
  .doc-section__demo {
    padding: 18px;
  }
}
</style>
