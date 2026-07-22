<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="rk-footer">
    <div class="rk-footer__inner">
      <p class="rk-footer__quote">
        <span class="rk-footer__slash">// </span>Cógelo, rómpelo, hazlo tuyo.
      </p>
      <p class="rk-footer__credit">
        © {{ year }} Jose Salas · Hecho con
        <a href="https://vuejs.org" target="_blank" rel="noopener">Vue</a>
        &amp;
        <a href="https://vite.dev" target="_blank" rel="noopener">Vite</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.rk-footer {
  border-top: 2px solid var(--rk-edge);
  padding: 32px 24px;
}
.rk-footer__inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.rk-footer__quote {
  font-family: var(--rk-font-mono);
  font-size: 0.85rem;
  color: var(--rk-ink-soft);
  margin: 0;
}
.rk-footer__slash {
  color: var(--rk-edge);
}
.rk-footer__credit {
  font-family: var(--rk-font-sans);
  font-size: 0.75rem;
  color: var(--rk-ink-soft);
  opacity: 0.85;
  margin: 0;
}
.rk-footer__credit a {
  color: var(--rk-ink-soft);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.rk-footer__credit a:hover {
  color: var(--rk-accent);
}

@media (max-width: 640px) {
  .rk-footer__inner {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 20px;
  }
}
</style>
