<script setup lang="ts">
import { UiAvatar, UiButton } from '../ui'
import { UiContainer } from '../layout'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { useI18n } from 'vue-i18n'
import kamil from '@/assets/images/kamil.jpg'

const { t } = useI18n()
</script>

<template>
  <section id="hero" class="bg-white-500">
    <UiContainer class="min-h-screen grid place-items-center">
      <div class="flex flex-col items-center">
        <UiAvatar class="mb-6" :image="kamil">
          <span>KB</span>
        </UiAvatar>
        <h1 class="text-center text-sm mb-6 text-black-500">{{ t('landing.hero.heading') }}</h1>
        <h2 class="text-center text-sm mb-6 text-slate-gray-500">
          {{ t('landing.hero.subheading') }}
        </h2>
        <p class="text-center mb-6 max-w-2xl mx-auto text-slate-gray-500">
          {{ t('landing.hero.paragraph') }}
        </p>
        <div class="flex flex-wrap gap-x-6 gap-y-4 justify-center mb-6">
          <UiButton class="min-w-[160px]" size="lg">
            <span>{{ t('landing.hero.actions.view_my_work') }}</span>
          </UiButton>
          <UiButton class="min-w-[160px]" size="lg" variant="secondary">
            <span>{{ t('landing.hero.actions.contact_me') }}</span>
          </UiButton>
        </div>
        <div class="flex flex-wrap gap-2 justify-center">
          <UiButton variant="icon" title="Github">
            <FontAwesomeIcon :icon="faGithub" />
          </UiButton>
          <UiButton variant="icon" title="Linkedin">
            <FontAwesomeIcon :icon="faLinkedin" />
          </UiButton>
          <UiButton variant="icon" title="Medium">
            <FontAwesomeIcon :icon="faMedium" />
          </UiButton>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
