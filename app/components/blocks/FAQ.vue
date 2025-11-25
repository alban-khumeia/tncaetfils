<template>
  <section class="py-12 md:py-16" :class="bgColor">
    <div class="container mx-auto px-4 md:px-6">

      <UiSectionHeader
          :title="title"
          :subtitle="subtitle"
          size="md"
          class="mb-8 md:mb-12"
      />

      <div class="max-w-3xl mx-auto"
           :class="variant === 'separated' ? 'space-y-4' : 'space-y-0 border border-border rounded-lg overflow-hidden'">

        <div
            v-for="(item, index) in items"
            :key="index"
            class="bg-background transition-all duration-200"
            :class="[
            variant === 'separated' ? 'border border-border rounded-lg shadow-sm' : 'border-b border-border last:border-0',
            openIndex === index ? 'ring-2 ring-primary border-transparent' : 'hover:border-primary/50'
          ]"
        >
          <h3>
            <button
                @click="toggleFaq(index)"
                class="w-full flex items-start justify-between px-6 py-5 text-left focus:outline-none group"
                :aria-expanded="openIndex === index"
                :aria-controls="`faq-content-${index}`"
            >
              <span
                  class="text-lg font-bold text-foreground group-hover:text-primary transition-colors pr-6 leading-tight"
              >
                {{ item.question }}
              </span>

              <span class="flex-shrink-0 mt-0.5 text-primary">
                 <Icon
                     :name="openIndex === index ? 'lucide:minus' : 'lucide:plus'"
                     class="w-6 h-6 transition-transform duration-300"
                     :class="{ 'rotate-90': openIndex !== index && false }"
                 />
                 </span>
            </button>
          </h3>

          <div
              :id="`faq-content-${index}`"
              class="grid transition-all duration-300 ease-in-out"
              :class="openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <div
                  class="px-6 pb-6 pt-0 text-muted-foreground text-base/relaxed border-t border-dashed border-border mt-2">
                <div class="pt-4" v-html="item.answer"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="mt-12 text-center">
        <slot name="cta"></slot>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * FAQ Component - Optimized for BTP/Industrial Context
 * Stack: Nuxt 4 / Vue 3.4+ / Tailwind
 */

interface FaqItem {
  question: string
  answer: string
}

const props = withDefaults(defineProps<{
  title: string
  subtitle?: string
  items: FaqItem[]
  bgColor?: string
  titleClass?: string
  variant?: 'joined' | 'separated'
}>(), {
  subtitle: '',
  bgColor: 'bg-muted/30',
  titleClass: 'text-left md:text-center',
  variant: 'separated'
})

// Gestion de l'état
const openIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

// SEO: Génération automatique du Schema.org pour Google
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: props.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }),
    },
  ],
})
</script>

<style scoped>
/* Optimisation de la lisibilité sur mobile */
@media (max-width: 640px) {
  h2 {
    font-size: 1.75rem;
  }
}
</style>