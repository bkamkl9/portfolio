<script setup lang="ts" generic="T extends string">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  options: { label: string; value: T; icon?: string }[]
}>()

const selected = defineModel<T>('selected', { required: true })

const isSelected = (value: T) => selected.value === value
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="w-full bg-smoke-500 p-1 rounded-full relative flex gap-1">
      <button
        v-for="option in props.options"
        :key="option.value"
        :class="{
          'w-full rounded-full text-[0.6rem] sm:text-xs font-medium text-black-500 items-center justify-center py-1 cursor-pointer flex gap-2': true,
          'bg-white-500': isSelected(option.value),
        }"
        @click="selected = option.value"
      >
        <Icon :icon="option.icon" v-if="option.icon" class="w-3 h-3 sm:w-4 sm:h-4" />
        <span>{{ option.label }}</span>
      </button>
    </div>
  </div>
</template>
