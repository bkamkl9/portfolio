<script setup lang="ts">
import * as Ui from '../ui'
import { UiContainer } from '../layout'
</script>

<template>
  <UiContainer class="py-24">
    <Ui.UiSectionTitle
      title="Featured Projects"
      description="A selection of projects I've worked on, showcasing different technologies and problem-solving approaches"
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
            <Ui.UiPill>Featured</Ui.UiPill>
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
            <Ui.UiButton size="md" variant="primary">View Project</Ui.UiButton>
            <Ui.UiButton size="md" variant="secondary">View Code</Ui.UiButton>
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
            <Ui.UiPill>Featured</Ui.UiPill>
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
            <Ui.UiButton size="md" variant="primary">View Project</Ui.UiButton>
            <Ui.UiButton size="md" variant="secondary">View Code</Ui.UiButton>
          </div>
        </template>
      </Ui.UiCard>
    </div>
    <span class="text-sm text-black-500 text-center pb-6 pt-12 w-full block">Other projects</span>
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
            <Ui.UiButton size="md" variant="secondary" class="w-full">View Project</Ui.UiButton>
            <Ui.UiButton size="md" variant="secondary" class="w-full">View Code</Ui.UiButton>
          </div>
        </template>
      </Ui.UiCard>
    </div>
  </UiContainer>
</template>
