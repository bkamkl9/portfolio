<script setup lang="ts">
import * as Ui from '.'
import { useI18n } from 'vue-i18n'

// Types
interface ProjectLink {
  view_project?: string
  view_code?: string
}

interface Project {
  title: string
  is_featured: boolean
  description: string
  tags: string[]
  image?: string
  image_alt?: string
  links: ProjectLink
}

interface Props {
  project: Project
  variant?: 'featured' | 'regular'
}

const { project, variant = 'featured' } = defineProps<Props>()
const { t } = useI18n()

// Image error handling
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement | null
  if (img && img instanceof HTMLImageElement) {
    img.style.display = 'none'
  }
}

// Computed styles based on variant
const descriptionClass = variant === 'featured' ? 'text-sm' : 'text-xs'
const buttonClass = variant === 'featured' ? '' : 'w-full'
const showFeaturedBadge = variant === 'featured' && project.is_featured
</script>

<template>
  <Ui.UiCard>
    <template #header>
      <div
        class="w-full h-full aspect-video bg-smoke-500 flex items-center justify-center overflow-hidden"
      >
        <img
          v-if="project.image"
          :src="project.image"
          :alt="project.image_alt || `${project.title} project image`"
          class="w-full h-full object-cover"
          @error="handleImageError"
        />
        <div
          v-else
          class="flex items-center justify-center text-slate-gray-700 text-sm font-medium"
        >
          {{ project.title }}
        </div>
      </div>
    </template>

    <template #body>
      <div class="flex items-center justify-between">
        <h3 class="text-black-500 text-sm">{{ project.title }}</h3>
        <Ui.UiPill v-if="showFeaturedBadge">
          {{ t('landing.projects.featured') }}
        </Ui.UiPill>
      </div>

      <p :class="['text-slate-gray-500 mt-2', descriptionClass]">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap items-center gap-2 pt-4 mt-auto">
        <Ui.UiPill variant="outline" v-for="tag in project.tags" :key="tag">
          {{ tag }}
        </Ui.UiPill>
      </div>

      <div class="flex items-center gap-2 mt-3">
        <Ui.UiButton
          size="md"
          :variant="variant === 'featured' ? 'primary' : 'secondary'"
          :class="buttonClass"
          :href="project.links.view_project"
          target="_blank"
          v-if="project.links.view_project"
        >
          {{ t('landing.projects.view_project') }}
        </Ui.UiButton>

        <Ui.UiButton
          size="md"
          variant="secondary"
          :class="buttonClass"
          :href="project.links.view_code"
          target="_blank"
          v-if="project.links.view_code"
        >
          {{ t('landing.projects.view_code') }}
        </Ui.UiButton>
      </div>
    </template>
  </Ui.UiCard>
</template>
