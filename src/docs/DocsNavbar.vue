<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Icon from './Icon.vue'

defineProps<{ indexOpen: boolean }>()
defineEmits<{ 'toggle-index': []; 'close-index': [] }>()
</script>

<template>
  <header class="rk-navbar">
    <nav class="rk-navbar__inner">
      <div class="rk-navbar__left">
        <button
          type="button"
          class="rk-navbar__menu-btn"
          :aria-expanded="indexOpen"
          aria-label="Índice de componentes"
          @click="$emit('toggle-index')"
        >
          <Icon name="menu" :size="18" />
        </button>
        <RouterLink to="/" class="rk-navbar__logo" @click="$emit('close-index')"
          >vue-rolekit</RouterLink
        >
      </div>
      <div class="rk-navbar__links">
        <a href="https://github.com/jsalascan/vue-rolekit" target="_blank" rel="noopener">
          <Icon name="github" :size="16" />
          GitHub
        </a>
        <a href="https://jsalascan.github.io/miportfolio/" target="_blank" rel="noopener">
          jsalas.can
          <Icon name="external" :size="14" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.rk-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--rk-paper) 85%, transparent);
  backdrop-filter: blur(6px);
  border-bottom: 2px solid var(--rk-edge);
}
.rk-navbar__inner {
  max-width: 1080px;
  margin: 0 auto;
  height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.rk-navbar__left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.rk-navbar__menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-md);
  background: var(--rk-paper-2);
  color: var(--rk-ink-soft);
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.rk-navbar__menu-btn:hover {
  color: var(--rk-ink);
  border-color: var(--rk-ink-soft);
}
.rk-navbar__logo {
  font-family: var(--rk-font-mono);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: var(--rk-ink);
  text-decoration: none;
  font-size: 0.95rem;
}
.rk-navbar__logo:hover {
  color: var(--rk-accent);
}
.rk-navbar__links {
  display: flex;
  gap: 20px;
}
.rk-navbar__links a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--rk-font-sans);
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--rk-ink-soft);
  text-decoration: none;
  transition: color 0.15s ease;
}
.rk-navbar__links a:hover {
  color: var(--rk-ink);
}

@media (max-width: 860px) {
  .rk-navbar__menu-btn {
    display: inline-flex;
  }
}

@media (max-width: 400px) {
  .rk-navbar__inner {
    padding: 0 16px;
  }
  .rk-navbar__links {
    gap: 12px;
  }
}
</style>
