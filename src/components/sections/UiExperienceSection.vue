<script setup lang="ts">
import { computed, ref } from 'vue'
import { UiContainer } from '../layout'
import * as Ui from '../ui'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const switchOptions = computed(() => [
  { label: t('landing.experience.sections.experience'), value: 'experience', icon: faGithub },
  { label: t('landing.experience.sections.education'), value: 'education', icon: faGithub },
  { label: t('landing.experience.sections.skills'), value: 'skills', icon: faGithub },
])
const selected = ref<string>(switchOptions.value[1].value)
</script>

<template>
  <div class="bg-snow-500">
    <UiContainer class="py-24">
      <Ui.UiSectionTitle
        :title="t('landing.experience.heading')"
        :description="t('landing.experience.paragraph')"
      />
      <Ui.UiSwitch v-model:selected="selected" :options="switchOptions" class="mb-12" />
      <div v-if="selected === 'experience'" class="space-y-4">
        <Ui.UiCard v-for="x in 3">
          <template #body>
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm flex flex-col space-y-0.5">
                <span class="text-black-500">Senior Full Stack Developer</span>
                <span class="text-slate-gray-500">TechCorp</span>
              </div>
              <div
                class="text-sm flex flex-col items-end text-slate-gray-500 text-xs space-y-0.5 whitespace-nowrap"
              >
                <span>San Francisco, CA </span>
                <span>2022 - Present</span>
              </div>
            </div>
            <p class="text-sm text-slate-gray-500 mb-2">
              Lead development of multiple client projects using React, Node.js, and AWS. Mentored
              junior developers and architected scalable solutions for enterprise clients.
            </p>
            <span class="text-xs text-black-500">Key Achievements:</span>
            <ul class="list-inside text-xs text-slate-gray-500 mt-1 space-y-1">
              <li>
                <span class="text-black-500 font-bold">•</span> Led a team of 4 developers on a $2M
                project
              </li>
              <li>
                <span class="text-black-500 font-bold">•</span> Reduced application load time by 60%
                through optimization
              </li>
              <li>
                <span class="text-black-500 font-bold">•</span> Implemented CI/CD pipeline reducing
                deployment time by 80%
              </li>
            </ul>
            <div class="mt-4 flex flex-wrap gap-2">
              <Ui.UiPill variant="outline">Vue</Ui.UiPill>
              <Ui.UiPill variant="outline">Typescript</Ui.UiPill>
              <Ui.UiPill variant="outline">Node.js & Express</Ui.UiPill>
            </div>
          </template>
        </Ui.UiCard>
      </div>
      <div v-if="selected === 'education'" class="space-y-4">
        <Ui.UiCard v-for="x in 2">
          <template #body>
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm flex flex-col space-y-0.5">
                <span class="text-black-500">Senior Full Stack Developer</span>
                <span class="text-slate-gray-500">TechCorp</span>
              </div>
              <div
                class="text-sm flex flex-col items-end text-slate-gray-500 text-xs space-y-0.5 whitespace-nowrap"
              >
                <span>San Francisco, CA </span>
                <span>2022 - {{ t('landing.experience.timeline_present') }}</span>
              </div>
            </div>
            <p class="text-sm text-slate-gray-500 mb-2">
              Lead development of multiple client projects using React, Node.js, and AWS. Mentored
              junior developers and architected scalable solutions for enterprise clients.
            </p>
            <span class="text-xs text-black-500"
              >{{ t('landing.experience.key_achievements') }}:</span
            >
            <ul class="list-inside text-xs text-slate-gray-500 mt-1 space-y-1">
              <li>
                <span class="text-black-500 font-bold">•</span> Led a team of 4 developers on a $2M
                project
              </li>
              <li>
                <span class="text-black-500 font-bold">•</span> Reduced application load time by 60%
                through optimization
              </li>
              <li>
                <span class="text-black-500 font-bold">•</span> Implemented CI/CD pipeline reducing
                deployment time by 80%
              </li>
            </ul>
          </template>
        </Ui.UiCard>
      </div>
      <div v-if="selected === 'skills'" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Ui.UiCard v-for="x in 2">
          <template #body>
            <div class="flex flex-col space-y-0.5 p-2">
              <span class="text-black-500 text-sm font-medium"
                >Google Cloud Professional Developer
              </span>
              <span class="text-slate-gray-500 text-xs mt-1">Google Cloud</span>

              <span class="text-slate-gray-500 text-xs mt-5">
                {{ t('landing.experience.certification_issued') }}: 2022
              </span>
              <span class="text-slate-gray-500 text-[0.65rem]">Credential ID: GCP-PD-67890</span>
            </div>
          </template>
        </Ui.UiCard>
      </div>
    </UiContainer>
  </div>
</template>
