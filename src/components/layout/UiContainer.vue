<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <div :class="['max-w-[1000px] mx-auto px-4 sm:px-6 section', $props.class]">
    <slot />
  </div>
</template>
