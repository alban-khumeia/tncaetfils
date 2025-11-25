<template>
  <section class="py-12 md:py-24 bg-background">
    <div class="container mx-auto px-4">
      <UiSectionHeader
          class="mb-8 md:mb-16"
          :title="title"
          :subtitle="subtitle"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <UiBaseCard
            v-for="(category, index) in categories"
            :key="index"
            :icon="category.icon"
            :title="category.title"
            :description="category.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Category {
  title: string
  description: string
  icon: string
}

defineProps<{
  categories: Category[]
  title: string
  subtitle?: string
}>()
</script>