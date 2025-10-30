<template>
  <section class="py-16 md:py-24 bg-muted">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Nos catalogues et promotions
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Consultez nos catalogues produits et découvrez nos offres du moment. Téléchargez-les en PDF pour les consulter
          à tout moment.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <a
            v-for="(catalog, index) in catalogs"
            :key="index"
            :href="catalog.pdfUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <div class="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <NuxtImg
                :src="catalog.image"
                :alt="catalog.title"
                class="w-full h-full object-cover"
                width="400"
                height="300"
            />
            <div
                class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div class="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center">
                <Icon name="lucide:file-text" class="h-8 w-8 text-primary"/>
              </div>
            </div>
            <div v-if="catalog.badge"
                 class="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
              {{ catalog.badge }}
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {{ catalog.title }}
            </h3>
            <p class="text-muted-foreground mb-4 leading-relaxed">
              {{ catalog.description }}
            </p>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="lucide:calendar" class="h-4 w-4"/>
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

      <div class="text-center mt-12">
        <p class="text-muted-foreground mb-4">
          Vous souhaitez recevoir nos catalogues par email ?
        </p>
        <button
            class="border border-border text-lg px-8 py-3 rounded-md font-medium transition-colors hover:bg-secondary inline-flex items-center gap-2">
          <Icon name="lucide:mail" class="h-5 w-5"/>
          S'inscrire à la newsletter
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const catalogs = [
  {
    title: 'Catalogue Gros Œuvre 2025',
    description: 'Découvrez notre gamme complète de matériaux pour le gros œuvre : ciment, parpaings, fers à béton et plus encore.',
    image: '/placeholder.svg?height=300&width=400',
    pdfUrl: '/catalogues/gros-oeuvre-2025.pdf',
    date: 'Janvier 2025',
    badge: 'Nouveau',
  },
  {
    title: 'Promotions Printemps',
    description: 'Profitez de nos offres spéciales sur une sélection de produits pour vos projets de printemps.',
    image: '/placeholder.svg?height=300&width=400',
    pdfUrl: '/catalogues/promotions-printemps-2025.pdf',
    date: 'Mars 2025',
    badge: 'Promo',
  },
  {
    title: 'Guide Outillage Pro',
    description: 'Le guide complet de notre gamme d\'outillage professionnel pour tous les corps de métier.',
    image: '/placeholder.svg?height=300&width=400',
    pdfUrl: '/catalogues/outillage-pro-2025.pdf',
    date: 'Février 2025',
    badge: null,
  },
]
</script>
