export interface NavItem {
  id: string
  path: string
  label: string
  description: string
}

export interface NavCategory {
  name: string
  items: NavItem[]
}

export const categories: NavCategory[] = [
  {
    name: 'Formulario',
    items: [
      { id: 'r-button', path: '/r-button', label: 'RButton', description: 'Botón con tres variantes visuales y soporte para disabled.' },
      { id: 'r-input', path: '/r-input', label: 'RInput', description: 'Input con label, v-model y estado de error opcional.' },
      { id: 'r-textarea', path: '/r-textarea', label: 'RTextarea', description: 'Igual que RInput pero para texto multilínea, con altura ajustable.' },
      { id: 'r-select', path: '/r-select', label: 'RSelect', description: 'Dropdown propio (sin <select> nativo): panel flotante, check en la opción activa y navegación con teclado.' },
      { id: 'r-checkbox', path: '/r-checkbox', label: 'RCheckbox', description: 'Checkbox con estilo propio; usa un input nativo oculto por debajo.' },
      { id: 'r-switch', path: '/r-switch', label: 'RSwitch', description: 'Interruptor on/off, mismo patrón de accesibilidad que RCheckbox.' },
      { id: 'r-radio-group', path: '/r-radio-group', label: 'RRadioGroup', description: 'Grupo de radios a partir de una lista de opciones.' },
      { id: 'r-date-picker', path: '/r-date-picker', label: 'RDatePicker', description: "Selector de fecha propio con calendario mensual, sin <input type='date'> nativo." },
    ],
  },
  {
    name: 'Datos',
    items: [
      { id: 'r-table', path: '/r-table', label: 'RTable', description: 'Tabla simple con columnas y filas por props.' },
      { id: 'r-badge', path: '/r-badge', label: 'RBadge', description: 'Etiqueta pequeña de estado, cuatro variantes.' },
      { id: 'r-card', path: '/r-card', label: 'RCard', description: 'Contenedor simple con título opcional para agrupar contenido.' },
      { id: 'r-avatar', path: '/r-avatar', label: 'RAvatar', description: 'Círculo con las iniciales derivadas del nombre.' },
      { id: 'r-pagination', path: '/r-pagination', label: 'RPagination', description: 'Navegación entre páginas con elipsis automática cuando hay muchas.' },
      { id: 'r-breadcrumb', path: '/r-breadcrumb', label: 'RBreadcrumb', description: 'Ruta de navegación con enlaces <a> planos, sin depender de vue-router.' },
    ],
  },
  {
    name: 'Navegación',
    items: [
      { id: 'r-tabs', path: '/r-tabs', label: 'RTabs', description: 'Pestañas con navegación por teclado y panel por slot con nombre dinámico.' },
      { id: 'r-accordion', path: '/r-accordion', label: 'RAccordion', description: 'Paneles colapsables independientes; varios pueden estar abiertos a la vez.' },
    ],
  },
  {
    name: 'Feedback',
    items: [
      { id: 'r-alert', path: '/r-alert', label: 'RAlert', description: 'Aviso con título opcional y cuatro variantes semánticas.' },
      { id: 'r-spinner', path: '/r-spinner', label: 'RSpinner', description: 'Indicador de carga circular.' },
      { id: 'r-tooltip', path: '/r-tooltip', label: 'RTooltip', description: 'Tooltip en CSS puro que envuelve cualquier contenido.' },
      { id: 'r-progress-bar', path: '/r-progress-bar', label: 'RProgressBar', description: 'Barra de progreso lineal con etiqueta opcional y porcentaje.' },
      { id: 'r-skeleton', path: '/r-skeleton', label: 'RSkeleton', description: 'Placeholder de carga para avatares, líneas de texto o bloques.' },
      { id: 'r-toast', path: '/r-toast', label: 'RToast', description: 'Notificaciones flotantes con useToast(). Monta <RToast /> una vez en la raíz de la app.' },
      { id: 'r-modal', path: '/r-modal', label: 'RModal', description: 'Diálogo modal con overlay, cierre por Escape o clic fuera y slot #footer opcional.' },
    ],
  },
]

export const navItems = categories.flatMap((c) => c.items)

export function findNavItem(path: string): NavItem | undefined {
  return navItems.find((item) => item.path === path)
}

// Por nombre de ruta primero: vue-router también acepta `/r-button/` o `/R-Button`,
// que no coinciden con `path` exacto.
export function findNavItemForRoute(name: unknown, path: string): NavItem | undefined {
  return navItems.find((item) => item.id === name) ?? findNavItem(path)
}
