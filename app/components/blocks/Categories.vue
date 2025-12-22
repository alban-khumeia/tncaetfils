<template>
  <UiBlockContainer class="bg-background">
    <div class="container mx-auto px-4">
      <UiSectionHeader
          class="mb-8 md:mb-16"
          :title="title"
          :subtitle="subtitle"
      />

      <div :class="['grid grid-cols-1 gap-4 md:gap-8', gridColsClass]">
        <UiBaseCard
            v-for="(category, index) in categories"
            :key="index"
            :icon="category.icon"
            :title="category.title"
            :description="category.description"
            :to="category.to"
        />
      </div>
    </div>
  </UiBlockContainer>
</template>

<script setup lang="ts">
// Définition de l'interface qui correspond à la sortie de 'mapCategoryList'
export interface Category {
  title: string
  description: string
  icon: string
  to?: string
  slug?: string      // Présent dans le mapper, utile si besoin de clés uniques
}

const props = defineProps<{
  categories: Category[]
  title: string
  subtitle?: string
}>()

// Logique de grille responsive (inchangée)
const gridColsClass = computed(() => {
  const count = props.categories.length

  if (count === 2) {
    return 'md:grid-cols-2'
  }
  // Par défaut 3 colonnes, s'adapte si besoin
  return 'md:grid-cols-2 lg:grid-cols-3'
})
</script>