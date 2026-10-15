<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'

const props = defineProps<{
  modelValue: boolean
  title?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

function close() {
  emit('update:modelValue', false)
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.modelValue) close()
}

// En onMounted y no en setup: así el componente también se renderiza en servidor (SSR).
onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))

// Al bloquear el scroll desaparece la barra; se compensa su ancho para que
// la página no se desplace de lado al abrir y cerrar.
watch(
  () => props.modelValue,
  (isOpen) => {
    const body = document.body
    if (isOpen) {
      const scrollbar = window.innerWidth - document.documentElement.clientWidth
      body.style.overflow = 'hidden'
      if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`
    } else {
      body.style.overflow = ''
      body.style.paddingRight = ''
    }
  }
)
</script>

<template>
  <Teleport to="body">
    <Transition name="rk-modal">
      <div v-if="modelValue" class="rk-modal-overlay" @click.self="close">
        <div class="rk-modal" role="dialog" aria-modal="true" :aria-label="title">
          <div class="rk-modal__header">
            <h3 v-if="title" class="rk-modal__title">{{ title }}</h3>
            <button type="button" class="rk-modal__close" aria-label="Cerrar" @click="close">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div class="rk-modal__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="rk-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.rk-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: color-mix(in srgb, #000 40%, transparent);
}
.rk-modal {
  width: 100%;
  max-width: 480px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  background: var(--rk-bg);
  border: 1px solid var(--rk-rule);
  border-radius: var(--rk-radius);
  font-family: var(--rk-font-sans);
}
.rk-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--rk-rule);
}
.rk-modal__title {
  font-family: var(--rk-font-sans);
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--rk-fg);
  margin: 0;
}
.rk-modal__close {
  border: none;
  background: none;
  color: var(--rk-muted);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--rk-radius);
  line-height: 0;
  transition: color 0.15s var(--rk-ease), background-color 0.15s var(--rk-ease);
}
.rk-modal__close:hover {
  color: var(--rk-fg);
  background: var(--rk-subtle);
}
.rk-modal__close:focus-visible {
  outline: 2px solid var(--rk-accent);
  outline-offset: 2px;
}
.rk-modal__body {
  padding: 20px;
  color: var(--rk-fg);
  font-size: 0.9375rem;
  line-height: 1.6;
}
.rk-modal__footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 20px;
  border-top: 1px solid var(--rk-rule);
}

.rk-modal-enter-active,
.rk-modal-leave-active {
  transition: opacity 0.15s var(--rk-ease);
}
.rk-modal-enter-active .rk-modal,
.rk-modal-leave-active .rk-modal {
  transition: transform 0.15s var(--rk-ease), opacity 0.15s var(--rk-ease);
}
.rk-modal-enter-from,
.rk-modal-leave-to {
  opacity: 0;
}
.rk-modal-enter-from .rk-modal,
.rk-modal-leave-to .rk-modal {
  transform: translateY(8px);
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .rk-modal-enter-active,
  .rk-modal-leave-active,
  .rk-modal-enter-active .rk-modal,
  .rk-modal-leave-active .rk-modal {
    transition: none;
  }
}
</style>
