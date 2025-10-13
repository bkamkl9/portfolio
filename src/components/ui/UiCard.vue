<template>
  <div class="bg-white-500 rounded-lg border border-smoke-500 flex flex-col">
    <div class="overflow-hidden rounded-t-lg">
      <slot name="header" />
    </div>
    <div class="p-4 flex flex-col flex-1">
      <slot name="body" />
    </div>
  </div>
</template>
