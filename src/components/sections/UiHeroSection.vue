<script setup lang="ts">
import { UiAvatar, UiButton } from '../ui'
import { UiContainer } from '../layout'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <div class="bg-white-500">
    <UiContainer class="min-h-screen grid place-items-center">
      <div class="flex flex-col items-center">
        <UiAvatar class="mb-6">
          <span>KB</span>
        </UiAvatar>
        <h1 class="text-center text-sm mb-6 text-black-500">Hi, I'm Kamil Bartczak</h1>
        <h2 class="text-center text-sm mb-6 text-slate-gray-500">
          Full Stack Developer & Software Engineer
        </h2>
        <p class="text-center mb-6 max-w-2xl mx-auto text-slate-gray-500">
          I create exceptional digital experiences through clean, efficient code and innovative
          solutions. Passionate about building scalable applications that make a difference.
        </p>
        <div class="flex flex-wrap gap-x-6 gap-y-4 justify-center mb-6">
          <UiButton class="min-w-[160px]" size="lg">
            <span>View my work</span>
          </UiButton>
          <UiButton class="min-w-[160px]" size="lg" variant="secondary">
            <span>Contact me</span>
          </UiButton>
        </div>
        <div class="flex flex-wrap gap-2 justify-center">
          <UiButton variant="icon">
            <FontAwesomeIcon :icon="faGithub" />
          </UiButton>
          <UiButton variant="icon">
            <FontAwesomeIcon :icon="faLinkedin" />
          </UiButton>
        </div>
      </div>
    </UiContainer>
  </div>
</template>
