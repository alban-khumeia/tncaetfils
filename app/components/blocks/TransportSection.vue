<template>
  <UiBlockContainer id="transport" class="bg-muted overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

        <div class="hidden md:block relative md:order-2">
          <NuxtImg
              src="/camion.png"
              alt="Camion livraison matériaux"
              class="w-full h-auto max-h-[500px] object-contain mix-blend-multiply"
              width="600"
              height="500"
          />
        </div>

        <div class="md:order-1 flex flex-col">
          <span class="block text-primary font-bold tracking-widest uppercase text-xs mb-2">
            {{ badge }}
          </span>

          <h2 class="text-3xl md:text-4xl font-heading font-black uppercase text-secondary mb-4 text-balance">
            {{ title }}
          </h2>

          <p class="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed border-l-4 border-border pl-4">
            {{ description }}
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mb-6">
            <UiBaseCard
                v-for="(service, index) in services"
                :key="index"
                :icon="service.icon"
                :title="service.title"
                :description="service.description"
            />
          </div>

          <div
              class="md:hidden relative w-full -mx-4 mb-4 flex justify-center bg-gradient-to-r from-transparent via-white/40 to-transparent">
            <NuxtImg
                :src="imageSrc"
                :alt="imageAlt"
                class="h-48 w-auto object-contain mix-blend-multiply"
                width="400"
                height="300"
            />
          </div>

          <UiBaseButton
              v-if="cta"
              size="lg"
              :to="cta.href"
              class="w-full md:w-auto font-bold tracking-wide shadow-lg z-10"
          >
            {{ cta.label }}
          </UiBaseButton>
        </div>

      </div>
    </div>
  </UiBlockContainer>
</template>

<script setup lang="ts">
interface ServiceItem {
  icon: string
  title: string
  description: string
}

interface CtaLink {
  label: string
  href: string
  target?: string
}

defineProps<{
  badge?: string
  title: string
  description: string
  imageSrc: string
  imageAlt?: string
  services: ServiceItem[]
  cta?: CtaLink | null
}>()
</script>