<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <section :class="['max-w-[1100px] mx-auto px-4 sm:px-6', $props.class]">
    <slot />
  </section>
</template>
