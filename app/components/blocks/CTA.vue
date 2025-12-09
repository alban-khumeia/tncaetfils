<template>
  <UiBlockContainer class="relative overflow-hidden bg-slate-900 isolation-auto">

    <NuxtImg
        :src="imageSrc"
        :alt="imageAlt"
        class="absolute inset-0 w-full h-full object-cover object-center z-0 select-none"
        :width="imageWidth"
        :height="imageHeight"
        densities="1x 2x"
        format="avif,webp"
        loading="lazy"
        sizes="100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:1536px"
        quality="80"
    />

    <div class="absolute inset-0 bg-black/70 md:bg-black/60 z-10 pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-20 text-center h-full flex flex-col justify-center items-center">

      <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-black uppercase text-white mb-4 md:mb-6 text-balance tracking-tight drop-shadow-lg">
        {{ props.title }}
      </h2>

      <p v-if="props.description"
         class="text-lg md:text-xl text-gray-100 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md text-pretty">
        {{ props.description }}
      </p>

      <div class="w-full sm:w-auto">
        <UiBaseButton
            :to="props.ctaLink"
            variant="solid"
            size="lg"
            :leading-icon="props.ctaIcon"
            class="w-full sm:w-auto justify-center font-bold shadow-xl shadow-black/20 active:scale-95 transition-transform"
        >
          {{ props.ctaLabel }}
        </UiBaseButton>
      </div>

    </div>
  </UiBlockContainer>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  ctaLabel: string
  ctaLink: string
  ctaIcon?: string
}

const props = defineProps<Props>()
</script>