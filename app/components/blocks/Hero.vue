<template>
  <section class="relative bg-muted overflow-hidden flex items-center min-h-[84vh]">
    <div class="absolute inset-0">
      <NuxtImg
          :src="imageSrc"
          :alt="imageAlt"
          class="w-full h-full object-cover opacity-85"
          width="1248"
          height="832"
          preload
          format="webp"
          quality="80"
      />
    </div>

    <div
        class="absolute inset-0 bg-black/30
             lg:backdrop-blur-sm lg:bg-black/20
             lg:[mask-image:linear-gradient(to_right,black_35%,transparent_55%)]"
    >
    </div>

    <div class="absolute inset-0">
    </div>

    <div
        class="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-secondary/70 via-secondary/30 to-transparent z-10 pointer-events-none"></div>

    <div class="relative container mx-auto px-4 pt-24 md:pt-32 pb-12 md:pb-16">
      <div class="max-w-3xl">
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white mb-6 text-balance uppercase drop-shadow-2xl">
          {{ title }}
        </h1>
        <p class="text-lg md:text-xl text-white font-sans mb-8 leading-snug text-balance [text-shadow:_0_1px_10px_rgb(0_0_0_/_60%)]">
          {{ subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <UiBaseButton leading-icon="lucide:phone" size="lg" href="tel:+262693034669">
            Nous appeler : 06 93 034 669
          </UiBaseButton>
          <UiBaseButton
              href="#contact"
              variant="glass"
              size="lg">
            Venir en magasin
          </UiBaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  }
})
</script>