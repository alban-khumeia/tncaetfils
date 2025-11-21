<template>
  <section id="quincaillerie" class="py-12 md:py-16 bg-background">
    <div class="container mx-auto px-4">
      <UiSectionHeader
          v-if="title"
          class="mb-12 md:mb-16"
          :title="title"
          :subtitle="subtitle"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-8 lg:auto-rows-[12rem]">
        <NuxtLink
            v-for="(category, index) in categories"
            :key="category.id || index" :to="category.href"
            class="relative block border border-border overflow-hidden group transition-shadow hover:shadow-lg"
            :class="category.gridClasses"
        >
          <div class="absolute inset-0 bg-muted/20"></div>

          <NuxtImg
              v-if="category.image"
              :src="category.image"
              :alt="category.title"
              class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              placeholder
          />

          <div class="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent"></div>

          <div class="relative z-10 flex flex-col justify-end h-full p-6 text-background drop-shadow">
            <h3 class="font-heading font-black uppercase text-xl mb-1 leading-tight">
              {{ category.title }}
            </h3>
            <p class="font-sans font-normal text-background/90 text-sm md:text-base">
              {{ category.description }}
            </p>
          </div>
        </NuxtLink>
      </div>

      <div v-if="ctaText && ctaLink" class="text-center">
        <UiBaseButton size="lg" :to="ctaLink">
          {{ ctaText }}
        </UiBaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface Category {
  id?: string // Un ID unique venant du CMS est préférable pour la key
  image: string
  title: string
  description: string
  href: string
  gridClasses: string
}

const props = withDefaults(
    defineProps<{
      title?: string
      subtitle?: string
      ctaText?: string
      ctaLink?: string
      categories?: Category[]
    }>(),
    {
      title: 'Votre titre par défaut',
      subtitle: 'Votre sous-titre par défaut',
      ctaText: 'Découvrir',
      ctaLink: '/',
      categories: () => [],
    }
)
</script>