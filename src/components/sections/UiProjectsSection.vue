<script setup lang="ts">
import * as Ui from '../ui'
import { UiContainer } from '../layout'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <UiContainer class="py-24">
    <Ui.UiSectionTitle
      :title="t('landing.projects.heading')"
      :description="t('landing.projects.paragraph')"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Ui.UiCard>
        <template #header>
          <img
            src="https://placehold.co/600x400"
            alt="Project 1"
            class="w-full h-full object-cover aspect-video"
          />
        </template>
        <template #body>
          <div class="flex items-center justify-between">
            <h3 class="text-black-500 text-sm">E-Commerce Platform</h3>
            <Ui.UiPill>{{ t('landing.projects.featured') }}</Ui.UiPill>
          </div>
          <p class="text-slate-gray-500 text-sm mt-2">
            A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include
            user authentication, payment processing, inventory management, and admin dashboard.
          </p>
          <div class="flex items-center gap-2 mt-4">
            <Ui.UiPill variant="outline">React</Ui.UiPill>
            <Ui.UiPill variant="outline">Node.js</Ui.UiPill>
            <Ui.UiPill variant="outline">PostgreSQL</Ui.UiPill>
          </div>
          <div class="flex items-center gap-2 mt-3">
            <Ui.UiButton size="md" variant="primary">{{
              t('landing.projects.view_project')
            }}</Ui.UiButton>
            <Ui.UiButton size="md" variant="secondary">{{
              t('landing.projects.view_code')
            }}</Ui.UiButton>
          </div>
        </template>
      </Ui.UiCard>
      <Ui.UiCard>
        <template #header>
          <img
            src="https://placehold.co/600x400"
            alt="Project 1"
            class="w-full h-full object-cover aspect-video"
          />
        </template>
        <template #body>
          <div class="flex items-center justify-between">
            <h3 class="text-black-500 text-sm">E-Commerce Platform</h3>
            <Ui.UiPill>{{ t('landing.projects.featured') }}</Ui.UiPill>
          </div>
          <p class="text-slate-gray-500 text-sm mt-2">
            A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include
            user authentication, payment processing, inventory management, and admin dashboard.
          </p>
          <div class="flex items-center gap-2 mt-4">
            <Ui.UiPill variant="outline">React</Ui.UiPill>
            <Ui.UiPill variant="outline">Node.js</Ui.UiPill>
            <Ui.UiPill variant="outline">PostgreSQL</Ui.UiPill>
          </div>
          <div class="flex items-center gap-2 mt-3">
            <Ui.UiButton size="md" variant="primary">{{
              t('landing.projects.view_project')
            }}</Ui.UiButton>
            <Ui.UiButton size="md" variant="secondary">{{
              t('landing.projects.view_code')
            }}</Ui.UiButton>
          </div>
        </template>
      </Ui.UiCard>
    </div>
    <span class="text-sm text-black-500 text-center pb-6 pt-12 w-full block">{{
      t('landing.projects.other_projects')
    }}</span>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Ui.UiCard v-for="x in 4" :key="x">
        <template #header>
          <img
            src="https://placehold.co/600x400"
            alt="Project 1"
            class="w-full h-full object-cover aspect-video"
          />
        </template>
        <template #body>
          <div class="flex items-center justify-between">
            <h3 class="text-black-500 text-sm">E-Commerce Platform</h3>
          </div>
          <p class="text-slate-gray-500 text-xs mt-3">
            A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include
            user authentication, payment processing, inventory management, and admin dashboard.
          </p>
          <div class="flex items-center gap-2 mt-4">
            <Ui.UiPill variant="outline">React</Ui.UiPill>
            <Ui.UiPill variant="outline">Node.js</Ui.UiPill>
            <Ui.UiPill variant="outline">PostgreSQL</Ui.UiPill>
          </div>
          <div class="flex items-center gap-2 mt-3">
            <Ui.UiButton size="md" variant="secondary" class="w-full">{{
              t('landing.projects.view_project')
            }}</Ui.UiButton>
            <Ui.UiButton size="md" variant="secondary" class="w-full">{{
              t('landing.projects.view_code')
            }}</Ui.UiButton>
          </div>
        </template>
      </Ui.UiCard>
    </div>
  </UiContainer>
</template>
