<script setup lang="ts">
import { computed } from 'vue'

const { size = 'md' } = defineProps<{
  size?: 'md' | 'lg'
}>()

const sizeClass = computed(() => {
  let base = 'rounded-full bg-black-500 text-white-500 grid place-items-center font-medium'
  if (size === 'md') {
    return `${base} w-32 h-32 text-sm`
  }
  return `${base} w-42 h-42`
})
</script>

<template>
  <div :class="sizeClass">
    <slot />
  </div>
</template>
