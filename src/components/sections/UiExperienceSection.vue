<script setup lang="ts">
import { ref } from 'vue'
import { UiContainer } from '../layout'
import * as Ui from '../ui'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const switchOptions = [
  { label: 'Experience', value: 'experience', icon: faGithub },
  { label: 'Education', value: 'education', icon: faGithub },
  { label: 'Skills', value: 'skills', icon: faGithub },
]
const selected = ref<string>(switchOptions[1].value)
</script>

<template>
  <UiContainer class="py-24">
    <Ui.UiSectionTitle
      title="Experience & Education"
      description="My professional journey, educational background, and continuous learning achievements"
    />
    <Ui.UiSwitch v-model:selected="selected" :options="switchOptions" />
  </UiContainer>
</template>
