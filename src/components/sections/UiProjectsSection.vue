<script setup lang="ts">
import * as Ui from '../ui'
import { UiContainer } from '../layout'
import { useI18n } from 'vue-i18n'
import useContent from '@/composable/useContent'
import { computed } from 'vue'

const { t } = useI18n()
const content = await useContent('projects')

const featuredProjects = computed(() => {
  if (content) {
    return content.value.filter((project: any) => project.is_featured)
  }
  return []
})

const otherProjects = computed(() => content.value.filter((project: any) => !project.is_featured))
</script>

<template>
  <UiContainer class="py-24">
    <Ui.UiSectionTitle
      :title="t('landing.projects.heading')"
      :description="t('landing.projects.paragraph')"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Ui.UiCard v-for="project in featuredProjects" :key="project.title">
        <template #header>
          <img
            src="https://placehold.co/600x400"
            alt="Project 1"
            class="w-full h-full object-cover aspect-video"
          />
        </template>
        <template #body>
          <div class="flex items-center justify-between">
            <h3 class="text-black-500 text-sm">{{ project.title }}</h3>
            <Ui.UiPill>{{ t('landing.projects.featured') }}</Ui.UiPill>
          </div>
          <p class="text-slate-gray-500 text-sm mt-2">
            {{ project.description }}
          </p>
          <div class="flex items-center gap-2 mt-4">
            <Ui.UiPill variant="outline" v-for="tag in project.tags" :key="tag">{{
              tag
            }}</Ui.UiPill>
          </div>
          <div class="flex items-center gap-2 mt-3">
            <Ui.UiButton
              size="md"
              variant="primary"
              :href="project.links.view_project"
              v-if="project.links.view_project"
            >
              {{ t('landing.projects.view_project') }}
            </Ui.UiButton>
            <Ui.UiButton
              size="md"
              variant="secondary"
              :href="project.links.view_code"
              v-if="project.links.view_code"
            >
              {{ t('landing.projects.view_code') }}
            </Ui.UiButton>
          </div>
        </template>
      </Ui.UiCard>
    </div>
    <span class="text-sm text-black-500 text-center pb-6 pt-12 w-full block">{{
      t('landing.projects.other_projects')
    }}</span>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Ui.UiCard v-for="project in otherProjects" :key="project.title">
        <template #header>
          <img
            src="https://placehold.co/600x400"
            alt="Project 1"
            class="w-full h-full object-cover aspect-video"
          />
        </template>
        <template #body>
          <div class="flex items-center justify-between">
            <h3 class="text-black-500 text-sm">{{ project.title }}</h3>
          </div>
          <p class="text-slate-gray-500 text-xs mt-3">
            {{ project.description }}
          </p>
          <div class="flex items-center gap-2 mt-4">
            <Ui.UiPill variant="outline" v-for="tag in project.tags" :key="tag">{{
              tag
            }}</Ui.UiPill>
          </div>
          <div class="flex items-center gap-2 mt-3">
            <Ui.UiButton
              size="md"
              variant="secondary"
              class="w-full"
              v-if="project.links.view_project"
              :href="project.links.view_project"
            >
              {{ t('landing.projects.view_project') }}
            </Ui.UiButton>
            <Ui.UiButton
              size="md"
              variant="secondary"
              class="w-full"
              v-if="project.links.view_code"
              :href="project.links.view_code"
            >
              {{ t('landing.projects.view_code') }}
            </Ui.UiButton>
          </div>
        </template>
      </Ui.UiCard>
    </div>
  </UiContainer>
</template>
