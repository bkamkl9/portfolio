<script setup lang="ts">
import { computed, ref } from 'vue'
import { UiContainer } from '../layout'
import * as Ui from '../ui'
import { useI18n } from 'vue-i18n'
import useContent from '@/composable/useContent'
import { Icon } from '@iconify/vue'
import backgroundImageUrl from '@/assets/images/bg-gradient-3.png?url'

const { t } = useI18n()
const content = await useContent('experience')

const switchOptions = computed(() => [
  {
    label: t('landing.experience.sections.experience'),
    value: 'experience',
    icon: 'mdi:briefcase',
  },
  {
    label: t('landing.experience.sections.education'),
    value: 'education',
    icon: 'mdi:school',
  },
  {
    label: t('landing.experience.sections.skills'),
    value: 'skills',
    icon: 'mdi:certificate',
  },
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
        <Ui.UiExperienceCard
          v-for="experience in content.experience"
          :key="experience.title"
          :item="experience"
          type="experience"
        />
      </div>
      <div v-if="selected === 'education'" class="space-y-4">
        <Ui.UiExperienceCard
          v-for="education in content.education"
          :key="education.title"
          :item="education"
          type="education"
        />
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
        :style="{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <span class="text-black-500 text-sm font-medium flex items-center justify-center gap-2">
          <Icon icon="mingcute:certificate-fill" class="text-lg" />
          {{ t('landing.experience.continuous_learning.title') }}
        </span>
        <p class="text-slate-gray-700 text-xs mt-4 max-w-lg mx-auto leading-relaxed">
          {{ t('landing.experience.continuous_learning.description') }}
        </p>
      </div>
    </UiContainer>
  </section>
</template>
