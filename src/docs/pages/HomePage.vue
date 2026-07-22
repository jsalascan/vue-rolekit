<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Icon from '../Icon.vue'
import { categories, navItems } from '../nav-data'
</script>

<template>
  <div class="home">
    <header class="home__header">
      <h1>vue-rolekit</h1>
      <p class="home__lead">
        Kit de componentes Vue 3: botones, campos, tablas, feedback, navegación... todos con
        estilo propio, sin apoyarse en controles nativos del navegador.
      </p>

      <ul class="home__features">
        <li><Icon name="button" :size="16" /> {{ navItems.length }} componentes</li>
        <li><Icon name="badge" :size="16" /> TypeScript incluido</li>
        <li><Icon name="card" :size="16" /> sin frameworks CSS de terceros</li>
      </ul>
    </header>

    <section class="home__guide">
      <div class="home__guide-block">
        <p class="home__guide-label">Instalación</p>
        <pre class="home__code"><code>pnpm add vue-rolekit</code></pre>
      </div>

      <div class="home__guide-block">
        <p class="home__guide-label">Uso básico</p>
        <pre class="home__code"><code>&lt;script setup&gt;
import { RButton, RInput } from 'vue-rolekit'
import 'vue-rolekit/dist/vue-rolekit.css'
&lt;/script&gt;

&lt;template&gt;
  &lt;RInput label="Nombre" /&gt;
  &lt;RButton variant="primary"&gt;Guardar&lt;/RButton&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <p class="home__index-label">Explora cada componente en el índice de abajo ↓</p>

    <section v-for="cat in categories" :key="cat.name" class="home__category">
      <p class="home__category-label">{{ cat.name }}</p>
      <div class="home__grid">
        <RouterLink v-for="item in cat.items" :key="item.id" :to="item.path" class="home__card">
          <Icon :name="item.icon" :size="20" class="home__card-icon" />
          <span class="home__card-label">{{ item.label }}</span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.home__header h1 {
  font-family: var(--rk-font-mono);
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin: 0 0 10px;
  color: var(--rk-ink);
}
.home__lead {
  color: var(--rk-ink-soft);
  line-height: 1.6;
  max-width: 62ch;
  margin: 0 0 18px;
}
.home__lead code {
  font-family: var(--rk-font-mono);
  background: var(--rk-paper-2);
  border: 1px solid var(--rk-edge);
  border-radius: 4px;
  padding: 1px 5px;
  font-size: 0.9em;
  color: var(--rk-ink);
}
.home__features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.home__features li {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-pill);
  background: var(--rk-paper-2);
  color: var(--rk-ink-soft);
  font-size: 0.8rem;
  font-weight: 700;
}
.home__features :deep(svg) {
  color: var(--rk-accent);
}
.home__guide {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.home__guide-label {
  font-family: var(--rk-font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--rk-accent);
  margin: 0 0 10px;
}
.home__code {
  background: var(--rk-ink);
  color: var(--rk-paper);
  padding: 16px 18px;
  border-radius: var(--rk-radius-md);
  overflow-x: auto;
  margin: 0;
  font-family: var(--rk-font-mono);
  font-size: 0.8rem;
  line-height: 1.6;
}
.home__index-label {
  font-family: var(--rk-font-mono);
  font-size: 0.85rem;
  color: var(--rk-ink-soft);
  margin: 0;
  border-top: 2px dashed var(--rk-edge);
  padding-top: 24px;
}
.home__category-label {
  font-family: var(--rk-font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--rk-accent);
  margin: 0 0 14px;
}
.home__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 14px;
}
.home__card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px;
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-md);
  background: var(--rk-paper-2);
  color: var(--rk-ink);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: var(--rk-shadow-paper-sm);
  transition: border-color 0.15s var(--rk-ease), transform 0.15s var(--rk-ease),
    box-shadow 0.15s var(--rk-ease);
}
.home__card:hover {
  border-color: var(--rk-ink);
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0 var(--rk-edge);
}
.home__card-icon {
  color: var(--rk-accent);
  flex-shrink: 0;
}
</style>
