<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="text-center mb-12">
    <h2 class="font-medium text-md mb-2">{{ title }}</h2>
    <p class="text-sm text-slate-gray-500 max-w-xl mx-auto">
      {{ description }}
    </p>
  </div>
</template>
