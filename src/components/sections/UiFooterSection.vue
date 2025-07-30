<script setup lang="ts">
import * as Ui from '../layout'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-smoke-500 bg-snow-500">
    <Ui.UiContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 py-10">
        <div>
          <span class="text-sm text-black-500">{{ t('footer.name') }}</span>
          <p class="text-sm text-slate-gray-500 mt-4">
            {{ t('footer.paragraph') }}
          </p>
        </div>
        <div>
          <span class="text-sm text-black-500">{{ t('footer.quick_links') }}</span>
          <ul class="mt-4 space-y-2">
            <li class="text-sm text-slate-gray-500">
              <a href="#">{{ t('nav.home') }}</a>
            </li>
            <li class="text-sm text-slate-gray-500">
              <a href="#">{{ t('nav.about') }}</a>
            </li>
            <li class="text-sm text-slate-gray-500">
              <a href="#">{{ t('nav.contact') }}</a>
            </li>
            <li class="text-sm text-slate-gray-500">
              <a href="#">{{ t('nav.projects') }}</a>
            </li>
            <li class="text-sm text-slate-gray-500">
              <a href="#">{{ t('nav.experience') }}</a>
            </li>
          </ul>
        </div>
        <div>
          <span class="text-sm text-black-500">{{ t('footer.get_in_touch') }}</span>
          <ul class="mt-4 space-y-2">
            <li class="text-sm text-slate-gray-500">
              <a href="#">kamil.bartczak2023@gmail.com</a>
            </li>
            <li class="text-sm text-slate-gray-500">
              <a href="#">+48 726 033 373</a>
            </li>
            <li class="text-sm text-slate-gray-500">
              <a href="#">Zielona Góra, Poland</a>
            </li>
          </ul>
        </div>
        <div class="col-span-full">
          <div class="flex justify-between border-t border-smoke-500 pt-6 flex-wrap">
            <span class="text-sm text-slate-gray-500 text-xs gap-6 whitespace-nowrap">
              &copy; {{ new Date().getFullYear() }} {{ t('footer.name') }}.
              {{ t('footer.disclaimer') }}
            </span>
            <span class="text-sm text-slate-gray-500 text-xs whitespace-nowrap">
              {{ t('footer.built_with', ['Vite', 'Vue.js']) }}
            </span>
          </div>
        </div>
      </div>
    </Ui.UiContainer>
  </footer>
</template>
