<script setup lang="ts">
import { UiContainer } from '../layout'
import * as Ui from '../ui'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="bg-snow-500">
    <UiContainer class="py-24">
      <Ui.UiSectionTitle
        :title="t('landing.contact.heading')"
        :description="t('landing.contact.paragraph')"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
        <div class="space-y-6">
          <h3 class="text-sm text-black-500">{{ t('landing.contact.lets_connect') }}</h3>
          <p class="text-sm text-slate-gray-500">
            {{ t('landing.contact.lests_connect_paragraph') }}
          </p>
          <div class="space-y-5">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 aspect-square rounded-md bg-smoke-500 grid place-items-center">
                <FontAwesomeIcon :icon="faGithub" />
              </div>
              <div class="flex flex-col">
                <span class="text-xs text-slate-gray-500">{{ t('landing.contact.email') }}</span>
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
                <span class="text-xs text-slate-gray-500">{{ t('landing.contact.phone') }}</span>
                <span class="text-sm text-black-500">
                  <a href="tel:+48726033373"> +48 726 033 373 </a>
                </span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 aspect-square rounded-md bg-smoke-500 grid place-items-center">
                <FontAwesomeIcon :icon="faGithub" />
              </div>
              <div class="flex flex-col">
                <span class="text-xs text-slate-gray-500">{{ t('landing.contact.location') }}</span>
                <span class="text-sm text-black-500">
                  <a href="https://maps.app.goo.gl/1234567890"> Zielona Góra, Poland </a>
                </span>
              </div>
            </div>
          </div>
          <span class="text-sm text-black-500">{{ t('landing.contact.follow_me') }}</span>
          <div class="flex items-center gap-4 mt-3">
            <Ui.UiButton
              variant="icon"
              class="bg-smoke-500 text-black-500"
              size="sm"
              title="Github"
            >
              <FontAwesomeIcon :icon="faGithub" />
            </Ui.UiButton>
            <Ui.UiButton
              variant="icon"
              class="bg-smoke-500 text-black-500"
              size="sm"
              title="Linkedin"
            >
              <FontAwesomeIcon :icon="faGithub" />
            </Ui.UiButton>
            <Ui.UiButton
              variant="icon"
              class="bg-smoke-500 text-black-500"
              size="sm"
              title="Medium"
            >
              <FontAwesomeIcon :icon="faGithub" />
            </Ui.UiButton>
          </div>
        </div>
        <div>
          <Ui.UiCard class="h-full py-4">
            <template #body>
              <div class="flex flex-col h-full gap-6">
                <div class="flex flex-col gap-1">
                  <span class="text-sm text-black-500">{{ t('landing.contact.form.title') }}</span>
                  <p class="text-sm text-slate-gray-500">
                    {{ t('landing.contact.form.paragraph') }}
                  </p>
                </div>
                <div class="gap-4 my-auto grid grid-cols-2">
                  <Ui.UiInput
                    id="form-name"
                    :label="t('landing.contact.form.name')"
                    :placeholder="t('landing.contact.form.name')"
                  />
                  <Ui.UiInput
                    id="form-email"
                    :label="t('landing.contact.form.email')"
                    :placeholder="t('landing.contact.form.email')"
                  />
                  <Ui.UiInput
                    id="form-subject"
                    :label="t('landing.contact.form.subject')"
                    :placeholder="t('landing.contact.form.subject')"
                    class="col-span-2"
                  />
                  <Ui.UiInput
                    id="form-message"
                    :label="t('landing.contact.form.message')"
                    :placeholder="t('landing.contact.form.message')"
                    class="col-span-2"
                  />
                </div>
                <div class="grid grid-cols-2">
                  <Ui.UiButton size="md" variant="primary" class="w-full col-span-2">
                    {{ t('landing.contact.form.send') }}
                  </Ui.UiButton>
                </div>
              </div>
            </template>
          </Ui.UiCard>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
