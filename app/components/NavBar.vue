<template>
  <header
      ref="headerRef"
      class="fixed w-full top-0 z-50 transition-all duration-300"
      :class="{
      'bg-white shadow-lg': isScrolled,
      'bg-transparent': !isScrolled
    }"
  >
    <div class="w-full max-w-[1920px] mx-auto px-4 md:px-10 py-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-8">
          <NuxtLink to="/">
            <NuxtImg
                src="/logo.png"
                alt="Logo TNCA et FILS - Quincaillerie et Transport"
                width="1920"
                height="1080"
                priority
                :class="logoClasses"
                :style="logoStyles"
            />
          </NuxtLink>

          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink
                v-for="link in items"
                :key="link.to"
                :to="link.to"
                class="transition-colors font-heading text-lg font-bold"
                :class="{
      'text-secondary hover:text-primary': isScrolled,
      'text-white hover:text-primary drop-shadow-md': !isScrolled
    }"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <UiBaseButton
              class="h-12 hidden md:inline-flex transition-all duration-300"
              :variant="isScrolled ? 'solid' : 'outline'"
              :class="{
        'border-white text-white hover:bg-white/10 hover:text-white': !isScrolled,
        '': isScrolled
      }"
              trailing-icon="lucide:arrow-right"
              to="/contact"
          >
            Demander un devis
          </UiBaseButton>
          <button
              @click="toggleMobileMenu"
              class="md:hidden flex items-center justify-center w-12 h-12 transition-all duration-200"
              :class="{
       'bg-muted border border-secondary/20 text-secondary hover:bg-gray-100': isScrolled,
       'border border-white/30 bg-secondary/25 text-white backdrop-blur-sm hover:bg-secondary/40 hover:border-white/50 focus:ring-white': !isScrolled
    }"
              aria-label="Ouvrir le menu"
          >
            <Icon name="lucide:menu" size="28" class="stroke-[2.5]"/>
          </button>
        </div>
      </div>
    </div>

    <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-white px-6 py-8 md:hidden"
    >
      <button
          @click="toggleMobileMenu"
          class="absolute top-4 right-4 p-2 text-secondary"
          aria-label="Fermer le menu"
      >
        <Icon name="lucide:x" size="28" class="stroke-[2.5]"/>
      </button>

      <nav class="flex flex-col items-center gap-8 text-center">
        <NuxtLink
            v-for="link in items"
            :key="link.to"
            :to="link.to"
            class="font-heading text-2xl font-bold text-secondary hover:text-primary"
            @click="toggleMobileMenu"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <UiBaseButton
          class="mt-12 h-12"
          trailing-icon="lucide:arrow-right"
          to="/contact"
          @click="toggleMobileMenu"
          size="lg"
      >
        Demander un devis
      </UiBaseButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed, watchEffect} from 'vue'
import {useRoute} from '#imports'
import { useHeaderHeight } from '~/composables/useHeaderHeight'

interface NavItem {
  name: string
  to: string
  target?: string
}

const props = withDefaults(defineProps<{
  menuItems?: NavItem[]
}>(), {
  menuItems: () => []
})

const items = computed(() => props.menuItems)

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const route = useRoute()

const forcedScrollPages = computed(() => {
  const pagesToForce = ['Catalogues', 'Contact', 'Qui sommes-nous']
  return items.value
      .filter(item => pagesToForce.includes(item.name))
      .map(item => item.to)
})

const isForceScrolled = computed(() => {
  return forcedScrollPages.value.includes(route.path)
})

const isScrolledByWindow = ref(false)
const scrollThreshold = 10

const handleScroll = () => {
  isScrolledByWindow.value = window.scrollY > scrollThreshold;
}

const { setHeaderHeight, setHeaderScrolled } = useHeaderHeight()

const isScrolled = computed(() => {
  const scrolled = isForceScrolled.value || isScrolledByWindow.value
  setHeaderScrolled(scrolled)
  return scrolled
})

const logoClasses = computed(() => {
  const base = 'h-12 md:h-16 w-auto object-contain transition-all duration-300'
  if (!isScrolled.value) {
    return `${base} opacity-95 saturate-[0.6] contrast-[1.2] brightness-110 drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]`
  }
  return base
})

const logoStyles = computed(() => {
  if (isScrolled.value) {
    return {
      filter: 'drop-shadow(0 1px 0px rgba(200,200,200,0.8)) drop-shadow(0 3px 5px rgba(0,0,0,0.1))'
    }
  }
  return {}
})

watchEffect(() => {
  if (import.meta.client) {
    if (isMobileMenuOpen.value) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
})

const headerRef = ref<HTMLElement | null>(null)
let observer: ResizeObserver | null = null

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)

  if (headerRef.value) {
    setHeaderHeight(headerRef.value.offsetHeight)
    observer = new ResizeObserver(() => {
      if (headerRef.value) {
        setHeaderHeight(headerRef.value.offsetHeight)
      }
    })
    observer.observe(headerRef.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) {
    observer.disconnect()
  }
})
</script>
