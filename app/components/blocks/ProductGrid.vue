<template>
  <UiBlockContainer class="bg-white py-12">
    <div class="container mx-auto px-4">
      <h2 v-if="title" class="text-3xl font-bold mb-8 text-gray-900">{{ title }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
            v-for="(product, index) in products"
            :key="index"
            class="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col"
        >
          <div class="aspect-w-16 aspect-h-9 bg-gray-100">
            <img :src="product.image" :alt="product.alt" class="object-cover w-full h-48"/>
          </div>

          <div class="p-6 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-semibold">{{ product.title }}</h3>
              <span class="font-bold text-primary">{{ product.price }}</span>
            </div>

            <p class="text-gray-600 text-sm mb-4 flex-grow">{{ product.description }}</p>

            <div class="mt-auto flex items-center justify-between">
              <span
                  :class="[
                  'px-3 py-1 text-xs rounded-full font-medium',
                  product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                ]"
              >
                {{ product.availabilityLabel }}
              </span>

              <button class="text-sm font-semibold text-primary hover:underline">
                Voir détails
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </UiBlockContainer>
</template>

<script setup lang="ts">
interface Product {
  title: string
  description: string
  price: string
  inStock: boolean
  availabilityLabel: string
  image: string
  alt: string
}

defineProps<{
  title?: string
  products: Product[]
}>()
</script>