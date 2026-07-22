import type { IconName } from './icon-names'

export interface NavItem {
  id: string
  path: string
  icon: IconName
  label: string
}

export interface NavCategory {
  name: string
  items: NavItem[]
}

export const categories: NavCategory[] = [
  {
    name: 'Formulario',
    items: [
      { id: 'r-button', path: '/r-button', icon: 'button', label: 'RButton' },
      { id: 'r-input', path: '/r-input', icon: 'input', label: 'RInput' },
      { id: 'r-textarea', path: '/r-textarea', icon: 'textarea', label: 'RTextarea' },
      { id: 'r-select', path: '/r-select', icon: 'select', label: 'RSelect' },
      { id: 'r-checkbox', path: '/r-checkbox', icon: 'checkbox', label: 'RCheckbox' },
      { id: 'r-switch', path: '/r-switch', icon: 'switch', label: 'RSwitch' },
      { id: 'r-radio-group', path: '/r-radio-group', icon: 'radio', label: 'RRadioGroup' },
      { id: 'r-date-picker', path: '/r-date-picker', icon: 'datepicker', label: 'RDatePicker' },
    ],
  },
  {
    name: 'Datos',
    items: [
      { id: 'r-table', path: '/r-table', icon: 'table', label: 'RTable' },
      { id: 'r-badge', path: '/r-badge', icon: 'badge', label: 'RBadge' },
      { id: 'r-card', path: '/r-card', icon: 'card', label: 'RCard' },
      { id: 'r-avatar', path: '/r-avatar', icon: 'avatar', label: 'RAvatar' },
      { id: 'r-pagination', path: '/r-pagination', icon: 'pagination', label: 'RPagination' },
      { id: 'r-breadcrumb', path: '/r-breadcrumb', icon: 'breadcrumb', label: 'RBreadcrumb' },
    ],
  },
  {
    name: 'Navegación',
    items: [
      { id: 'r-tabs', path: '/r-tabs', icon: 'tabs', label: 'RTabs' },
      { id: 'r-accordion', path: '/r-accordion', icon: 'accordion', label: 'RAccordion' },
    ],
  },
  {
    name: 'Feedback',
    items: [
      { id: 'r-alert', path: '/r-alert', icon: 'alert', label: 'RAlert' },
      { id: 'r-spinner', path: '/r-spinner', icon: 'spinner', label: 'RSpinner' },
      { id: 'r-tooltip', path: '/r-tooltip', icon: 'tooltip', label: 'RTooltip' },
      { id: 'r-progress-bar', path: '/r-progress-bar', icon: 'progress', label: 'RProgressBar' },
      { id: 'r-skeleton', path: '/r-skeleton', icon: 'skeleton', label: 'RSkeleton' },
      { id: 'r-toast', path: '/r-toast', icon: 'toast', label: 'RToast' },
      { id: 'r-modal', path: '/r-modal', icon: 'modal', label: 'RModal' },
    ],
  },
]

export const navItems = categories.flatMap((c) => c.items)
