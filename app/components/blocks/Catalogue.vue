<template>
  <section class="py-12 md:py-16 bg-background">
    <div class="container mx-auto px-4">
      <UiSectionHeader
          class="mb-12 md:mb-16"
          title="Notre catalogue"
          subtitle="Consultez notre catalogue produits et découvrez nos offres. Téléchargez-le en PDF pour le consulter à tout
          moment."
      />

      <div class="flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          <a
              v-for="catalog in catalogs"
              :key="catalog.title"
              :href="catalog.pdfUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group bg-background border border-border overflow-hidden hover:shadow-lg hover:border-secondary transition-all"
              aria-label="'Télécharger le ' + catalog.title"
          >
            <div class="relative h-96 md:h-[400px] flex items-center justify-center overflow-hidden">
              <NuxtImg
                  :src="catalog.image"
                  :alt="catalog.title"
                  class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  width="400"
                  height="565" format="webp"
                  loading="lazy"
              />
              <div
                  class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              </div>
              <div v-if="catalog.badge"
                   class="absolute top-4 right-4 bg-primary text-background px-3 py-1 text-sm font-semibold">
                {{ catalog.badge }}
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-xl font-heading uppercase font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {{ catalog.title }}
              </h3>
              <p class="text-muted-foreground mb-4 leading-relaxed">
                {{ catalog.description }}
              </p>

              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="lucide:calendar" class="h-5 w-5"/>
                  <span>{{ catalog.date }}</span>
                </div>
                <div class="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  <span>Télécharger PDF</span>
                  <Icon name="lucide:download" class="h-5 w-5"/>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="text-center mt-12">
        <p class="text-muted-foreground mb-4">
          Vous souhaitez recevoir nos catalogues par email ?
        </p>
        <UiBaseButton variant="outline" leading-icon="lucide:mail">
          <span>S'inscrire à la newsletter</span>
        </UiBaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const catalogs = [
  {
    title: 'Catalogue Gros Œuvre 2025',
    description: 'Découvrez notre gamme complète de matériaux pour le gros œuvre : ciment, parpaings, fers à béton et plus encore.',
    image: '/cover-catalogue-ouverture.jpg',
    pdfUrl: '/catalogue_gros_oeuvre_2025.pdf',
    date: 'Janvier 2025',
    badge: 'Nouveau',
  },
]
</script>