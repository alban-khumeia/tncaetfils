<template>
  <UiBlockContainer class="bg-background">
    <div class="container mx-auto px-4">
      <UiSectionHeader
          class="mb-10 md:mb-16"
          title="Nos catalogues"
          subtitle="Consultez nos offres et téléchargez le PDF pour un accès hors-connexion sur vos chantiers."
          size="md"
      />

      <div class="flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full">
          <a
              v-for="catalog in catalogs"
              :key="catalog.title"
              :href="catalog.pdfUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:border-secondary hover:shadow-lg active:scale-[0.99] transition-all duration-200"
              aria-label="'Télécharger le ' + catalog.title"
          >
            <div v-if="catalog.badge"
                 class="absolute top-3 right-3 z-10 bg-primary text-background px-3 py-1 text-xs md:text-sm font-bold uppercase tracking-wide shadow-sm rounded-sm">
              {{ catalog.badge }}
            </div>

            <div
                class="relative w-full bg-muted/30 aspect-[210/297] md:h-[400px] md:aspect-auto flex items-center justify-center overflow-hidden">
              <NuxtImg
                  :src="catalog.image"
                  :alt="catalog.title"
                  class="w-full h-full object-cover md:object-contain transition-transform duration-500 group-hover:scale-105"
                  width="400"
                  height="565"
                  format="webp"
                  loading="lazy"
              />
              <div class="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
            </div>

            <div class="flex flex-col flex-grow p-5 md:p-6">
              <div class="flex-grow">
                <h3 class="text-lg md:text-xl font-heading uppercase font-black text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                  {{ catalog.title }}
                </h3>
                <p class="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {{ catalog.description }}
                </p>
              </div>

              <div class="pt-4 mt-auto border-t border-border/50 flex items-center justify-between">
                <div class="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-medium">
                  <Icon name="lucide:calendar" class="h-4 w-4"/>
                  <span>{{ catalog.date }}</span>
                </div>

                <div
                    class="flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-3 py-2 rounded md:bg-transparent md:p-0 md:text-primary font-bold text-sm transition-all group-hover:text-primary group-hover:gap-3">
                  <span>PDF</span>
                  <Icon name="lucide:download" class="h-4 w-4 md:h-5 md:w-5"/>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="mt-12 md:mt-16 bg-muted/30 rounded-xl p-6 md:p-8 text-center border border-border/50">
        <p class="text-foreground font-medium mb-4 md:mb-6 max-w-2xl mx-auto">
          Pas le temps de chercher ? Recevez nos nouveaux catalogues directement par email.
        </p>
        <UiBaseButton variant="outline" leading-icon="lucide:mail"
                      class="w-full md:w-auto justify-center h-12 md:h-10 text-base">
          <span>M'inscrire à la newsletter</span>
        </UiBaseButton>
      </div>
    </div>
  </UiBlockContainer>
</template>

<script setup lang="ts">
interface Catalog {
  title: string
  description: string
  image: string
  pdfUrl: string
  date: string
  badge?: string
}

defineProps<{
  title?: string
  subtitle?: string
  catalogs: Catalog[]
}>()
</script>