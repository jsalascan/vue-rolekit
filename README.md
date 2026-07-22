# vue-rolekit

Kit de componentes Vue 3: botón, input, textarea, select, checkbox, switch, tabla, badge, card, avatar, alert, spinner y tooltip. Todo con estilo propio, sin apoyarse en controles nativos del navegador.

## Instalación

```bash
pnpm add vue-rolekit
```

## Uso básico

```vue
<script setup lang="ts">
import { RButton, RInput, RTable, type Column } from 'vue-rolekit'
import 'vue-rolekit/dist/vue-rolekit.css'
import { ref } from 'vue'

const name = ref('')

const columns: Column[] = [
  { key: 'name', label: 'Nombre' },
  { key: 'salary', label: 'Salario' },
]

const rows = [{ name: 'Ana', salary: '24.000 €' }]
</script>

<template>
  <RInput v-model="name" label="Nombre" />
  <RButton variant="primary">Guardar</RButton>
  <RTable :columns="columns" :rows="rows" />
</template>
```

## Componentes

- **`RButton`** — botón con variantes `primary` / `secondary` / `danger`.
- **`RInput`** — input con label, `v-model` y estado de error.
- **`RTextarea`** — igual que `RInput` pero multilínea.
- **`RSelect`** — dropdown propio (panel flotante, check en la opción activa, navegación con teclado).
- **`RCheckbox`** — checkbox.
- **`RSwitch`** — interruptor on/off.
- **`RTable`** — tabla simple a partir de `columns` y `rows`.
- **`RBadge`** — etiqueta de estado (`default` / `success` / `warning` / `danger`).
- **`RCard`** — contenedor con título opcional.
- **`RAvatar`** — círculo con iniciales derivadas del nombre.
- **`RAlert`** — aviso con título opcional y cuatro variantes semánticas.
- **`RSpinner`** — indicador de carga circular.
- **`RTooltip`** — tooltip en CSS puro que envuelve cualquier contenido.

## Desarrollo

```bash
pnpm install
pnpm dev        # playground en http://localhost:5173
pnpm test       # tests con Vitest
pnpm build      # build de la librería (dist/) con tipos incluidos
```
