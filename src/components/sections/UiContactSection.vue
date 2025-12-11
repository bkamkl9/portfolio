<script setup lang="ts">
import { ref, reactive } from 'vue'
import { UiContainer } from '../layout'
import * as Ui from '../ui'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

// Types
interface ContactInfo {
  type: 'email' | 'phone' | 'location'
  label: string
  value: string
  href: string
  icon: string
  backgroundColor: string
}

interface SocialLink {
  name: string
  href: string
  icon: string
  ariaLabel: string
}

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// Composables
const { t } = useI18n()

// Form State
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const formErrorKey = ref('')

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Contact Information
const contactInfo: ContactInfo[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'kamil.bartczak2023@gmail.com',
    href: 'mailto:kamil.bartczak2023@gmail.com',
    icon: 'solar:letter-linear',
    backgroundColor: 'bg-pink-300',
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+48 726 033 373',
    href: 'tel:+48726033373',
    icon: 'solar:phone-linear',
    backgroundColor: 'bg-orange-300',
  },
  {
    type: 'location',
    label: 'Location',
    value: 'Zielona Góra, Poland',
    href: 'https://maps.google.com/?q=Zielona+Góra,+Poland',
    icon: 'solar:map-point-linear',
    backgroundColor: 'bg-blue-300',
  },
]

// Social Links
const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/bkamkl9',
    icon: 'mdi:github',
    ariaLabel: "Visit Kamil's GitHub profile",
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kamil-bartczak-dev/',
    icon: 'mdi:linkedin',
    ariaLabel: "Visit Kamil's LinkedIn profile",
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@kamilbartczak2023',
    icon: 'mdi:medium',
    ariaLabel: "Visit Kamil's Medium blog",
  },
]

// Form Methods
const validateForm = (): boolean => {
  if (!form.name.trim()) {
    formErrorKey.value = 'landing.contact.form.validation.name_required'
    return false
  }
  if (!form.email.trim()) {
    formErrorKey.value = 'landing.contact.form.validation.email_required'
    return false
  }
  if (!isValidEmail(form.email)) {
    formErrorKey.value = 'landing.contact.form.validation.email_invalid'
    return false
  }
  if (!form.subject.trim()) {
    formErrorKey.value = 'landing.contact.form.validation.subject_required'
    return false
  }
  if (!form.message.trim()) {
    formErrorKey.value = 'landing.contact.form.validation.message_required'
    return false
  }
  formErrorKey.value = ''
  return true
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  formErrorKey.value = ''

  try {
    // Create mailto link with form data
    const subject = encodeURIComponent(form.subject)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )
    const mailtoLink = `mailto:kamil.bartczak2023@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Reset form after short delay
    setTimeout(() => {
      Object.assign(form, { name: '', email: '', subject: '', message: '' })
      isSubmitted.value = true
      isSubmitting.value = false

      // Hide success message after 3 seconds
      setTimeout(() => {
        isSubmitted.value = false
      }, 3000)
    }, 500)
  } catch (error) {
    console.error('Error submitting form:', error)
    formErrorKey.value = 'landing.contact.form.validation.submission_error'
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="bg-snow-500" aria-labelledby="contact-heading">
    <UiContainer class="py-24">
      <Ui.UiSectionTitle
        id="contact-heading"
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
            <div v-for="contact in contactInfo" :key="contact.type" class="flex items-center gap-4">
              <a
                :href="contact.href"
                :target="contact.type === 'location' ? '_blank' : undefined"
                :rel="contact.type === 'location' ? 'noopener noreferrer' : undefined"
                class="flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                :aria-label="`Contact via ${contact.label}: ${contact.value}`"
              >
                <div
                  class="w-10 h-10 aspect-square rounded-md grid place-items-center"
                  :class="contact.backgroundColor"
                >
                  <Icon :icon="contact.icon" />
                </div>
                <div class="flex flex-col">
                  <span class="text-xs text-slate-gray-500">{{
                    t(`landing.contact.${contact.type}`)
                  }}</span>
                  <span class="text-sm text-black-500">
                    {{ contact.value }}
                  </span>
                </div>
              </a>
            </div>
          </div>
          <span class="text-sm text-black-500">{{ t('landing.contact.follow_me') }}</span>
          <div class="flex items-center gap-4 mt-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              :aria-label="social.ariaLabel"
              :title="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 bg-smoke-500 text-black-500 hover:bg-black-500 hover:text-white-500 rounded-md flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Icon :icon="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <Ui.UiCard class="h-full">
            <template #body>
              <form @submit.prevent="submitForm" class="flex flex-col h-full gap-6" novalidate>
                <div class="flex flex-col gap-2">
                  <h3 class="text-sm font-medium text-black-500">
                    {{ t('landing.contact.form.title') }}
                  </h3>
                  <p class="text-sm text-slate-gray-500 leading-relaxed">
                    {{ t('landing.contact.form.paragraph') }}
                  </p>
                </div>

                <div class="gap-4 my-auto grid grid-cols-2">
                  <Ui.UiInput
                    id="contact-name"
                    v-model="form.name"
                    :label="t('landing.contact.form.name')"
                    :placeholder="t('landing.contact.form.name')"
                    required
                    :aria-describedby="formErrorKey ? 'form-error' : undefined"
                  />
                  <Ui.UiInput
                    id="contact-email"
                    v-model="form.email"
                    type="email"
                    :label="t('landing.contact.form.email')"
                    :placeholder="t('landing.contact.form.email')"
                    required
                    :aria-describedby="formErrorKey ? 'form-error' : undefined"
                  />
                  <Ui.UiInput
                    id="contact-subject"
                    v-model="form.subject"
                    :label="t('landing.contact.form.subject')"
                    :placeholder="t('landing.contact.form.subject')"
                    class="col-span-2"
                    required
                    :aria-describedby="formErrorKey ? 'form-error' : undefined"
                  />
                  <div class="col-span-2">
                    <label for="contact-message">
                      <span class="text-xs text-black-500">
                        {{ t('landing.contact.form.message') }}
                      </span>
                      <textarea
                        id="contact-message"
                        v-model="form.message"
                        :placeholder="t('landing.contact.form.message')"
                        required
                        :aria-describedby="formErrorKey ? 'form-error' : undefined"
                        class="w-full rounded-md p-2 text-xs text-black-500 font-medium bg-white-smoke mt-1 min-h-[80px] resize-y"
                        rows="4"
                      />
                    </label>
                  </div>
                </div>

                <!-- Error Message -->
                <div v-if="formErrorKey" id="form-error" class="text-red-500 text-xs" role="alert">
                  {{ t(formErrorKey) }}
                </div>

                <!-- Success Message -->
                <div v-if="isSubmitted" class="text-green-600 text-xs" role="alert">
                  <div class="flex items-center gap-2">
                    <Icon icon="solar:check-circle-bold" class="w-3 h-3" />
                    <span>{{ t('landing.contact.form.validation.success_message') }}</span>
                  </div>
                </div>

                <!-- Submit Button -->
                <Ui.UiButton
                  type="submit"
                  size="md"
                  variant="primary"
                  class="w-full"
                  :disabled="isSubmitting"
                  :aria-describedby="formErrorKey ? 'form-error' : undefined"
                >
                  <div class="flex items-center justify-center gap-2">
                    <Icon
                      v-if="isSubmitting"
                      icon="solar:refresh-linear"
                      class="w-4 h-4 animate-spin"
                    />
                    <span>
                      {{
                        isSubmitting
                          ? t('landing.contact.form.validation.preparing')
                          : t('landing.contact.form.send')
                      }}
                    </span>
                  </div>
                </Ui.UiButton>
              </form>
            </template>
          </Ui.UiCard>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
