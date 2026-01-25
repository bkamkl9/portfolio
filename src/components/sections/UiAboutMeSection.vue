<script setup lang="ts">
import { UiContainer } from '../layout'
import * as Ui from '../ui'
import { useI18n } from 'vue-i18n'
import kamil from '@/assets/images/kamil.jpg'
// Types
interface Interest {
  name: string
  category: 'tech' | 'personal'
}

const { t } = useI18n()

// Interests data - structured and typed
const interests: Interest[] = [
  { name: 'Web Development', category: 'tech' },
  { name: 'UI/UX Design', category: 'tech' },
  { name: 'Generative AI', category: 'tech' },
  { name: 'Software Architecture', category: 'tech' },
  { name: 'Techno', category: 'personal' },
  { name: 'Greek mythology', category: 'personal' },
  { name: 'Reading', category: 'personal' },
  { name: 'Science', category: 'personal' },
]
</script>

<template>
  <section id="about">
    <UiContainer class="py-24">
      <Ui.UiSectionTitle
        :title="t('landing.about.heading')"
        :description="t('landing.about.paragraph')"
      />
      <div class="grid grid-cols-1 grid-cols-1 xl:grid-cols-2 gap-6">
        <div
          id="about-avatar"
          class="py-24 xl:aspect-square rounded-lg flex items-center justify-center"
        >
          <Ui.UiAvatar size="lg" :image="kamil">
            <span class="text-xl font-medium">KB</span>
          </Ui.UiAvatar>
        </div>
        <div class="flex flex-col justify-center">
          <div class="mb-6">
            <h3 class="font-medium text-md mb-4 text-black-500">
              {{ t('landing.about.my_story') }}
            </h3>
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
              <Ui.UiPill
                v-for="interest in interests"
                :key="interest.name"
                :variant="interest.category === 'tech' ? 'default' : 'outline'"
              >
                {{ interest.name }}
              </Ui.UiPill>
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
  </section>
</template>

<style scoped>
#about-avatar {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('@/assets/images/velvet-brown.avif');
}
</style>
