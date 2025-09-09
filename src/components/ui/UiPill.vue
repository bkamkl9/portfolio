<script setup lang="ts">
import { computed } from 'vue'

const { variant = 'default' } = defineProps<{
  variant?: 'default' | 'outline'
}>()

const classes = computed(() => {
  return {
    'text-[0.65rem] text-black-500 bg-smoke-500 rounded-md px-1.5 py-0.5 font-medium whitespace-nowrap':
      variant === 'default',
    'text-[0.65rem] text-black-500 bg-white-500 rounded-md px-1.5 py-0.5 font-medium border border-smoke-500 whitespace-nowrap':
      variant === 'outline',
  }
})
</script>

<template>
  <div :class="[classes]">
    <slot />
  </div>
</template>
