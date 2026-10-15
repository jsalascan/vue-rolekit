<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="docs-footer">
    <p class="docs-footer__legal">© {{ year }} Jose Salas · MIT</p>
    <ThemeToggle />
  </footer>
</template>

<style scoped>
.docs-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px 24px;
  padding: 20px 0 32px;
  border-top: 1px solid var(--rk-rule);
  font-size: 0.875rem;
  color: var(--rk-muted);
}
.docs-footer__legal {
  margin: 0;
}
</style>
