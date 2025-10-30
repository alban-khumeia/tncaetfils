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

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <NuxtLink
            v-for="(category, index) in categories"
            :key="index"
            :to="category.href"
            class="relative block border border-border hover:shadow-lg transition-shadow overflow-hidden group"
        >
          <div class="absolute inset-0 bg-secondary/1"></div>

          <div class="relative z-10 p-6 flex flex-col h-full">
            <div class="h-12 w-12 bg-primary flex items-center justify-center mb-4">
              <Icon :name="category.icon" size="20" class="text-white"/>
            </div>

            <h3 class="text-xl font-heading font-black uppercase text-foreground mb-2">
              {{ category.title }}
            </h3>

            <p class="font-sans font-normal text-muted-foreground leading-relaxed flex-grow">
              {{ category.description }}
            </p>
          </div>
        </NuxtLink>
      </div>

      <div class="text-center">
        <UiBaseButton  size="lg">
          Découvrir tous nos rayons
        </UiBaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    icon: 'lucide:hard-hat',
    title: 'MATÉRIELS DE BTP',
    description: 'Ex: Dameuse, compresseur, pilonneuse, etc.',
    href: '/quincaillerie/materiel-btp',
  },
  {
    icon: 'lucide:shovel',
    title: 'MATÉRIELS DE JARDINAGE',
    description: 'Ex: Broyeur de végétaux, débroussailleuse, etc.',
    href: '/quincaillerie/jardinage',
  },
  {
    icon: 'lucide:wrench',
    title: 'OUTILLAGE',
    description: 'Ex: Clé à griffe, coupe boulons, pince à rivet, etc.',
    href: '/quincaillerie/outillage',
  },
  {
    icon: 'lucide:layers',
    title: 'AGRÉGATS (VRAC & BIG BAG)',
    description: 'Ex: Gravier, sable, scorie, touvenant',
    href: '/quincaillerie/agregats',
  },
  {
    icon: 'lucide:droplet',
    title: 'TUYAUX ET ACCESSOIRES PLOMBERIE',
    description: 'Ex: Tuyau PVC, polyéthylène, accessoires',
    href: '/quincaillerie/plomberie',
  },
  {
    icon: 'lucide:brick-wall',
    title: 'MAÇONNERIE & GROS ŒUVRE',
    description: 'Ex: Blocs, chainage, poteau, bétonnières',
    href: '/quincaillerie/gros-oeuvre',
  },
]
</script>