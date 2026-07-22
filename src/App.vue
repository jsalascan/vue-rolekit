<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { RouterView } from 'vue-router'
import DocsNavbar from './docs/DocsNavbar.vue'
import DocsFooter from './docs/DocsFooter.vue'
import DocsPager from './docs/DocsPager.vue'
import DocsIndexList from './docs/DocsIndexList.vue'

const mobileIndexOpen = ref(false)
function closeMobileIndex() {
  mobileIndexOpen.value = false
}
function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMobileIndex()
}
document.addEventListener('keydown', onKeydown)
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <DocsNavbar
    :index-open="mobileIndexOpen"
    @toggle-index="mobileIndexOpen = !mobileIndexOpen"
    @close-index="closeMobileIndex"
  />

  <div v-if="mobileIndexOpen" class="docs-mobile-index">
    <div class="docs-mobile-index__panel">
      <DocsIndexList @navigate="closeMobileIndex" />
    </div>
  </div>

  <div class="docs-shell">
    <div class="docs-layout">
      <main class="docs-main">
        <RouterView />
        <DocsPager />
      </main>

      <aside class="docs-aside">
        <p class="docs-aside__label">Índice</p>

        <div class="docs-aside__scroll">
          <DocsIndexList />
        </div>
      </aside>
    </div>
  </div>

  <DocsFooter />
</template>

<style>
html {
  scrollbar-width: thin;
  scrollbar-color: var(--rk-edge) var(--rk-paper);
}
html::-webkit-scrollbar {
  width: 10px;
}
html::-webkit-scrollbar-track {
  background: var(--rk-paper);
}
html::-webkit-scrollbar-thumb {
  background: var(--rk-edge);
  border-radius: var(--rk-radius-pill);
  border: 2px solid var(--rk-paper);
}
html::-webkit-scrollbar-thumb:hover {
  background: var(--rk-ink-soft);
}
body {
  margin: 0;
  background: var(--rk-paper);
  color: var(--rk-ink);
  letter-spacing: 0.01em;
}
.docs-shell {
  padding-top: 64px;
}
.docs-mobile-index {
  display: none;
}
.docs-layout {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: 56px;
  align-items: start;
}
.docs-main {
  min-width: 0;
  padding: 48px 0 100px;
  font-family: var(--rk-font-sans);
}

.docs-aside {
  position: sticky;
  top: 88px;
  padding: 48px 0 40px;
}
.docs-aside__scroll {
  max-height: min(58vh, 460px);
  overflow-y: auto;
  padding-right: 6px;
  padding-bottom: 24px;
  mask-image: linear-gradient(to bottom, #000 calc(100% - 24px), transparent 100%);
  scrollbar-width: thin;
  scrollbar-color: var(--rk-edge) transparent;
}
.docs-aside__scroll::-webkit-scrollbar {
  width: 6px;
}
.docs-aside__scroll::-webkit-scrollbar-track {
  background: transparent;
}
.docs-aside__scroll::-webkit-scrollbar-thumb {
  background: var(--rk-edge);
  border-radius: var(--rk-radius-pill);
}
.docs-aside__scroll::-webkit-scrollbar-thumb:hover {
  background: var(--rk-ink-soft);
}
.docs-aside__label {
  font-family: var(--rk-font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--rk-ink-soft);
  margin: 0 0 14px;
}
.docs-aside__category {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--rk-font-mono);
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--rk-accent);
  margin: 18px 0 6px;
}
.docs-aside__category::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--rk-edge);
}
.docs-aside__category:first-of-type {
  margin-top: 0;
}
.docs-aside__nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.docs-aside__link {
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: var(--rk-font-sans);
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--rk-ink-soft);
  text-decoration: none;
  padding: 7px 10px;
  border-radius: var(--rk-radius-md);
  border-left: 3px solid transparent;
  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;
}
.docs-aside__icon {
  color: var(--rk-accent);
  flex-shrink: 0;
}
.docs-aside__link-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.docs-aside__link:hover {
  color: var(--rk-ink);
  background: var(--rk-paper-2);
}
.docs-aside__link.is-active {
  color: var(--rk-accent);
  background: var(--rk-paper-2);
  border-left-color: var(--rk-accent);
}

@media (max-width: 860px) {
  .docs-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .docs-aside {
    display: none;
  }
  .docs-mobile-index {
    display: block;
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    z-index: 40;
    max-height: calc(100vh - 64px);
    overflow-y: auto;
    background: var(--rk-paper);
    border-bottom: 2px solid var(--rk-edge);
    box-shadow: var(--rk-shadow-paper);
  }
  .docs-mobile-index__panel {
    padding: 20px 24px 24px;
  }
}

@media (max-width: 480px) {
  .docs-mobile-index__panel {
    padding-left: 16px;
    padding-right: 16px;
  }
  .docs-layout {
    padding: 0 16px;
  }
}
</style>
