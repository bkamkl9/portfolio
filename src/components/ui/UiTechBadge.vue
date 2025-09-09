<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Types
interface TechItem {
  name: string
  icon: string
}

interface Props {
  technologies: TechItem[]
  variant?: 'pill' | 'compact' | 'outlined'
  size?: 'sm' | 'md'
}

const { technologies, variant = 'pill', size = 'sm' } = defineProps<Props>()

// Size classes
const sizeClasses = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-3 text-sm',
}

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
}

// Variant classes
const variantClasses = {
  pill: 'bg-white-500/80 backdrop-blur-sm border border-smoke-500 hover:border-black-500 transition-colors duration-200',
  compact:
    'bg-smoke-500 hover:bg-black-500 text-slate-gray-700 hover:text-white-500 transition-colors duration-200',
  outlined:
    'border border-slate-gray-500/30 hover:border-slate-gray-500 hover:bg-smoke-500 transition-colors duration-200',
}
</script>

<template>
  <div class="flex flex-wrap gap-3 justify-center">
    <div
      v-for="tech in technologies"
      :key="tech.name"
      :class="[
        'flex items-center gap-2 rounded-full font-medium',
        sizeClasses[size],
        variantClasses[variant],
      ]"
    >
      <Icon :icon="tech.icon" :class="iconSizes[size]" />
      <span class="text-slate-gray-700">{{ tech.name }}</span>
    </div>
  </div>
</template>
