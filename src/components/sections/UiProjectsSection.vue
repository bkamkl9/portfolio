<script setup lang="ts">
import * as Ui from '../ui'
import { UiContainer } from '../layout'
import { useI18n } from 'vue-i18n'
import useContent from '@/composable/useContent'
import { computed } from 'vue'

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

const { t } = useI18n()
const content = await useContent('projects')

const featuredProjects = computed(() => {
  if (content && content.value) {
    return content.value.filter((project: Project) => project.is_featured)
  }
  return []
})

const otherProjects = computed(() => {
  if (content && content.value) {
    return content.value.filter((project: Project) => !project.is_featured)
  }
  return []
})

// Note: Image error handling is now handled in UiProjectCard component
</script>

<template>
  <section id="projects">
    <UiContainer class="py-24">
      <Ui.UiSectionTitle
        :title="t('landing.projects.heading')"
        :description="t('landing.projects.paragraph')"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Ui.UiProjectCard 
          v-for="project in featuredProjects" 
          :key="project.title"
          :project="project"
          variant="featured"
        />
      </div>
      <span class="text-sm text-black-500 text-center pb-6 pt-12 w-full block">{{
        t('landing.projects.other_projects')
      }}</span>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Ui.UiProjectCard 
          v-for="project in otherProjects" 
          :key="project.title"
          :project="project"
          variant="regular"
        />
      </div>
    </UiContainer>
  </section>
</template>
