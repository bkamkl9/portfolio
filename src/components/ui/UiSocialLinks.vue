<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Types
interface SocialLink {
  name: string
  href: string
  icon: string
  ariaLabel: string
}

interface Props {
  links: SocialLink[]
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'pills' | 'minimal'
  showLabels?: boolean
}

const { links, size = 'md', variant = 'default', showLabels = false } = defineProps<Props>()

// Size classes
const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
}

const iconSizes = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
}

// Variant classes
const baseClasses =
  'inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'

const variantClasses = {
  default: 'bg-smoke-500 hover:bg-black-500 text-slate-gray-500 hover:text-white-500',
  pills:
    'bg-white-500/80 backdrop-blur-sm border border-smoke-500 hover:border-black-500 text-slate-gray-500 hover:text-black-500',
  minimal: 'text-slate-gray-500 hover:text-black-500 hover:bg-smoke-500',
}
</script>

<template>
  <div class="flex items-center gap-3 flex-wrap">
    <a
      v-for="social in links"
      :key="social.name"
      :href="social.href"
      :aria-label="social.ariaLabel"
      :title="social.name"
      target="_blank"
      rel="noopener noreferrer"
      :class="[
        baseClasses,
        variantClasses[variant],
        showLabels ? 'px-3 py-2 gap-2' : sizeClasses[size],
        'hover:scale-110',
      ]"
    >
      <Icon :icon="social.icon" :class="iconSizes[size]" />
      <span v-if="showLabels" class="text-xs font-medium">{{ social.name }}</span>
    </a>
  </div>
</template>
