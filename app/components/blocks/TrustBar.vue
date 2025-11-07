<template>
  <section class="bg-secondary text-white min-h-[16vh] flex items-center justify-center">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(feature, index) in features" :key="index"
             class="flex flex-col items-center text-center gap-2">
          <div class="h-6 w-6 flex items-center justify-center">
            <Icon :name="feature.icon" size="24" class="text-white"/>
          </div>
          <div>
            <h3 class="font-heading font-black uppercase mb-1">{{ feature.title }}</h3>
            <p class="text-sm font-sans font-normal text-white/80">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 1. Définir la structure d'un item
interface FeatureItem {
  icon: string
  title: string
  description: string
}

// 2. Définir les props que le composant attend
defineProps<{
  features: FeatureItem[]
}>()

</script>