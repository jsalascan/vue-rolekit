<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { THEME_LABEL, applyTheme, currentTheme, nextTheme, type ThemeChoice } from './theme'

// El HTML pre-renderizado sale con «auto»; al montar se lee el tema que ya
// aplicó el script de index.html.
const theme = ref<ThemeChoice>('auto')
onMounted(() => {
  theme.value = currentTheme()
})

function cycle() {
  theme.value = nextTheme(theme.value)
  applyTheme(theme.value)
}
</script>

<template>
  <button type="button" class="theme-toggle" @click="cycle">tema: {{ THEME_LABEL[theme] }}</button>
</template>

<style scoped>
.theme-toggle {
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  color: var(--rk-muted);
  cursor: pointer;
  transition: color 0.15s var(--rk-ease);
}
.theme-toggle:hover {
  color: var(--rk-fg);
}
.theme-toggle:focus-visible {
  outline: 2px solid var(--rk-accent);
  outline-offset: 2px;
}
</style>
