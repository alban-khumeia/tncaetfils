<template>
  <header
      class="fixed w-full top-0 z-50 transition-all duration-300"
      :class="{
      'bg-white shadow-lg': isScrolled,
      'bg-transparent': !isScrolled
    }"
  >
    <div class="px-20 py-2">
      <div class="flex items-center justify-between">

        <div class="flex items-center gap-8">
          <a href="/">
            <NuxtImg
                v-if="!isScrolled"
                src="/1.png"
                alt="Matériaux Réunion"
                class="h-14 w-auto drop-shadow-2xl"
                width="1920"
                height="1080"
            />
            <NuxtImg
                v-else
                src="/2.png"
                alt="Matériaux Réunion"
                class="h-14 w-auto"
                width="1920"
                height="1080"
            />
          </a>

        <nav class="hidden md:flex items-center gap-6">
          <a
              href="#quincaillerie"
              class="transition-colors font-heading text-lg font-bold"
              :class="{
              'text-secondary hover:text-red-600': isScrolled,
              'text-white hover:text-white/80 drop-shadow-lg': !isScrolled
            }"
          >
            Quincaillerie
          </a>
          <a
              href="#transport"
              class="transition-colors font-heading text-lg font-bold"
              :class="{
              'text-secondary hover:text-red-600': isScrolled,
              'text-white hover:text-white/80 drop-shadow-lg': !isScrolled
            }"
          >
            Transport
          </a>
          <a
              href="#qui-sommes-nous"
              class="transition-colors font-heading text-lg font-bold"
              :class="{
              'text-secondary hover:text-red-600': isScrolled,
              'text-white hover:text-white/80 drop-shadow-lg': !isScrolled
            }"
          >
            Qui sommes-nous
          </a>
          <a
              href="#contact"
              class="transition-colors font-heading text-lg font-bold"
              :class="{
              'text-secondary hover:text-red-600': isScrolled,
              'text-white hover:text-white/80 drop-shadow-lg': !isScrolled
            }"
          >
            Contact
          </a>
        </nav>
        </div>

        <div class="flex items-center gap-4">
          <UiBaseButton class="h-12" trailing-icon="lucide:arrow-right" to="/contact">
            Demander un devis
          </UiBaseButton>
          <button
              class="md:hidden p-2 transition-colors"
              :class="{ 'text-gray-900': isScrolled, 'text-white': !isScrolled }"
          >
            <Icon name="lucide:menu" class="h-6 w-6"/>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'

// 1. L'état réactif
const isScrolled = ref(false)
// Seuil de scroll (en pixels) avant que la navbar ne change
const scrollThreshold = 10

// 2. La fonction qui met à jour l'état
const handleScroll = () => {
  if (window.scrollY > scrollThreshold) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

// 3. L'écouteur d'événement (côté client uniquement)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>