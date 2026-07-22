export interface Column {
  key: string
  label: string
}

export interface SelectOption {
  value: string
  label: string
}

export interface TabItem {
  value: string
  label: string
}

export interface AccordionItem {
  id: string
  title: string
}

export interface BreadcrumbItem {
  label: string
  to?: string
}

export type ToastVariant = 'info' | 'success' | 'warning' | 'danger'

export interface ToastItem {
  id: number
  variant: ToastVariant
  title?: string
  message: string
  duration: number
}
