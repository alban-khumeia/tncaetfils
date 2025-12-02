<template>
  <section
      class="relative bg-muted overflow-hidden flex items-center"
      :class="variant === 'home' ? 'min-h-[84vh]' : 'min-h-[50vh] md:min-h-[60vh]'"
  >
    <div class="absolute inset-0 z-0">
      <NuxtImg
          :src="imageSrc"
          :alt="imageAlt"
          class="w-full h-full object-cover transition-transform duration-700"
          :class="variant === 'home' ? 'opacity-85' : 'opacity-90 brightness-110'"
          :width="variant === 'home' ? 1248 : 1024"
          preload
          format="webp"
          quality="80"
      />
    </div>

    <div
        v-if="variant === 'home'"
        class="absolute inset-0 bg-secondary/50 lg:backdrop-blur-sm lg:bg-black/20 lg:[mask-image:linear-gradient(to_right,black_35%,transparent_55%)] z-10"
    ></div>

    <div
        v-else
        class="absolute inset-0 z-10
    bg-gradient-to-b from-secondary/85 via-secondary/65 via-50% to-transparent
    md:bg-gradient-to-r md:from-secondary/80 md:via-secondary/40 md:to-transparent"
    ></div>

    <div
        class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-secondary/80 to-transparent z-10 pointer-events-none"></div>

    <div class="relative container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-16 z-20">
      <div class="max-w-3xl">

        <div v-if="variant === 'service'" class="flex items-center gap-3 mb-4">
          <span class="h-0.5 w-8 bg-primary"></span>
          <span class="text-primary-400 font-bold uppercase tracking-widest text-sm text-muted shadow-black drop-shadow-2xl">
            {{ breadcrumb || 'Nos Services' }}
          </span>
        </div>

        <h1
            class="font-heading font-black tracking-tight text-white mb-6 text-balance uppercase drop-shadow-2xl"
            :class="variant === 'home' ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-5xl'"
        >
          {{ title }}
        </h1>

        <p
            class="text-white font-sans leading-snug text-balance [text-shadow:_0_1px_10px_rgb(0_0_0_/_60%)] drop-shadow-2xl"
            :class="variant === 'home' ? 'text-lg md:text-xl mb-8' : 'text-lg md:text-xl mb-6 text-gray-100 max-w-2xl'"
        >
          {{ subtitle }}
        </p>

        <div v-if="tags && tags.length" class="flex flex-wrap gap-2 mb-8">
          <span
              v-for="tag in tags"
              :key="tag"
              class="px-3 py-1 bg-black/20 border border-white/20 backdrop-blur-md text-white text-xs md:text-sm font-bold uppercase tracking-wide rounded-sm"
          >
            {{ tag }}
          </span>
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <UiBaseButton
              v-if="primaryAction"
              :href="primaryAction.href"
              :variant="primaryAction.variant || 'solid'"
              size="lg"
              :leading-icon="primaryAction.icon"
              class="shadow-xl shadow-black/20"
          >
            {{ primaryAction.label }}
          </UiBaseButton>

          <UiBaseButton
              v-if="secondaryAction"
              :href="secondaryAction.href"
              :variant="secondaryAction.variant || 'glass'"
              size="lg"
              :leading-icon="secondaryAction.icon"
          >
            {{ secondaryAction.label }}
          </UiBaseButton>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Définition des types pour les boutons d'action
interface HeroAction {
  label: string
  href: string
  variant?: 'solid' | 'outline' | 'ghost' | 'glass'
  icon?: string
}

interface Props {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  variant?: 'home' | 'service'
  breadcrumb?: string
  tags?: string[]
  // On passe les objets d'action pour configurer les boutons proprement
  primaryAction?: HeroAction
  secondaryAction?: HeroAction
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'home',
  tags: () => [],
  // Valeurs par défaut intelligentes si non fournies
  primaryAction: () => ({
    label: 'Nous appeler',
    href: 'tel:+262693034669',
    variant: 'solid',
    icon: 'lucide:phone'
  }),
  secondaryAction: () => ({
    label: 'Venir au dépôt',
    href: '#contact',
    variant: 'glass',
    icon: 'lucide:map-pin'
  })
})
</script>