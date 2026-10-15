import { reactive } from 'vue'
import type { ToastItem, ToastVariant } from '../types'

const toasts = reactive<ToastItem[]>([])
let nextId = 1

interface ShowOptions {
  variant?: ToastVariant
  title?: string
  duration?: number
}

function show(message: string, options: ShowOptions = {}) {
  const id = nextId++
  toasts.push({
    id,
    message,
    variant: options.variant ?? 'info',
    title: options.title,
    duration: options.duration ?? 4000,
  })
  const toast = toasts[toasts.length - 1]
  if (toast.duration > 0) {
    setTimeout(() => dismiss(id), toast.duration)
  }
  return id
}

function dismiss(id: number) {
  const idx = toasts.findIndex((t) => t.id === id)
  if (idx !== -1) toasts.splice(idx, 1)
}

export function useToast() {
  return { toasts, show, dismiss }
}
