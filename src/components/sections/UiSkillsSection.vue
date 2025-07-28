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
      { id: 1, title: 'Vue.js', value: 80 },
      { id: 2, title: 'React', value: 80 },
      { id: 3, title: 'Angular', value: 80 },
      { id: 4, title: 'Node.js', value: 80 },
    ],
    technologies: ['Vue.js', 'React', 'Angular', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 2,
    icon: faGithub,
    title: 'Frontend development',
    progress: [
      { id: 1, title: 'Vue.js', value: 80 },
      { id: 2, title: 'React', value: 80 },
      { id: 3, title: 'Angular', value: 80 },
      { id: 4, title: 'Node.js', value: 80 },
    ],
    technologies: ['Vue.js', 'React', 'Angular', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 3,
    icon: faGithub,
    title: 'Frontend development',
    progress: [
      { id: 1, title: 'Vue.js', value: 80 },
      { id: 2, title: 'React', value: 80 },
      { id: 3, title: 'Angular', value: 80 },
      { id: 4, title: 'Node.js', value: 80 },
    ],
    technologies: ['Vue.js', 'React', 'Angular', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 4,
    icon: faGithub,
    title: 'Frontend development',
    progress: [
      { id: 1, title: 'Vue.js', value: 80 },
      { id: 2, title: 'React', value: 80 },
      { id: 3, title: 'Angular', value: 80 },
      { id: 4, title: 'Node.js', value: 80 },
    ],
    technologies: ['Vue.js', 'React', 'Angular', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
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
