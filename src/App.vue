<script setup lang="ts">
import { RouterView } from 'vue-router'
import DocsSidebar from './docs/DocsSidebar.vue'
import DocsPager from './docs/DocsPager.vue'
import DocsFooter from './docs/DocsFooter.vue'
</script>

<template>
  <div class="docs-layout">
    <DocsSidebar />
    <div class="docs-content">
      <main class="docs-main">
        <RouterView />
        <DocsPager />
      </main>
      <DocsFooter />
    </div>
  </div>
</template>

<style>
.docs-layout {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}
.docs-content {
  min-width: 0;
}
.docs-main {
  padding: 32px 0 64px;
}

@media (min-width: 1024px) {
  .docs-layout {
    display: grid;
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 56px;
  }
  .docs-main {
    padding: 64px 0 80px;
  }
}

@media (max-width: 479px) {
  .docs-layout {
    padding: 0 16px;
  }
}
</style>
