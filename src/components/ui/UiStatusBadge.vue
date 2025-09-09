<script setup lang="ts">
// Types
interface Props {
  status: string
  type?: 'available' | 'busy' | 'offline' | 'custom'
  variant?: 'pill' | 'compact' | 'minimal'
  showDot?: boolean
}

const { status, type = 'available', variant = 'pill', showDot = true } = defineProps<Props>()

// Status colors
const statusColors = {
  available: 'bg-green-500',
  busy: 'bg-red-500',
  offline: 'bg-slate-gray-500',
  custom: 'bg-blue-500',
}

// Variant classes
const containerClasses = {
  pill: 'inline-flex items-center gap-2 bg-smoke-500/50 backdrop-blur-sm px-4 py-2 rounded-full',
  compact:
    'inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white-500/80 border border-smoke-500',
  minimal: 'inline-flex items-center gap-2',
}

const textClasses = {
  pill: 'text-xs text-slate-gray-500 font-medium',
  compact: 'text-xs text-slate-gray-500 font-medium',
  minimal: 'text-sm text-slate-gray-500',
}
</script>

<template>
  <div :class="containerClasses[variant]">
    <div v-if="showDot" :class="['w-2 h-2 rounded-full animate-pulse', statusColors[type]]" />
    <span :class="textClasses[variant]">
      {{ status }}
    </span>
  </div>
</template>
