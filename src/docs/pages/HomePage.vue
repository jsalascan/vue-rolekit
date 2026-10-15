<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { categories } from '../nav-data'
import { usePageHead } from '../seo'

usePageHead(() => ({
  title: 'vue-rolekit · componentes Vue 3',
  description:
    'Componentes Vue 3 con estilo propio, modo claro y oscuro: formularios, datos, navegación ...',
  ogDescription: 'Componentes Vue 3 con estilo propio, modo claro y oscuro.',
  path: '/',
}))
</script>

<template>
  <article class="home">
    <header>
      <h1 class="home__title">vue-rolekit</h1>
      <p class="home__lead">
        Componentes Vue 3 con estilo propio: formularios, datos, navegación y feedback. Tipados
        con TypeScript, sin dependencias de CSS externas y con modo claro y oscuro.
      </p>
    </header>

    <dl class="home__facts">
      <dt>Instalación</dt>
      <dd><pre class="code-block"><code>pnpm add vue-rolekit</code></pre></dd>

      <dt>Uso</dt>
      <dd>
        <pre class="code-block"><code>&lt;script setup&gt;
import { RButton, RInput } from 'vue-rolekit'
import 'vue-rolekit/dist/vue-rolekit.css'
&lt;/script&gt;

&lt;template&gt;
  &lt;RInput label="Nombre" /&gt;
  &lt;RButton variant="primary"&gt;Guardar&lt;/RButton&gt;
&lt;/template&gt;</code></pre>
      </dd>

      <dt>Requisitos</dt>
      <dd><code>vue ^3.4</code></dd>

      <dt>Licencia</dt>
      <dd>MIT</dd>
    </dl>

    <section class="home__components" aria-labelledby="home-componentes">
      <h2 id="home-componentes" class="rotulo">Componentes</h2>
      <div v-for="cat in categories" :key="cat.name" class="home__category">
        <h3 class="home__category-name">{{ cat.name }}</h3>
        <ul class="home__list">
          <li v-for="item in cat.items" :key="item.id" class="home__item">
            <RouterLink :to="item.path" class="enlace home__item-name">{{ item.label }}</RouterLink>
            <span class="home__item-desc">{{ item.description }}</span>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<style scoped>
.home__title {
  margin: 0 0 8px;
  font-size: 1.75rem;
  line-height: 1.25;
  font-weight: 600;
}
.home__lead {
  margin: 0;
  max-width: 65ch;
}
.home__facts {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 16px 24px;
  margin: 32px 0 0;
  padding: 28px 0;
  border-top: 1px solid var(--rk-rule);
}
.home__facts dt {
  font-family: var(--rk-font-mono);
  font-size: 0.875rem;
  color: var(--rk-muted);
  padding-top: 2px;
}
.home__facts dd {
  margin: 0;
  min-width: 0;
}
.home__components {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 28px;
  border-top: 1px solid var(--rk-rule);
}
.home__category-name {
  margin: 16px 0 6px;
  font-size: 1rem;
  font-weight: 600;
}
.home__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.home__item {
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr);
  gap: 16px;
  padding: 6px 0;
  border-bottom: 1px solid var(--rk-rule);
}
.home__item-name {
  font-family: var(--rk-font-mono);
  font-size: 0.9375rem;
}
.home__item-desc {
  color: var(--rk-muted);
  font-size: 0.9375rem;
}

@media (max-width: 639px) {
  .home__facts,
  .home__item {
    grid-template-columns: 1fr;
    gap: 4px;
  }
  .home__facts dd {
    margin-bottom: 12px;
  }
}
</style>
