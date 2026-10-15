<script setup lang="ts">
import { useToast } from '../composables/useToast'

const { toasts, dismiss } = useToast()
</script>

<template>
  <Teleport to="body">
    <div class="rk-toast-viewport">
      <TransitionGroup name="rk-toast" tag="div" class="rk-toast-viewport__list">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="rk-toast"
          :class="`rk-toast--${toast.variant}`"
          role="status"
        >
          <div class="rk-toast__body">
            <p v-if="toast.title" class="rk-toast__title">{{ toast.title }}</p>
            <p class="rk-toast__message">{{ toast.message }}</p>
          </div>
          <button
            type="button"
            class="rk-toast__close"
            aria-label="Cerrar"
            @click="dismiss(toast.id)"
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
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
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.rk-toast-viewport {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 200;
  pointer-events: none;
}
.rk-toast-viewport__list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
}
@media (max-width: 640px) {
  .rk-toast-viewport {
    top: 16px;
    bottom: auto;
    left: 16px;
    right: 16px;
  }
  .rk-toast-viewport__list {
    align-items: stretch;
  }
  .rk-toast {
    width: 100%;
  }
}
.rk-toast {
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 320px;
  max-width: calc(100vw - 32px);
  padding: 12px 14px;
  border: 1px solid var(--rk-rule);
  border-left: 2px solid var(--rk-accent);
  border-radius: var(--rk-radius);
  background: var(--rk-bg);
  font-family: var(--rk-font-sans);
}
.rk-toast--success {
  border-left-color: var(--rk-success);
}
.rk-toast--warning {
  border-left-color: var(--rk-warning);
}
.rk-toast--danger {
  border-left-color: var(--rk-danger);
}
.rk-toast__body {
  flex: 1;
  min-width: 0;
}
.rk-toast__title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--rk-fg);
  margin: 0 0 2px;
}
.rk-toast__message {
  font-size: 0.875rem;
  color: var(--rk-muted);
  line-height: 1.5;
  margin: 0;
}
.rk-toast__close {
  border: none;
  background: none;
  color: var(--rk-muted);
  cursor: pointer;
  padding: 2px;
  line-height: 0;
  flex-shrink: 0;
  border-radius: var(--rk-radius);
}
.rk-toast__close:hover {
  color: var(--rk-fg);
}
.rk-toast__close:focus-visible {
  outline: 2px solid var(--rk-accent);
  outline-offset: 2px;
}

.rk-toast-enter-active,
.rk-toast-leave-active {
  transition: opacity 0.15s var(--rk-ease), transform 0.15s var(--rk-ease);
}
.rk-toast-enter-from,
.rk-toast-leave-to {
  opacity: 0;
  transform: translateX(8px);
}
/* Los que quedan se deslizan a su sitio en vez de saltar; el que sale deja de
   ocupar hueco mientras se desvanece. */
.rk-toast-move {
  transition: transform 0.15s var(--rk-ease);
}
.rk-toast-leave-active {
  position: absolute;
  right: 0;
}
@media (max-width: 640px) {
  .rk-toast-leave-active {
    left: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .rk-toast-enter-active,
  .rk-toast-leave-active,
  .rk-toast-move {
    transition: none;
  }
}
</style>
