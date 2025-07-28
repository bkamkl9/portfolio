<script setup lang="ts">
import { UiContainer } from '../layout'
import * as Ui from '../ui'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const skills = [
  {
    id: 1,
    icon: faGithub,
    title: 'Frontend development',
    progress: [
      { id: 1, title: 'Vue.js', value: 95 },
      { id: 2, title: 'Typescript', value: 95 },
      { id: 3, title: 'Tailwind CSS', value: 70 },
      { id: 4, title: 'Nuxt.js', value: 80 },
    ],
    technologies: [
      'Vue.js',
      'Typescript',
      'Tailwind CSS',
      'Nuxt.js',
      'Pinia',
      'Deno',
      'Vite',
      'Sass',
      'Turborepo',
    ],
  },
  {
    id: 2,
    icon: faGithub,
    title: 'Backend development',
    progress: [
      { id: 1, title: 'Python', value: 60 },
      { id: 2, title: 'FastApi', value: 60 },
      { id: 3, title: 'Deno', value: 90 },
      { id: 4, title: 'Node.js', value: 70 },
    ],
    technologies: ['Python', 'FastApi', 'Deno', 'Node.js', 'Supabase'],
  },
  {
    id: 3,
    icon: faGithub,
    title: 'Database & Cloud',
    progress: [
      { id: 1, title: 'PostgreSQL', value: 60 },
      { id: 2, title: 'AWS', value: 30 },
      { id: 3, title: 'Google Cloud', value: 50 },
      { id: 4, title: 'Docker', value: 70 },
    ],
    technologies: [
      'PostgreSQL',
      'Supabase',
      'MongoDB',
      'Docker',
      'AWS',
      'Google Cloud',
      'Kubernetes',
      'CI/CD',
    ],
  },
  {
    id: 4,
    icon: faGithub,
    title: 'Tools & Processes',
    progress: [
      { id: 1, title: 'Software Architecture', value: 70 },
      { id: 2, title: 'Git/GitHub/GitLab', value: 80 },
      { id: 3, title: 'Testing', value: 80 },
      { id: 4, title: 'CI/CD', value: 50 },
    ],
    technologies: [
      'Software Architecture',
      'Git/GitHub/GitLab',
      'Playwright',
      'Hexagonal Architecture',
      'Monorepo',
      'Microservices',
    ],
  },
]
</script>

<template>
  <UiContainer class="py-24">
    <Ui.UiSectionTitle
      title="Skills & Expertise"
      description="A subjective overview of my technical skills and the tools I use to build exceptional software"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
      <Ui.UiCard v-for="skill in skills" :key="skill.id">
        <template #header>
          <div class="flex items-center gap-2 p-4">
            <FontAwesomeIcon :icon="skill.icon" />
            <h4 class="text-sm">{{ skill.title }}</h4>
          </div>
        </template>
        <template #body>
          <div class="flex flex-col gap-4 mb-4">
            <Ui.UiProgress
              v-for="progress in skill.progress"
              :key="progress.id"
              :value="progress.value"
              :title="progress.title"
            />
          </div>
          <div>
            <span class="text-xs text-black-500">Technologies</span>
            <div class="flex flex-wrap gap-2 mt-2">
              <Ui.UiPill
                variant="outline"
                v-for="technology in skill.technologies"
                :key="technology"
              >
                {{ technology }}
              </Ui.UiPill>
            </div>
          </div>
        </template>
      </Ui.UiCard>
    </div>
  </UiContainer>
</template>
