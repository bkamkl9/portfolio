<script setup lang="ts">
const {
  type = 'text',
  placeholder = '',
  label = '',
} = defineProps<{
  type?: string
  placeholder?: string
  label?: string
}>()

const model = defineModel<string>()
</script>

<template>
  <label for="name">
    <span class="text-xs text-black-500">
      {{ label }}
    </span>
    <input
      id="name"
      class="w-full rounded-md p-2 text-xs text-black-500 h-7 font-medium bg-white-smoke mt-1"
      :type="type"
      :placeholder="placeholder"
      v-model="model"
    />
  </label>
</template>
