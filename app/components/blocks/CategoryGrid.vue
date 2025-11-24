<template>
  <section id="quincaillerie" class="py-8 md:py-16 bg-background">
    <div class="container mx-auto px-4">
      <UiSectionHeader
          v-if="title"
          class="mb-6 md:mb-16"
          :title="title"
          :subtitle="subtitle"
      />

      <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 md:gap-2 lg:auto-rows-[12rem]">
        <NuxtLink
            v-for="(category, index) in categories"
            :key="category.id || index"
            :to="category.href"
            class="
              group relative overflow-hidden border border-border bg-card transition-all

              /* MOBILE : FORCE FLEX ROW + HAUTEUR FIXE (96px) */
              flex flex-row h-24 rounded-lg shadow-sm

              /* DESKTOP : RESET EN BLOCK + HAUTEUR AUTO + TRANSPARENCE */
              md:block md:h-auto md:rounded-none md:shadow-none md:bg-transparent md:border-transparent
            "
            :class="category.gridClasses"
        >
          <div class="
            relative shrink-0 overflow-hidden
            w-28 h-full bg-[#dadadb] border-r border-border/50
            md:absolute md:inset-0 md:w-full md:border-none md:bg-transparent
          ">
            <NuxtImg
                v-if="category.image"
                :src="category.image"
                :alt="category.title"
                class="
                  w-full h-full transition-transform duration-300 group-hover:scale-105
                  object-contain
                  md:object-cover
                "
                loading="lazy"
            />
          </div>

          <div class="hidden md:block absolute inset-0 bg-muted/20 pointer-events-none"></div>
          <div class="hidden md:block absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent"></div>

          <div class="
            relative z-10 flex flex-col justify-center h-full w-full
            pl-4 pr-8 py-2

            md:justify-end md:p-6 md:pr-6
          ">
            <h3 class="
              font-heading font-black uppercase leading-none tracking-tight text-foreground
              text-md mb-1.5
              md:text-xl md:mb-1 md:text-background md:leading-tight
            ">
              {{ category.title }}
            </h3>

            <p class="
              font-sans text-muted-foreground text-sm line-clamp-2 leading-snug
              md:text-background/90 md:text-base md:line-clamp-none
            ">
              {{ category.description }}
            </p>
          </div>

          <div class="md:hidden absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/40">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>

        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
export interface Category {
  id?: string
  image: string
  title: string
  description: string
  href: string
  gridClasses: string // Attention: assure-toi que ces classes ne cassent pas le layout mobile (ex: utiliser `md:col-span-2` au lieu de `col-span-2` dans tes données)
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
      title: 'Nos Rayons',
      subtitle: 'Tout le matériel pour vos chantiers',
      ctaText: 'Découvrir',
      ctaLink: '/',
      categories: () => [],
    }
)
</script>