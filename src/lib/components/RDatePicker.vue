<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const MONTHS = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]
const WEEKDAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

const open = ref(false)
const rootEl = ref<HTMLElement | null>(null)

function parseISO(value: string): Date | null {
  if (!value) return null
  const [y, m, d] = value.split('-').map(Number)
  if (!y || !m || !d) return null
  return new Date(y, m - 1, d)
}

function toISO(d: Date) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function isSameDay(a: Date, b: Date | null) {
  return (
    !!b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

const selectedDate = computed(() => parseISO(props.modelValue))
const viewDate = ref(selectedDate.value ?? new Date())

const displayLabel = computed(() => {
  const d = selectedDate.value
  if (!d) return 'Selecciona una fecha'
  return `${d.getDate()} de ${MONTHS[d.getMonth()]} de ${d.getFullYear()}`
})

const monthLabel = computed(
  () => `${MONTHS[viewDate.value.getMonth()]} ${viewDate.value.getFullYear()}`
)

const days = computed(() => {
  const year = viewDate.value.getFullYear()
  const month = viewDate.value.getMonth()
  const firstDay = new Date(year, month, 1)
  const startOffset = (firstDay.getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: { date: Date; outside: boolean }[] = []
  for (let i = 0; i < startOffset; i++) {
    cells.push({ date: new Date(year, month, i - startOffset + 1), outside: true })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), outside: false })
  }
  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1].date
    cells.push({ date: new Date(year, month, last.getDate() + 1), outside: true })
  }
  return cells
})

function selectDay(date: Date) {
  emit('update:modelValue', toISO(date))
  open.value = false
}

function prevMonth() {
  viewDate.value = new Date(viewDate.value.getFullYear(), viewDate.value.getMonth() - 1, 1)
}
function nextMonth() {
  viewDate.value = new Date(viewDate.value.getFullYear(), viewDate.value.getMonth() + 1, 1)
}

function toggle() {
  open.value = !open.value
  if (open.value) viewDate.value = selectedDate.value ?? new Date()
}

function onClickOutside(event: MouseEvent) {
  if (rootEl.value && !rootEl.value.contains(event.target as Node)) {
    open.value = false
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

document.addEventListener('click', onClickOutside)
document.addEventListener('keydown', onKeydown)
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div ref="rootEl" class="rk-datepicker">
    <span v-if="label" class="rk-field__label">{{ label }}</span>

    <button
      type="button"
      class="rk-datepicker__trigger"
      :class="{ 'rk-datepicker__trigger--open': open }"
      aria-haspopup="dialog"
      :aria-expanded="open"
      @click="toggle"
    >
      <span class="rk-datepicker__value">{{ displayLabel }}</span>
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="3" x2="8" y2="7" />
        <line x1="16" y1="3" x2="16" y2="7" />
      </svg>
    </button>

    <Transition name="rk-datepicker-panel">
      <div v-if="open" class="rk-datepicker__panel" role="dialog">
        <div class="rk-datepicker__nav">
          <button
            type="button"
            class="rk-datepicker__nav-btn"
            aria-label="Mes anterior"
            @click="prevMonth"
          >
            ‹
          </button>
          <span class="rk-datepicker__month">{{ monthLabel }}</span>
          <button
            type="button"
            class="rk-datepicker__nav-btn"
            aria-label="Mes siguiente"
            @click="nextMonth"
          >
            ›
          </button>
        </div>
        <div class="rk-datepicker__weekdays">
          <span v-for="wd in WEEKDAYS" :key="wd">{{ wd }}</span>
        </div>
        <div class="rk-datepicker__grid">
          <button
            v-for="cell in days"
            :key="cell.date.toISOString()"
            type="button"
            class="rk-datepicker__day"
            :class="{
              'rk-datepicker__day--outside': cell.outside,
              'rk-datepicker__day--selected': isSameDay(cell.date, selectedDate),
            }"
            @click="selectDay(cell.date)"
          >
            {{ cell.date.getDate() }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.rk-datepicker {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: var(--rk-font-sans);
}
.rk-datepicker__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  min-width: 220px;
  padding: 10px 14px;
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-md);
  background: var(--rk-paper-2);
  color: var(--rk-ink);
  font-family: var(--rk-font-sans);
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s var(--rk-ease), box-shadow 0.15s var(--rk-ease);
}
.rk-datepicker__trigger:hover {
  border-color: var(--rk-ink-soft);
}
.rk-datepicker__trigger--open {
  outline: none;
  border-color: var(--rk-ink);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--rk-accent) 25%, transparent);
}
.rk-datepicker__panel {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 30;
  width: 280px;
  max-width: calc(100vw - 32px);
  padding: 14px;
  background: var(--rk-paper-2);
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-md);
  box-shadow: var(--rk-shadow-paper);
}
.rk-datepicker__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.rk-datepicker__nav-btn {
  width: 26px;
  height: 26px;
  border: 2px solid var(--rk-edge);
  border-radius: var(--rk-radius-md);
  background: var(--rk-paper);
  color: var(--rk-ink);
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1;
}
.rk-datepicker__nav-btn:hover {
  border-color: var(--rk-ink-soft);
}
.rk-datepicker__month {
  font-family: var(--rk-font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: capitalize;
  color: var(--rk-ink);
}
.rk-datepicker__weekdays,
.rk-datepicker__grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.rk-datepicker__weekdays span {
  text-align: center;
  font-family: var(--rk-font-mono);
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--rk-ink-soft);
  padding-bottom: 6px;
}
.rk-datepicker__day {
  aspect-ratio: 1;
  border: none;
  background: none;
  border-radius: var(--rk-radius-md);
  color: var(--rk-ink);
  font-family: var(--rk-font-sans);
  font-size: 0.82rem;
  cursor: pointer;
  transition: background-color 0.12s ease, color 0.12s ease;
}
.rk-datepicker__day:hover {
  background: var(--rk-paper-3);
}
.rk-datepicker__day--outside {
  color: var(--rk-ink-soft);
  opacity: 0.5;
}
.rk-datepicker__day--selected {
  background: var(--rk-accent);
  color: #fff;
  font-weight: 700;
}

.rk-datepicker-panel-enter-active,
.rk-datepicker-panel-leave-active {
  transition: opacity 0.12s var(--rk-ease), transform 0.12s var(--rk-ease);
}
.rk-datepicker-panel-enter-from,
.rk-datepicker-panel-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
