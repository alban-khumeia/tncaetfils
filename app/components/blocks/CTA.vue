<template>
  <section class="py-16 md:py-24 relative overflow-hidden">
    <NuxtImg
        src="/cta.png"
        alt="Camion de transport de matériaux en action"
        class="absolute inset-0 w-full h-full object-cover object-top z-0 bg-fixed"
        width="1408"
        height="736"
        densities="x1 x2"
        format="webp"
        loading="lazy"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
    />

    <div class="absolute inset-0 bg-black/60 z-10"></div>

    <div class="container mx-auto px-4 text-center relative z-20">
      <h2 class="text-3xl md:text-4xl font-heading font-black uppercase text-background mb-6 text-balance"
          style="text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
        Un projet ? Un besoin spécifique ?
      </h2>

      <p class="text-lg md:text-xl text-background mb-8 max-w-2xl mx-auto leading-relaxed opacity-90"
         style="text-shadow: 0 1px 3px rgba(0,0,0,0.5);">
        De la simple vis au camion complet de matériaux, parlez-nous de votre projet. Devis gratuit sous 24h.
      </p>

      <UiBaseButton to="/contact" variant="solid" class="text-lg" leading-icon="lucide:file-text">
        <span>Obtenir mon devis gratuit</span>
      </UiBaseButton>
    </div>
  </section>
</template>

<script setup lang="ts">
// Pas de script nécessaire pour ce composant
</script>