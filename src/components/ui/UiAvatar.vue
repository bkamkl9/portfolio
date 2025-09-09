<script setup lang="ts">
import { computed } from 'vue'

const { size = 'md', image = undefined } = defineProps<{
  size?: 'md' | 'lg' | 'xl'
  image?: string
}>()

const sizeClass = computed(() => {
  let base = 'rounded-full bg-black-500 text-white-500 grid place-items-center font-medium'
  switch (size) {
    case 'md':
      return `${base} w-32 h-32 text-sm`
    case 'lg':
      return `${base} w-42 h-42 text-lg`
    case 'xl':
      return `${base} w-64 h-64 text-2xl`
    default:
      return `${base} w-32 h-32 text-sm`
  }
})
</script>

<template>
  <div :class="sizeClass">
    <img :src="image" alt="Avatar" class="w-full h-full object-cover rounded-full" v-if="image" />
    <slot v-else />
  </div>
</template>
