<template>
  <section id="quincaillerie" class="py-12 md:py-16 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="font-heading font-black leading-tight uppercase text-3xl md:text-4xl text-secondary mb-4 text-balance">
          Votre nouvelle quincaillerie à La Réunion
        </h2>
        <p class="text-lg text-foreground max-w-2xl mx-auto font-sans font-normal leading-relaxed">
          Découvrez notre large gamme de produits pour tous vos projets de construction, rénovation et aménagement.
          Stock permanent et conseils d'experts.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-8 lg:auto-rows-[12rem]">

        <NuxtLink
            v-for="(category, index) in categories"
            :key="index"
            :to="category.href"
            class="relative block border border-border overflow-hidden group transition-shadow hover:shadow-lg"
            :class="category.gridClasses"
        >
          <div class="absolute inset-0 bg-muted/20"></div>

          <NuxtImg
              :src="category.image"
              :alt="category.title"
              class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              placeholder
          />

          <div class="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent"></div>

          <div class="relative z-10 flex flex-col justify-end h-full p-6 text-background drop-shadow">
            <h3 class="font-heading font-black uppercase text-xl mb-1 leading-tight">
              {{ category.title }}
            </h3>
            <p class="font-sans font-normal text-background/90 text-sm md:text-base">
              {{ category.description }}
            </p>
          </div>
        </NuxtLink>
      </div>

      <div class="text-center">
        <UiBaseButton size="lg" to="/quincaillerie">
          Découvrir Tous nos Rayons
        </UiBaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    image: '/images/btp.png',
    title: 'MATÉRIELS DE BTP',
    description: 'Dameuse, compresseur, pilonneuse, etc.',
    href: '/quincaillerie/materiel-btp',
    gridClasses: 'lg:col-span-2 lg:row-span-2 min-h-[24rem]', // Carte 1: 2x2
  },
  {
    image: '/images/jardinage.png',
    title: 'MATÉRIELS DE JARDINAGE',
    description: 'Broyeur de végétaux, débroussailleuse.',
    href: '/quincaillerie/jardinage',
    gridClasses: 'lg:col-span-1 lg:row-span-2 min-h-[24rem]', // Carte 2: 1x2
  },
  {
    image: '/images/outillage.png',
    title: 'OUTILLAGE',
    description: 'Clé à griffe, coupe boulons, pince à rivet.',
    href: '/quincaillerie/outillage',
    gridClasses: 'lg:col-span-1 lg:row-span-1 min-h-[12rem]', // Carte 3: 1x1
  },
  {
    image: '/images/agregats.png',
    title: 'AGRÉGATS',
    description: 'Gravier, sable, scorie, touvenant.',
    href: '/quincaillerie/agregats',
    gridClasses: 'lg:col-span-1 lg:row-span-1 min-h-[12rem]', // Carte 4: 1x1
  },
  {
    image: '/images/plomberie.png',
    title: 'PLOMBERIE',
    description: 'Tuyau PVC, polyéthylène, accessoires.',
    href: '/quincaillerie/plomberie',
    gridClasses: 'lg:col-span-2 lg:row-span-1 min-h-[12rem]', // Carte 5: 2x1
  },
  {
    image: '/images/maconnerie.png',
    title: 'MAÇONNERIE & GROS ŒUVRE',
    description: 'Blocs, chainage, poteau, bétonnières.',
    href: '/quincaillerie/gros-oeuvre',
    gridClasses: 'lg:col-span-2 lg:row-span-1 min-h-[12rem]', // Carte 6: 2x1
  },
]
</script>