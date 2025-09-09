<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Types
interface ContactItem {
  type: 'email' | 'phone' | 'location'
  label: string
  value: string
  href: string
  icon: string
}

interface Props {
  items: ContactItem[]
  variant?: 'default' | 'compact' | 'card'
  showLabels?: boolean
}

const { items, variant = 'default', showLabels = true } = defineProps<Props>()

// Variant classes
const containerClasses = {
  default: 'space-y-4',
  compact: 'space-y-3',
  card: 'space-y-3',
}

const itemClasses = {
  default:
    'flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md',
  compact:
    'flex items-center gap-3 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm',
  card: 'flex items-center gap-4 p-3 rounded-lg hover:bg-white-500 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
}

const iconContainerClasses = {
  default:
    'w-10 h-10 bg-smoke-500 rounded-md flex items-center justify-center flex-shrink-0 text-slate-gray-700',
  compact:
    'w-8 h-8 bg-smoke-500 group-hover:bg-black-500 text-slate-gray-700 group-hover:text-white-500 rounded-md flex items-center justify-center transition-colors duration-200 flex-shrink-0',
  card: 'w-12 h-12 bg-smoke-500 group-hover:bg-black-500 text-slate-gray-700 group-hover:text-white-500 rounded-lg flex items-center justify-center transition-colors duration-200 flex-shrink-0',
}

const iconSizes = {
  default: 'w-4 h-4',
  compact: 'w-4 h-4',
  card: 'w-5 h-5',
}
</script>

<template>
  <div :class="containerClasses[variant]">
    <div v-for="contact in items" :key="contact.type">
      <a
        :href="contact.href"
        :target="contact.type === 'location' ? '_blank' : undefined"
        :rel="contact.type === 'location' ? 'noopener noreferrer' : undefined"
        :class="itemClasses[variant]"
        :aria-label="`Contact via ${contact.label}: ${contact.value}`"
      >
        <div :class="iconContainerClasses[variant]">
          <Icon :icon="contact.icon" :class="iconSizes[variant]" />
        </div>
        <div class="flex flex-col min-w-0" v-if="showLabels">
          <span
            class="text-xs text-slate-gray-500"
            :class="variant === 'compact' ? 'uppercase tracking-wider' : ''"
          >
            {{ contact.label }}
          </span>
          <span class="text-sm text-black-500 font-medium truncate">
            {{ contact.value }}
          </span>
        </div>
      </a>
    </div>
  </div>
</template>
