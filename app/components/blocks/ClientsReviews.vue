<template>
  <section class="py-12 md:py-24 bg-secondary overflow-hidden">
    <div class="container mx-auto px-4">

      <UiSectionHeader
          :title="title"
          :subtitle="subtitle"
          size="md"
          theme="dark"
          class="mb-8 md:mb-12"
      />

      <div v-if="items.length === 0" class="text-center text-background/50 py-12 italic">
        Aucun avis pour le moment.
      </div>

      <div v-else
           class="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-6 md:pb-0 scrollbar-hide">
        <div
            v-for="(review, index) in items"
            :key="review.id || index"
            class="min-w-[85vw] md:min-w-0 snap-center bg-foreground border border-secondary p-5 md:p-6 hover:shadow-lg transition-shadow rounded-sm"
        >
          <div class="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <div class="h-10 w-10 md:h-12 md:w-12 bg-primary flex items-center justify-center flex-shrink-0">
              <Icon name="lucide:user" class="h-5 w-5 text-background"/>
            </div>
            <div>
              <h3 class="font-sans font-semibold text-background text-base md:text-lg">
                {{ review.author }}
              </h3>
              <p v-if="review.role" class="font-sans text-xs md:text-sm text-background/80 uppercase tracking-wide">
                {{ review.role }}
              </p>
            </div>
          </div>

          <div class="flex gap-1 mb-3 md:mb-4">
            <Icon
                v-for="star in 5"
                :key="star"
                name="heroicons-solid:star"
                class="transition-colors"
                :class="star <= review.rating ? 'fill-primary text-primary' : 'fill-transparent text-secondary'"
                size="18"
            />
          </div>

          <p class="font-sans text-sm md:text-base text-background/90 leading-relaxed italic h-auto md:min-h-[80px]">
            "{{ review.content }}"
          </p>

          <div class="mt-4 pt-4 border-t border-secondary/50">
            <div class="flex items-center gap-2 text-xs md:text-sm text-background/60">
              <Icon name="lucide:calendar" class="h-4 w-4"/>
              <span class="font-sans">{{ review.date }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-8 md:mt-12">
        <div class="inline-flex items-center gap-2 text-background/80 py-2 px-4 bg-background/5 rounded-full">
          <Icon name="lucide:shield-check" class="h-5 w-5 text-primary"/>
          <span class="font-sans font-medium text-sm">Avis certifiés et vérifiés</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Définition du type pour la sécurité TypeScript (à déplacer idéalement dans un dossier types/)
export interface ReviewItem {
  id?: number | string
  author: string
  role?: string // Optionnel, car WP n'a pas toujours ce champ par défaut
  content: string
  date: string
  rating: number // 1 à 5
}

// Définition des props avec valeurs par défaut
const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  items?: ReviewItem[]
}>(), {
  title: 'Avis vérifiés de nos clients',
  subtitle: 'Le retour terrain de nos pros et particuliers.',
  items: () => []
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>