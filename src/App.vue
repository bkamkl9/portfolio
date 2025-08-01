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
  <Sections.UiExperienceSection />
  <Sections.UiContactSection />
  <Sections.UiFooterSection />
</template>
