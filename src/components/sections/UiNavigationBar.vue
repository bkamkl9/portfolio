<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <nav
    class="bg-white-500/70 backdrop-blur-md border-b border-smoke-500 fixed top-0 left-0 right-0 z-50"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <div class="text-sm font-bold">Kamil Bartczak</div>
        <ul class="gap-4 text-sm text-slate-gray-500 hidden md:flex">
          <li>
            <a href="#" class="hover:underline">Home</a>
          </li>
          <li>
            <a href="#" class="hover:underline">About</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Projects</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Experience</a>
          </li>
        </ul>
        <button
          class="md:hidden cursor-pointer text-2xl text-slate-gray-500"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon :icon="isMenuOpen ? 'solar:close-square-linear' : 'solar:hamburger-menu-outline'" />
        </button>
      </div>
    </div>
  </nav>
  <nav
    :class="{
      'fixed h-screen w-[70%] top-14 transition-all duration-300 bg-white-500/70 backdrop-blur-md border-b border-l border-smoke-500 p-8 flex md:hidden': true,
      'left-[100%]': !isMenuOpen,
      'left-[30%]': isMenuOpen,
      '': isMenuOpen,
    }"
  >
    <ul class="flex flex-col gap-4 text-sm text-slate-gray-500">
      <li>
        <a href="#" class="hover:underline">Home</a>
      </li>
      <li>
        <a href="#" class="hover:underline">About</a>
      </li>
      <li>
        <a href="#" class="hover:underline">Contact</a>
      </li>
      <li>
        <a href="#" class="hover:underline">Projects</a>
      </li>
      <li>
        <a href="#" class="hover:underline">Experience</a>
      </li>
    </ul>
  </nav>
</template>
