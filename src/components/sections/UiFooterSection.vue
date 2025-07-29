<script setup lang="ts">
import * as Ui from '../layout'
</script>

<template>
  <footer class="border-t border-smoke-500 bg-snow-500">
    <Ui.UiContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 py-10">
        <div>
          <span class="text-sm text-black-500">Kamil Bartczak</span>
          <p class="text-sm text-slate-gray-500 mt-4">
            Full Stack Developer passionate about creating exceptional digital experiences through
            clean code and innovative solutions.
          </p>
        </div>
        <div>
          <span class="text-sm text-black-500">Quick links</span>
          <ul class="mt-4 space-y-2">
            <li class="text-sm text-slate-gray-500">
              <a href="#">Home</a>
            </li>
            <li class="text-sm text-slate-gray-500">
              <a href="#">About</a>
            </li>
            <li class="text-sm text-slate-gray-500">
              <a href="#">Contact</a>
            </li>
            <li class="text-sm text-slate-gray-500">
              <a href="#">Projects</a>
            </li>
            <li class="text-sm text-slate-gray-500">
              <a href="#">Experience</a>
            </li>
          </ul>
        </div>
        <div>
          <span class="text-sm text-black-500">Get in Touch</span>
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
              &copy; {{ new Date().getFullYear() }} Kamil Bartczak. All rights reserved.
            </span>
            <span class="text-sm text-slate-gray-500 text-xs whitespace-nowrap">
              Build using
              <a href="https://vite.dev" target="_blank" class="text-black-500">Vite</a> and
              <a href="https://vuejs.org" target="_blank" class="text-black-500">Vue.js</a>
              <span> ❤️</span>
            </span>
          </div>
        </div>
      </div>
    </Ui.UiContainer>
  </footer>
</template>
