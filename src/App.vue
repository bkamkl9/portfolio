<script setup lang="ts">
import * as Sections from './components/sections'
import { UiNavigationBar } from './components/sections'
</script>

<template>
  <UiNavigationBar />
  <Sections.UiHeroSection />
  <Sections.UiAboutMeSection />
  <Sections.UiSkillsSection />
  <Suspense>
    <Sections.UiProjectsSection />
  </Suspense>
  <Suspense>
    <Sections.UiExperienceSection />
  </Suspense>
  <Sections.UiContactSection />
  <Sections.UiFooterSection />
</template>
