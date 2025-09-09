<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

// Types
interface NavigationItem {
  key: string
  href: string
  translationKey: string
}

interface Language {
  code: string
  label: string
  icon: string
}

// Composables
const router = useRouter()
const { locale, t } = useI18n()

// State
const isMenuOpen = ref(false)

// Navigation configuration
const navigationItems: NavigationItem[] = [
  { key: 'home', href: '#hero', translationKey: 'nav.home' },
  { key: 'about', href: '#about', translationKey: 'nav.about' },
  { key: 'skills', href: '#skills', translationKey: 'nav.skills' },
  { key: 'projects', href: '#projects', translationKey: 'nav.projects' },
  { key: 'experience', href: '#experience', translationKey: 'nav.experience' },
  { key: 'contact', href: '#contact', translationKey: 'nav.contact' },
]

const languages: Language[] = [
  { code: 'en', label: 'nav.languages.en', icon: 'flag-icons:us' },
  { code: 'pl', label: 'nav.languages.pl', icon: 'flag-icons:pl' },
]

// Computed
const currentLanguage = computed(
  () => languages.find((lang) => lang.code === locale.value) || languages[0],
)

const alternativeLanguage = computed(
  () => languages.find((lang) => lang.code !== locale.value) || languages[1],
)

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
  closeMenu()
}

const handleLanguageChange = (langCode: string) => {
  router.push(`/${langCode}`)
  closeMenu()
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <!-- Main Navigation Bar -->
    <nav
      class="bg-white-500/70 backdrop-blur-md border-b border-smoke-500 fixed top-0 left-0 right-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo/Brand -->
          <div class="text-sm font-bold text-black-500">
            <a href="#hero" @click="scrollToSection('#hero')" aria-label="Go to home section">
              Kamil Bartczak
            </a>
          </div>

          <!-- Desktop Navigation -->
          <ul class="hidden lg:flex gap-6 text-sm text-slate-gray-700" role="menubar">
            <li v-for="item in navigationItems" :key="item.key" role="none">
              <a
                :href="item.href"
                @click.prevent="scrollToSection(item.href)"
                class="hover:text-black-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm px-2 py-1"
                role="menuitem"
                :aria-label="`Navigate to ${t(item.translationKey)} section`"
              >
                {{ t(item.translationKey) }}
              </a>
            </li>
          </ul>

          <!-- Desktop Actions -->
          <div class="hidden lg:flex items-center gap-3">
            <!-- Language Switcher -->
            <button
              @click="handleLanguageChange(alternativeLanguage.code)"
              class="text-sm flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-smoke-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :aria-label="`Switch to ${t(alternativeLanguage.label)}`"
              :title="`Switch to ${t(alternativeLanguage.label)}`"
            >
              <Icon :icon="currentLanguage.icon" class="w-4 h-4" />
              <span>{{ t(currentLanguage.label) }}</span>
              <Icon icon="solar:alt-arrow-down-linear" class="w-3 h-3" />
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="lg:hidden p-2 text-slate-gray-700 hover:text-black-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
            :aria-expanded="isMenuOpen"
            :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
            aria-controls="mobile-menu"
          >
            <Icon
              :icon="isMenuOpen ? 'solar:close-square-linear' : 'solar:hamburger-menu-outline'"
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
        @click="closeMenu"
        aria-hidden="true"
      />
    </Transition>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      leave-active-class="transition-transform duration-300 ease-in"
      enter-from-class="transform translate-x-full"
      leave-to-class="transform translate-x-full"
    >
      <nav
        v-if="isMenuOpen"
        id="mobile-menu"
        class="fixed top-[73px] right-0 h-[calc(100vh-73px)] w-80 bg-white-500/95 backdrop-blur-md border-l border-smoke-500 z-50 lg:hidden"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div class="flex flex-col h-full">
          <!-- Mobile Navigation Items -->
          <div class="flex-1 px-6 py-8">
            <ul class="space-y-4" role="menubar">
              <li v-for="item in navigationItems" :key="item.key" role="none">
                <a
                  :href="item.href"
                  @click.prevent="scrollToSection(item.href)"
                  class="block text-slate-gray-700 hover:text-black-500 transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-smoke-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  role="menuitem"
                  :aria-label="`Navigate to ${t(item.translationKey)} section`"
                >
                  {{ t(item.translationKey) }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Mobile Language Switcher -->
          <div class="border-t border-smoke-500 p-6">
            <button
              @click="handleLanguageChange(alternativeLanguage.code)"
              class="w-full flex items-center justify-between px-4 py-3 text-sm text-slate-gray-700 hover:text-black-500 rounded-lg hover:bg-smoke-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :aria-label="`Switch to ${t(alternativeLanguage.label)}`"
            >
              <div class="flex items-center gap-3">
                <Icon :icon="currentLanguage.icon" class="w-5 h-5" />
                <span>{{ t(currentLanguage.label) }}</span>
              </div>
              <Icon icon="solar:alt-arrow-right-linear" class="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>
