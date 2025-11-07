<script setup lang="ts">
import {ref} from 'vue'

interface FaqItem {
  question: string
  answer: string
}

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
    default: '',
  },
  items: {
    type: Array as () => FaqItem[],
    required: true,
  },
  bgColor: {
    type: String,
    default: 'bg-muted',
  },
})

const openIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="py-12 md:py-16" :class="bgColor">
    <div class="container mx-auto px-4">
      <UiSectionHeader
          class="mb-12 md:mb-16"
          :title="title"
          :subtitle="subtitle"
      />
      <div class="max-w-3xl mx-auto space-y-4">
        <div
            v-for="(item, index) in items"
            :key="index"
            class="border border-border overflow-hidden bg-background"
        >
          <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
              :aria-expanded="openIndex === index"
          >
            <h3 class="text-lg font-heading font-bold text-foreground pr-4 text-balance">
              {{ item.question }}
            </h3>
            <Icon
                name="lucide:chevron-down"
                class="h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform"
                :class="{ 'rotate-180': openIndex === index }"
            />
          </button>
          <div
              v-show="openIndex === index"
              class="px-6 pb-5 text-muted-foreground leading-relaxed"
          >
            <p class="text-pretty">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>