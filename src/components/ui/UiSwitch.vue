<script setup lang="ts" generic="T extends string">
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps<{
  options: { label: string; value: T; icon?: IconDefinition }[]
}>()

const selected = defineModel<T>('selected', { required: true })

const isSelected = (value: T) => selected.value === value
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="w-full bg-smoke-500 p-1 rounded-full relative flex gap-1">
      <button
        v-for="option in props.options"
        :class="{
          'w-full rounded-full text-[0.6rem] sm:text-xs font-medium text-black-500 items-center justify-center py-1 cursor-pointer flex gap-2': true,
          'bg-white-500': isSelected(option.value),
        }"
        @click="selected = option.value"
      >
        <FontAwesomeIcon :icon="option.icon" v-if="option.icon" class="text-xs sm:text-sm" />
        <span>{{ option.label }}</span>
      </button>
    </div>
  </div>
</template>
