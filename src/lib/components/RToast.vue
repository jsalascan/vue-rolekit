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

@media (max-width: 640px) {
  .rk-toast-viewport {
    top: 76px;
    bottom: auto;
    left: 20px;
    right: 20px;
  }
  .rk-toast-viewport__list {
    align-items: stretch;
  }
  .rk-toast {
    width: 100%;
  }
}
.rk-toast-viewport__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
}
.rk-toast {
  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 320px;
  max-width: calc(100vw - 40px);
  padding: 12px 14px;
  border: 2px solid var(--rk-edge);
  border-left-width: 4px;
  border-radius: var(--rk-radius-md);
  background: var(--rk-paper-2);
  box-shadow: var(--rk-shadow-paper);
  font-family: var(--rk-font-sans);
}
.rk-toast--info {
  border-left-color: var(--rk-ink-soft);
}
.rk-toast--success {
  border-left-color: #2f7a4d;
}
.rk-toast--warning {
  border-left-color: var(--rk-accent);
}
.rk-toast--danger {
  border-left-color: var(--rk-danger);
}
.rk-toast__body {
  flex: 1;
  min-width: 0;
}
.rk-toast__title {
  font-family: var(--rk-font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--rk-ink);
  margin: 0 0 2px;
}
.rk-toast__message {
  font-size: 0.85rem;
  color: var(--rk-ink-soft);
  line-height: 1.5;
  margin: 0;
}
.rk-toast__close {
  border: none;
  background: none;
  color: var(--rk-ink-soft);
  cursor: pointer;
  padding: 2px;
  line-height: 0;
  flex-shrink: 0;
}
.rk-toast__close:hover {
  color: var(--rk-ink);
}

.rk-toast-enter-active,
.rk-toast-leave-active {
  transition: opacity 0.2s var(--rk-ease), transform 0.2s var(--rk-ease);
}
.rk-toast-enter-from,
.rk-toast-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
