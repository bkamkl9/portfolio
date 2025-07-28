<script setup lang="ts">
defineProps<{
  value: number
  title?: string
}>()
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <div class="flex items-center justify-between gap-2">
      <span class="text-xs text-black-500">{{ title }}</span>
      <span class="text-xs text-slate-gray-500">{{ value }}%</span>
    </div>
    <div class="w-full h-1.5 bg-light-gray rounded-full overflow-hidden">
      <div
        class="h-full bg-black-500 border-r border-r-[2px] border-white-500"
        :style="{ width: `${value}%` }"
      ></div>
    </div>
  </div>
</template>
