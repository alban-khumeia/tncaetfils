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
          <NuxtLink to="/">
            <NuxtImg
                v-if="!isScrolled"
                src="/1.png"
                alt="Matériaux Réunion"
                class="h-18 w-auto drop-shadow-2xl"
                width="1920"
                height="1080"
            />
            <NuxtImg
                v-else
                src="/2.png"
                alt="Matériaux Réunion"
                class="h-18 w-auto"
                width="1920"
                height="1080"
            />
          </NuxtLink>

        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink
              to="/quincaillerie"
              class="transition-colors font-heading text-lg font-bold"
              :class="{
              'text-secondary hover:text-red-600': isScrolled,
              'text-white hover:text-white/80 drop-shadow-lg': !isScrolled
            }"
          >
            Quincaillerie
          </NuxtLink>
          <NuxtLink
              to="/transport-materiaux"
              class="transition-colors font-heading text-lg font-bold"
              :class="{
              'text-secondary hover:text-red-600': isScrolled,
              'text-white hover:text-white/80 drop-shadow-lg': !isScrolled
            }"
          >
            Transport
          </NuxtLink>
          <NuxtLink
              to="/qui-sommes-nous"
              class="transition-colors font-heading text-lg font-bold"
              :class="{
              'text-secondary hover:text-red-600': isScrolled,
              'text-white hover:text-white/80 drop-shadow-lg': !isScrolled
            }"
          >
            Qui sommes-nous
          </NuxtLink>
          <NuxtLink
              to="/catalogues"
              class="transition-colors font-heading text-lg font-bold"
              :class="{
              'text-secondary hover:text-red-600': isScrolled,
              'text-white hover:text-white/80 drop-shadow-lg': !isScrolled
            }"
          >
            Catalogues
          </NuxtLink>
          <NuxtLink
              to="/contact"
              class="transition-colors font-heading text-lg font-bold"
              :class="{
              'text-secondary hover:text-red-600': isScrolled,
              'text-white hover:text-white/80 drop-shadow-lg': !isScrolled
            }"
          >
            Contact
          </NuxtLink>
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
import {ref, onMounted, onUnmounted, computed} from 'vue'
// 1. Importez useRoute pour accéder à la route actuelle
import {useRoute} from '#imports'

// --- Configuration de l'edge-case ---
const route = useRoute()
// 2. Listez les chemins (routes) qui doivent *toujours* avoir la navbar "scrolled"
const forcedScrollPages = [
  '/catalogues',
    '/contact'
]

// 3. Un computed qui vérifie si on est sur une de ces pages
const isForceScrolled = computed(() => {
  return forcedScrollPages.includes(route.path)
})

// --- Logique de Scroll ---
// 4. On renomme votre ref pour qu'il suive UNIQUEMENT l'état du scroll
const isScrolledByWindow = ref(false)
const scrollThreshold = 10

// 5. La fonction met à jour *uniquement* le ref du scroll
const handleScroll = () => {
  isScrolledByWindow.value = window.scrollY > scrollThreshold;
}

// 6. L'ÉTAT FINAL (utilisé par votre template)
// C'est "true" SI on est sur une page forcée OU SI l'utilisateur a scrollé
const isScrolled = computed(() => {
  return isForceScrolled.value || isScrolledByWindow.value
})

// 7. L'écouteur d'événement
onMounted(() => {
  // Important : Vérifiez l'état du scroll dès le chargement
  // (au cas où l'utilisateur recharge la page en milieu de page)
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>