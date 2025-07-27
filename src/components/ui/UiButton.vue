<script setup lang="ts">
import { computed } from 'vue'

const { size = 'md', variant = 'primary' } = defineProps<{
  size?: 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'icon'
}>()

const sizeClass = computed(() => {
  if (variant === 'icon') {
    return 'p-2'
  }

  switch (size) {
    case 'md':
      return 'px-4 py-2'
    case 'lg':
      return 'text-xs px-6 py-2'
  }
})

const variantClass = computed(() => {
  switch (variant) {
    case 'primary':
      return 'bg-black-500 text-white-500 hover:bg-slate-gray-500'
    case 'secondary':
      return 'bg-white-500 text-black-500 border border-grain-500 hover:bg-smoke-500'
    case 'icon':
      return 'text-xl text-slate-gray-500 hover:bg-smoke-500 aspect-square p-2'
  }
})
</script>

<template>
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-md cursor-pointer"
    :class="[sizeClass, variantClass]"
  >
    <slot />
  </button>
</template>
