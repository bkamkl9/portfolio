<script setup lang="ts">
import { computed } from 'vue'

const {
  size = 'md',
  variant = 'primary',
  href,
  target,
} = defineProps<{
  size?: 'md' | 'lg' | 'sm'
  variant?: 'primary' | 'secondary' | 'icon'
  title?: string
  href?: string
  target?: string
}>()

const sizeClass = computed(() => {
  if (variant === 'icon' && size === 'sm') {
    return 'p-1'
  }

  if (variant === 'icon' && size === 'md') {
    return 'p-2'
  }

  if (variant === 'icon' && size === 'lg') {
    return 'p-3'
  }

  switch (size) {
    case 'md':
      return 'text-xs px-4 py-1.5'
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
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-md cursor-pointer transition-colors duration-200"
    :class="[sizeClass, variantClass]"
    :title="title"
  >
    <slot />
  </component>
</template>
