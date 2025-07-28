<script setup lang="ts">
import { UiContainer } from '../layout'
import * as Ui from '../ui'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <div class="bg-snow-500">
    <UiContainer class="py-24">
      <Ui.UiSectionTitle
        title="Get In Touch"
        description="Have a project in mind or want to discuss opportunities? I'd love to hear from you!"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
        <div class="space-y-6">
          <h4 class="text-sm text-black-500">Let's connect</h4>
          <p class="text-sm text-slate-gray-500">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your visions. Feel free to reach out through any of the channels below.
          </p>
          <div class="space-y-5">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 aspect-square rounded-md bg-smoke-500 grid place-items-center">
                <FontAwesomeIcon :icon="faGithub" />
              </div>
              <div class="flex flex-col">
                <span class="text-xs text-slate-gray-500">Email</span>
                <span class="text-sm text-black-500">
                  <a href="mailto:kamil.bartczak2023@gmail.com"> kamil.bartczak2023@gmail.com </a>
                </span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 aspect-square rounded-md bg-smoke-500 grid place-items-center">
                <FontAwesomeIcon :icon="faGithub" />
              </div>
              <div class="flex flex-col">
                <span class="text-xs text-slate-gray-500">Email</span>
                <span class="text-sm text-black-500">
                  <a href="mailto:kamil.bartczak2023@gmail.com"> kamil.bartczak2023@gmail.com </a>
                </span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 aspect-square rounded-md bg-smoke-500 grid place-items-center">
                <FontAwesomeIcon :icon="faGithub" />
              </div>
              <div class="flex flex-col">
                <span class="text-xs text-slate-gray-500">Email</span>
                <span class="text-sm text-black-500">
                  <a href="mailto:kamil.bartczak2023@gmail.com"> kamil.bartczak2023@gmail.com </a>
                </span>
              </div>
            </div>
          </div>
          <span class="text-sm text-black-500">Follow me</span>
          <div class="flex items-center gap-4 mt-3">
            <Ui.UiButton variant="icon" class="bg-smoke-500 text-black-500" size="sm">
              <FontAwesomeIcon :icon="faGithub" />
            </Ui.UiButton>
            <Ui.UiButton variant="icon" class="bg-smoke-500 text-black-500" size="sm">
              <FontAwesomeIcon :icon="faGithub" />
            </Ui.UiButton>
            <Ui.UiButton variant="icon" class="bg-smoke-500 text-black-500" size="sm">
              <FontAwesomeIcon :icon="faGithub" />
            </Ui.UiButton>
          </div>
        </div>
        <div>
          <Ui.UiCard class="h-full py-4">
            <template #body>
              <div class="flex flex-col h-full gap-6">
                <div class="flex flex-col gap-1">
                  <span class="text-sm text-black-500">Send Message</span>
                  <p class="text-sm text-slate-gray-500">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>
                <div class="gap-4 my-auto grid grid-cols-2">
                  <Ui.UiInput label="Name" placeholder="Name" />
                  <Ui.UiInput label="Email" placeholder="Email" />
                  <Ui.UiInput label="Subject" placeholder="Subject" class="col-span-2" />
                  <Ui.UiInput label="Message" placeholder="Message" class="col-span-2" />
                </div>
                <div class="grid grid-cols-2">
                  <Ui.UiButton size="md" variant="primary" class="w-full col-span-2">
                    Send Message
                  </Ui.UiButton>
                </div>
              </div>
            </template>
          </Ui.UiCard>
        </div>
      </div>
    </UiContainer>
  </div>
</template>
