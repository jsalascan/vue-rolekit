# vue-rolekit

Componentes Vue 3 con estilo propio y modo claro y oscuro: formularios, datos, navegación y feedback. Tipados con TypeScript y sin dependencias de CSS externas.

Documentación y ejemplos: https://jsalascan.github.io/vue-rolekit/

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

**Formulario**: `RButton`, `RInput`, `RTextarea`, `RSelect`, `RCheckbox`, `RSwitch`, `RRadioGroup`, `RDatePicker`.

**Datos**: `RTable`, `RBadge`, `RCard`, `RAvatar`, `RPagination`, `RBreadcrumb`.

**Navegación**: `RTabs`, `RAccordion`.

**Feedback**: `RAlert`, `RSpinner`, `RTooltip`, `RProgressBar`, `RSkeleton`, `RToast` (con el composable `useToast`), `RModal`.

Props y ejemplos de cada uno en la documentación.

## Fuentes

Los componentes usan Public Sans e IBM Plex Mono si están disponibles y, si no, las fuentes del sistema. Para cargarlas desde el paquete:

```ts
import 'vue-rolekit/dist/fonts.css'
```

## Tema

Los componentes siguen el modo del sistema (`prefers-color-scheme`). Para fijarlo, pon `data-theme` en `<html>`:

```html
<html data-theme="light"> <!-- o "dark" -->
```

Si tu aplicación solo tiene modo claro, usa `data-theme="light"` para que los componentes no se pinten en oscuro cuando el sistema lo esté.

Todos los colores son variables CSS. Un `:root` tuyo las sobrescribe en los dos modos:

```css
:root {
  --rk-accent: #0b7a5c;
}
```

Para dar un valor distinto en oscuro, usa los mismos selectores que la librería:

```css
:root[data-theme='dark'] {
  --rk-accent: #6fd3b0;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) {
    --rk-accent: #6fd3b0;
  }
}
```

| Variable | Uso |
|---|---|
| `--rk-bg` | Fondo de controles y paneles |
| `--rk-fg` | Texto |
| `--rk-muted` | Texto secundario, placeholders |
| `--rk-rule` | Bordes y filetes |
| `--rk-subtle` | Hover de filas y opciones, skeleton |
| `--rk-accent` | Primario, estado activo, foco |
| `--rk-on-accent` | Texto sobre `accent`, `danger` y `success` |
| `--rk-danger`, `--rk-success`, `--rk-warning` | Variantes semánticas |
| `--rk-radius` | Radio de bordes (2px) |
| `--rk-font-sans`, `--rk-font-mono` | Public Sans e IBM Plex Mono |

### Cambios incompatibles en 1.0.0

- Estética nueva en todos los componentes.
- Variables renombradas: `--rk-paper*` → `--rk-bg` / `--rk-subtle`, `--rk-ink` → `--rk-fg`, `--rk-ink-soft` → `--rk-muted`, `--rk-edge` → `--rk-rule`, `--rk-radius-md|lg|pill` → `--rk-radius`. Se eliminan `--rk-shadow-paper*`.
- Modo oscuro automático (ver arriba).
- La API de los componentes (props, eventos, slots) no cambia.

## Desarrollo

```bash
pnpm install
pnpm dev          # web de documentación en http://localhost:5173
pnpm test         # tests con Vitest
pnpm build        # librería (dist/) con tipos
pnpm build:site   # web de documentación (site/)
```

## Licencia

MIT
