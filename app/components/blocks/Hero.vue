<script setup lang="ts">
// On importe 'ref' et 'computed' de Vue
import {ref, computed} from 'vue'

// --- 1. Logique du compteur ---

// Définit ici la liste des images que ton client doit valider
const images = [
  {
    src: '/hero.png',
    alt: 'Magasin de matériaux (Option 1)'
  },
  {
    src: '/hero2.png',
    alt: 'Vue alternative du magasin (Option 2)'
  },
  {
    src: '/hero3.png',
    alt: 'Zoom sur les produits (Option 3)'
  },
  {
    src: '/hero4.jpg',
    alt: 'Zoom sur les produits (Option 3)'
  },
  {
    src: '/hero5.jpg',
    alt: 'Zoom sur les produits (Option 3)'
  },
  {
    src: '/hero6.jpg',
    alt: 'Zoom sur les produits (Option 3)'
  },
]

// L'index de l'image actuellement affichée
const currentImageIndex = ref(0)
const totalImages = images.length

// --- 2. Propriété "calculée" (computed) ---
// C'est le point clé : cet objet sera mis à jour dès que 'currentImageIndex' change.
const currentImage = computed(() => {
  return images[currentImageIndex.value] !
})

// Fonctions pour changer d'image
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % totalImages
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + totalImages) % totalImages
}
</script>

<template>
  <section class="relative bg-muted overflow-hidden flex items-center min-h-[84vh]">
    <div class="absolute inset-0">

      <NuxtImg
          :key="currentImage.src"
          :src="currentImage.src"
          :alt="currentImage.alt"
          class="w-full h-full object-cover opacity-85"
          width="1248"
          height="832"
          preload
      />
    </div>

    <div
        class="absolute inset-0 backdrop-blur-sm bg-black/15
             [mask-image:linear-gradient(to_right,black_35%,transparent_55%)]"
    >
    </div>


    <div class="relative container mx-auto px-4 pt-24 md:pt-32 pb-12 md:pb-16">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white mb-6 text-balance uppercase">
          Matériaux, BTP, Jardin : L'expertise transport en plus
        </h1>
        <p class="text-lg md:text-xl text-white font-sans mb-8 leading-relaxed text-balance">
          TNCA ET FILS est votre nouveau guichet unique pour tous vos chantiers à la Ravine des Cabris. Conseil d'experts et stock
          disponible immédiatement.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <UiBaseButton leading-icon="lucide:phone" size="lg" href="tel:+262693034669">
            Nous appeler : 06 93 034 669
          </UiBaseButton>
          <UiBaseButton
              href="#contact"
              variant="outline"
              size="lg"
              class="border-2 border-white/50 text-white hover:bg-white/10 transition-colors">
            Venir en magasin
          </UiBaseButton>
        </div>
      </div>

      <div
          class="absolute bottom-1 right-1 z-10 p-3 bg-black/50 backdrop-blur-sm rounded-lg text-white font-sans text-sm">
        <div class="flex items-center gap-4">
          <button
              @click="prevImage"
              class="px-3 py-1 rounded hover:bg-white/20 transition-colors"
              aria-label="Image précédente"
          >
            &lt; Préc.
          </button>

          <span class="font-medium">
            Image {{ currentImageIndex + 1 }} / {{ totalImages }}
          </span>

          <button
              @click="nextImage"
              class="px-3 py-1 rounded hover:bg-white/20 transition-colors"
              aria-label="Image suivante"
          >
            Suiv. &gt;
          </button>
        </div>
      </div>
    </div>
  </section>
</template>