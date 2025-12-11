<script setup lang="ts">
import * as Ui from '../layout'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import backgroundImageUrl from '@/assets/images/bg-gradient-3.png?url'
// Types
interface NavigationItem {
  key: string
  href: string
  translationKey: string
}

interface ContactItem {
  type: 'email' | 'phone' | 'location'
  label: string
  value: string
  href: string
  icon: string
}

interface SocialLink {
  name: string
  href: string
  icon: string
  ariaLabel: string
}

// Composables
const { t } = useI18n()

// Configuration
const navigationItems: NavigationItem[] = [
  { key: 'home', href: '#hero', translationKey: 'nav.home' },
  { key: 'about', href: '#about', translationKey: 'nav.about' },
  { key: 'skills', href: '#skills', translationKey: 'nav.skills' },
  { key: 'projects', href: '#projects', translationKey: 'nav.projects' },
  { key: 'experience', href: '#experience', translationKey: 'nav.experience' },
  { key: 'contact', href: '#contact', translationKey: 'nav.contact' },
]

const contactItems: ContactItem[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'kamil.bartczak2023@gmail.com',
    href: 'mailto:kamil.bartczak2023@gmail.com',
    icon: 'solar:letter-linear',
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+48 726 033 373',
    href: 'tel:+48726033373',
    icon: 'solar:phone-linear',
  },
  {
    type: 'location',
    label: 'Location',
    value: 'Zielona Góra, Poland',
    href: 'https://maps.google.com/?q=Zielona+Góra,+Poland',
    icon: 'solar:map-point-linear',
  },
]

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

// Methods
const scrollToSection = (href: string) => {
  if (href.startsWith('#')) {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="border-t border-smoke-500 bg-snow-500"
    role="contentinfo"
    aria-label="Site footer"
    :style="{
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <Ui.UiContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 py-12">
        <!-- Brand & Description -->
        <div class="lg:col-span-2">
          <h3 class="text-sm font-medium text-black-500 mb-4">
            {{ t('footer.name') }}
          </h3>
          <p class="text-sm text-slate-gray-500 leading-relaxed max-w-md">
            {{ t('footer.paragraph') }}
          </p>

          <!-- Social Links -->
          <div class="mt-6">
            <h4 class="text-xs font-medium text-black-500 mb-3 uppercase tracking-wider">
              Follow Me
            </h4>
            <div class="flex items-center gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                :aria-label="social.ariaLabel"
                :title="social.name"
                target="_blank"
                rel="noopener noreferrer"
                class="w-9 h-9 bg-white hover:bg-pink-300 text-slate-gray-700 hover:text-white-500 rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Icon :icon="social.icon" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-medium text-black-500 mb-4">
            {{ t('footer.quick_links') }}
          </h3>
          <nav aria-label="Footer navigation">
            <ul class="space-y-3">
              <li v-for="item in navigationItems" :key="item.key">
                <a
                  :href="item.href"
                  @click.prevent="scrollToSection(item.href)"
                  class="text-sm text-slate-gray-500 hover:text-black-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm px-1 py-0.5"
                  :aria-label="`Navigate to ${t(item.translationKey)} section`"
                >
                  {{ t(item.translationKey) }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Contact Information -->
        <div>
          <h3 class="text-sm font-medium text-black-500 mb-4">
            {{ t('footer.get_in_touch') }}
          </h3>
          <ul class="space-y-3">
            <li v-for="contact in contactItems" :key="contact.type">
              <a
                :href="contact.href"
                :target="contact.type === 'location' ? '_blank' : undefined"
                :rel="contact.type === 'location' ? 'noopener noreferrer' : undefined"
                class="text-sm text-slate-gray-500 hover:text-black-500 transition-colors duration-200 flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm p-1"
                :aria-label="`Contact via ${contact.label}: ${contact.value}`"
              >
                <div
                  class="w-8 h-8 bg-white group-hover:bg-orange-300 text-slate-gray-700 group-hover:text-white-500 rounded-md flex items-center justify-center transition-colors duration-200 flex-shrink-0"
                >
                  <Icon :icon="contact.icon" class="w-4 h-4" />
                </div>
                <span class="truncate">{{ contact.value }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-smoke-500 py-6">
        <div
          class="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"
        >
          <p class="text-xs text-slate-gray-500">
            &copy; {{ currentYear }} {{ t('footer.name') }}.
            {{ t('footer.disclaimer') }}
          </p>
          <p class="text-xs text-slate-gray-500">
            {{ t('footer.built_with', ['Vite', 'Vue.js']) }}
          </p>
        </div>
      </div>
    </Ui.UiContainer>
  </footer>
</template>
