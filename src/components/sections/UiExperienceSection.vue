<script setup lang="ts">
import { computed, ref } from 'vue'
import { UiContainer } from '../layout'
import * as Ui from '../ui'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useI18n } from 'vue-i18n'
import useContent from '@/composable/useContent'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
const content = await useContent('experience')

const switchOptions = computed(() => [
  { label: t('landing.experience.sections.experience'), value: 'experience', icon: faGithub },
  { label: t('landing.experience.sections.education'), value: 'education', icon: faGithub },
  { label: t('landing.experience.sections.skills'), value: 'skills', icon: faGithub },
])
const selected = ref<string>(switchOptions.value[1].value)
</script>

<template>
  <section id="experience" class="bg-snow-500">
    <UiContainer class="py-24">
      <Ui.UiSectionTitle
        :title="t('landing.experience.heading')"
        :description="t('landing.experience.paragraph')"
      />
      <Ui.UiSwitch v-model:selected="selected" :options="switchOptions" class="mb-12" />
      <div v-if="selected === 'experience'" class="space-y-4">
        <Ui.UiCard v-for="experience in content.experience">
          <template #body>
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm flex flex-col space-y-0.5">
                <span class="text-black-500">{{ experience.title }}</span>
                <span class="text-slate-gray-500">{{ experience.company }}</span>
              </div>
              <div
                class="text-sm flex flex-col items-end text-slate-gray-500 text-xs space-y-0.5 whitespace-nowrap"
              >
                <span>{{ experience.location }}</span>
                <span>{{ experience.date }}</span>
              </div>
            </div>
            <p class="text-sm text-slate-gray-500 mb-2">
              {{ experience.description }}
            </p>
            <span class="text-xs text-black-500"
              >{{ t('landing.experience.key_achievements') }}:</span
            >
            <ul class="list-inside text-xs text-slate-gray-500 mt-1 space-y-1">
              <li v-for="achievement in experience.achievements" :key="achievement">
                <span class="text-black-500 font-bold">•</span> {{ achievement }}
              </li>
            </ul>
            <div class="mt-4 flex flex-wrap gap-2">
              <Ui.UiPill variant="outline" v-for="tag in experience.tags" :key="tag">{{
                tag
              }}</Ui.UiPill>
            </div>
          </template>
        </Ui.UiCard>
      </div>
      <div v-if="selected === 'education'" class="space-y-4">
        <Ui.UiCard v-for="education in content.education">
          <template #body>
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm flex flex-col space-y-0.5">
                <span class="text-black-500">{{ education.title }}</span>
                <span class="text-slate-gray-500">{{ education.school }}</span>
              </div>
              <div
                class="text-sm flex flex-col items-end text-slate-gray-500 text-xs space-y-0.5 whitespace-nowrap"
              >
                <span>{{ education.location }}</span>
                <span>{{ education.date }}</span>
              </div>
            </div>
            <p class="text-sm text-slate-gray-500 mb-2">
              {{ education.description }}
            </p>
            <span class="text-xs text-black-500"
              >{{ t('landing.experience.key_achievements') }}:</span
            >
            <ul class="list-inside text-xs text-slate-gray-500 mt-1 space-y-1">
              <li v-for="achievement in education.achievements" :key="achievement">
                <span class="text-black-500 font-bold">•</span> {{ achievement }}
              </li>
            </ul>
          </template>
        </Ui.UiCard>
      </div>
      <div v-if="selected === 'skills'" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Ui.UiCard v-for="skill in content.skills">
          <template #body>
            <div class="flex flex-col space-y-0.5 p-2">
              <span class="text-black-500 text-sm font-medium">{{ skill.certification }} </span>
              <span class="text-slate-gray-500 text-xs mt-1">{{ skill.subject }}</span>

              <span class="text-slate-gray-500 text-xs mt-5">
                {{ t('landing.experience.certification_issued') }}: {{ skill.year }}
              </span>
              <span class="text-slate-gray-500 text-[0.65rem]"
                >Credential ID: {{ skill.credential_id }}</span
              >
            </div>
          </template>
        </Ui.UiCard>
      </div>
      <div
        class="col-span-3 rounded-lg border border-smoke-500 px-4 py-6 text-center bg-secondary-bg mt-8"
      >
        <span class="text-black-500 text-sm font-medium flex items-center justify-center gap-2">
          <Icon icon="mingcute:certificate-fill" class="text-lg" />
          {{ t('landing.experience.continuous_learning.title') }}
        </span>
        <p class="text-slate-gray-500 text-xs mt-4 max-w-lg mx-auto leading-relaxed">
          {{ t('landing.experience.continuous_learning.description') }}
        </p>
      </div>
    </UiContainer>
  </section>
</template>
