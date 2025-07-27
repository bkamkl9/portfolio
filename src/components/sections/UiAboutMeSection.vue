<script setup lang="ts">
import { UiContainer } from '../layout'
import * as Ui from '../ui'
</script>

<template>
  <UiContainer class="py-12">
    <div class="text-center mb-12">
      <h2 class="font-medium text-md mb-2">About me</h2>
      <p class="text-sm text-slate-gray-500">
        Learn more about my journey, passions, and what drives me as a developer
      </p>
    </div>
    <div class="grid grid-cols-1 grid-cols-1 xl:grid-cols-2 gap-6">
      <div class="bg-smoke-500 py-24 xl:aspect-square rounded-lg flex items-center justify-center">
        <Ui.UiAvatar size="lg">
          <span class="text-xl font-medium">KB</span>
        </Ui.UiAvatar>
      </div>
      <div class="flex flex-col justify-center">
        <div class="mb-6">
          <h3 class="font-medium text-md mb-4 text-black-500">My Story</h3>
          <p class="text-sm text-slate-gray-500 mb-4">
            With over 5 years of experience in software development, I've had the privilege of
            working on diverse projects ranging from startups to enterprise solutions. My journey
            began with a curiosity about how things work, which evolved into a passion for creating
            digital experiences that solve real-world problems.
          </p>
          <p class="text-sm text-slate-gray-500">
            I believe in writing clean, maintainable code and staying current with emerging
            technologies. When I'm not coding, you'll find me contributing to open source projects,
            mentoring aspiring developers, or exploring the latest in AI and machine learning.
          </p>
        </div>
        <div>
          <h3 class="text-sm text-black-500 mb-3">What I'm passionate about</h3>
          <div class="flex flex-wrap gap-2 mb-6">
            <Ui.UiPill>Web Development</Ui.UiPill>
            <Ui.UiPill>Mobile Development</Ui.UiPill>
            <Ui.UiPill>UI/UX Design</Ui.UiPill>
            <Ui.UiPill>AI/ML</Ui.UiPill>
            <Ui.UiPill>Open Source</Ui.UiPill>
            <Ui.UiPill>UI/UX Design</Ui.UiPill>
            <Ui.UiPill>AI/ML</Ui.UiPill>
            <Ui.UiPill>Open Source</Ui.UiPill>
          </div>
          <Ui.UiCard>
            <template #body>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex flex-col items-center justify-center">
                  <span class="text-xl mb-1">15+</span>
                  <span class="text-xs text-slate-gray-500">Projects compleated</span>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <span class="text-xl mb-1">5+</span>
                  <span class="text-xs text-slate-gray-500">Years Experience</span>
                </div>
              </div>
            </template>
          </Ui.UiCard>
        </div>
      </div>
    </div>
  </UiContainer>
</template>
