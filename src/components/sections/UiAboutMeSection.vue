<script setup lang="ts">
import { UiContainer } from '../layout'
import * as Ui from '../ui'
import { useI18n } from 'vue-i18n'
import kamil from '@/assets/images/kamil.jpg'

const { t } = useI18n()
</script>

<template>
  <UiContainer class="py-24">
    <Ui.UiSectionTitle
      :title="t('landing.about.heading')"
      :description="t('landing.about.paragraph')"
    />
    <div class="grid grid-cols-1 grid-cols-1 xl:grid-cols-2 gap-6">
      <div class="bg-smoke-500 py-24 xl:aspect-square rounded-lg flex items-center justify-center">
        <Ui.UiAvatar size="lg" :image="kamil">
          <span class="text-xl font-medium">KB</span>
        </Ui.UiAvatar>
      </div>
      <div class="flex flex-col justify-center">
        <div class="mb-6">
          <h3 class="font-medium text-md mb-4 text-black-500">{{ t('landing.about.my_story') }}</h3>
          <p class="text-sm text-slate-gray-500 mb-4">
            {{ t('landing.about.my_story_paragraph_0') }}
          </p>
          <p class="text-sm text-slate-gray-500">
            {{ t('landing.about.my_story_paragraph_1') }}
          </p>
        </div>
        <div>
          <h3 class="text-sm text-black-500 mb-3">{{ t('landing.about.my_passions') }}</h3>
          <div class="flex flex-wrap gap-2 mb-6">
            <Ui.UiPill>Web Development</Ui.UiPill>
            <Ui.UiPill>UI/UX Design</Ui.UiPill>
            <Ui.UiPill>Generative AI</Ui.UiPill>
            <Ui.UiPill>Software Architecture</Ui.UiPill>
            <Ui.UiPill>Techno</Ui.UiPill>
            <Ui.UiPill>Greek mythology</Ui.UiPill>
            <Ui.UiPill>Reading</Ui.UiPill>
            <Ui.UiPill>Science</Ui.UiPill>
          </div>
          <Ui.UiCard>
            <template #body>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex flex-col items-center justify-center">
                  <span class="text-xl mb-1">15+</span>
                  <span class="text-xs text-slate-gray-500">
                    {{ t('landing.about.stats.projects_completed') }}
                  </span>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <span class="text-xl mb-1">5+</span>
                  <span class="text-xs text-slate-gray-500">
                    {{ t('landing.about.stats.years_of_experience') }}
                  </span>
                </div>
              </div>
            </template>
          </Ui.UiCard>
        </div>
      </div>
    </div>
  </UiContainer>
</template>
