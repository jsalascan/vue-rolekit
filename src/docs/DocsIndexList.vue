<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Icon from './Icon.vue'
import { categories } from './nav-data'

const emit = defineEmits<{ navigate: [] }>()
</script>

<template>
  <template v-for="cat in categories" :key="cat.name">
    <p class="docs-aside__category">{{ cat.name }}</p>
    <nav class="docs-aside__nav">
      <RouterLink
        v-for="item in cat.items"
        :key="item.id"
        :to="item.path"
        class="docs-aside__link"
        active-class="is-active"
        @click="emit('navigate')"
      >
        <Icon :name="item.icon" :size="15" class="docs-aside__icon" />
        <span class="docs-aside__link-label">{{ item.label }}</span>
      </RouterLink>
    </nav>
  </template>
</template>
