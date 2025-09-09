<script setup lang="ts">
import * as Ui from '.'
import { useI18n } from 'vue-i18n'

// Types
interface ExperienceItem {
  title: string
  company?: string  // For experience
  school?: string   // For education
  location: string
  date: string
  description: string
  achievements: string[]
  tags?: string[]   // Optional for education items
}

interface Props {
  item: ExperienceItem
  type?: 'experience' | 'education'
}

const { item, type = 'experience' } = defineProps<Props>()
const { t } = useI18n()

// Computed properties for organization/institution
const organization = type === 'experience' ? item.company : item.school
const showTags = type === 'experience' && item.tags
</script>

<template>
  <Ui.UiCard>
    <template #body>
      <div class="flex items-center justify-between mb-4">
        <div class="text-sm flex flex-col space-y-0.5">
          <span class="text-black-500">{{ item.title }}</span>
          <span class="text-slate-gray-500">{{ organization }}</span>
        </div>
        <div
          class="text-sm flex flex-col items-end text-slate-gray-500 text-xs space-y-0.5 whitespace-nowrap"
        >
          <span>{{ item.location }}</span>
          <span>{{ item.date }}</span>
        </div>
      </div>
      
      <p class="text-sm text-slate-gray-500 mb-2">
        {{ item.description }}
      </p>
      
      <span class="text-xs text-black-500">
        {{ t('landing.experience.key_achievements') }}:
      </span>
      
      <ul class="list-inside text-xs text-slate-gray-500 mt-1 space-y-1">
        <li v-for="achievement in item.achievements" :key="achievement">
          <span class="text-black-500 font-bold">•</span> {{ achievement }}
        </li>
      </ul>
      
      <div v-if="showTags" class="mt-4 flex flex-wrap gap-2">
        <Ui.UiPill variant="outline" v-for="tag in item.tags" :key="tag">
          {{ tag }}
        </Ui.UiPill>
      </div>
    </template>
  </Ui.UiCard>
</template>
