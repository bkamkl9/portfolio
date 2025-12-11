<script setup lang="ts">
import { UiAvatar, UiButton, UiSocialLinks } from '../ui'
import { UiContainer } from '../layout'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import kamil from '@/assets/images/kamil.jpg'
import { SOCIAL_LINKS } from '@/constants/socialLinks'

const { t } = useI18n()
</script>

<template>
  <section id="hero" class="relative bg-gradient-to-br from-white-500 to-snow-500 overflow-hidden">
    <UiContainer
      class="min-h-screen flex items-center justify-center relative pt-24 pb-8 md:pt-28 md:pb-12 lg:py-0"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
        <!-- Content Column -->
        <div
          class="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          <!-- Greeting -->
          <div
            class="inline-flex items-center gap-2 bg-smoke-500/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-xs text-slate-gray-500 font-medium">{{
              t('landing.hero.status')
            }}</span>
          </div>

          <!-- Main heading -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-black-500 mb-4 leading-tight">
            {{ t('landing.hero.heading') }}
          </h1>

          <!-- Subheading with gradient -->
          <h2
            class="text-xl md:text-2xl font-medium bg-gradient-to-r from-slate-gray-500 to-black-500 bg-clip-text text-transparent mb-6"
          >
            {{ t('landing.hero.subheading') }}
          </h2>

          <!-- Description -->
          <p class="text-lg text-slate-gray-500 mb-8 max-w-xl leading-relaxed">
            {{ t('landing.hero.paragraph') }}
          </p>

          <!-- Action buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
            <UiButton
              class="min-w-[180px] px-8 py-4 text-sm font-medium"
              size="lg"
              href="#projects"
            >
              <Icon icon="solar:eye-linear" class="w-4 h-4" />
              <span>{{ t('landing.hero.actions.view_my_work') }}</span>
            </UiButton>
            <UiButton
              class="min-w-[180px] px-8 py-4 text-sm font-medium"
              size="lg"
              variant="secondary"
              href="#contact"
            >
              <Icon icon="solar:chat-round-linear" class="w-4 h-4" />
              <span>{{ t('landing.hero.actions.contact_me') }}</span>
            </UiButton>
          </div>

          <!-- Social links with labels -->
          <div class="flex flex-col items-center lg:items-start gap-3">
            <span class="text-xs text-slate-gray-500 font-medium uppercase tracking-wider">{{
              t('landing.hero.connect')
            }}</span>
            <UiSocialLinks :links="SOCIAL_LINKS" variant="default" size="lg" />
          </div>
        </div>

        <!-- Avatar Column -->
        <div class="flex flex-col items-center order-1 lg:order-2">
          <div class="relative">
            <!-- Decorative rings -->
            <div
              class="absolute -inset-6 rounded-full bg-gradient-to-r from-gray-500/15 to-transparent animate-pulse"
            ></div>
            <div
              class="absolute -inset-3 rounded-full bg-gradient-to-r from-transparent via-gray-500/15 to-transparent animate-pulse"
            ></div>

            <!-- Main avatar -->
            <div class="relative">
              <UiAvatar
                size="xl"
                :image="kamil"
                class="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80"
              >
                <span class="text-4xl font-bold">KB</span>
              </UiAvatar>

              <!-- Status indicator -->
              <div
                class="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-green-500 rounded-full border-2 sm:border-3 md:border-4 border-white-500 flex items-center justify-center"
              >
                <Icon icon="solar:code-linear" class="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <!-- Tech stack indicators -->
          <div class="flex flex-wrap gap-3 mt-8 justify-center max-w-sm">
            <div
              class="flex items-center gap-2 bg-white-500/80 backdrop-blur-sm px-3 py-2 rounded-full border border-smoke-500"
            >
              <Icon icon="logos:vue" class="w-4 h-4" />
              <span class="text-xs font-medium text-slate-gray-700">Vue.js</span>
            </div>
            <div
              class="flex items-center gap-2 bg-white-500/80 backdrop-blur-sm px-3 py-2 rounded-full border border-smoke-500"
            >
              <Icon icon="logos:python" class="w-4 h-4" />
              <span class="text-xs font-medium text-slate-gray-700">Python</span>
            </div>
            <div
              class="flex items-center gap-2 bg-white-500/80 backdrop-blur-sm px-3 py-2 rounded-full border border-smoke-500"
            >
              <Icon icon="logos:nodejs-icon" class="w-4 h-4" />
              <span class="text-xs font-medium text-slate-gray-700">Node.js</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span class="text-xs text-slate-gray-500 font-medium">{{
          t('landing.hero.scroll_indicator')
        }}</span>
        <div class="w-6 h-10 border-2 border-slate-gray-500/30 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-slate-gray-500/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
