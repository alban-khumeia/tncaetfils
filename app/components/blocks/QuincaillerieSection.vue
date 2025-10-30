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
        <div
            v-for="(category, index) in categories"
            :key="index"
            class="bg-background border border-border p-6 hover:shadow-lg transition-shadow"

        >
          <div class="h-12 w-12 bg-primary flex items-center justify-center mb-4">
            <Icon :name="category.icon" size="20" class="text-white"/>
          </div>

          <h3 class="text-xl font-heading font-black uppercase text-secondary mb-2">
            {{ category.title }}
          </h3>
          <p class="font-sans font-normal text-foreground leading-relaxed">
            {{ category.description }}
          </p>
        </div>
      </div>

      <div class="text-center">
        <UiBaseButton
            class="text-lg px-8 py-3 font-heading font-black uppercase transition-colors bg-secondary hover:bg-secondary-hover hover:text-white"
        >
          Découvrir tous nos rayons
        </UiBaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 7. Contenu mis à jour avec vos catégories
const categories = [
  {
    icon: 'lucide:hard-hat', // Précédemment 'lucide:hammer'
    title: 'MATÉRIELS DE BTP',
    description: 'Ex: Dameuse, compresseur, pilonneuse, etc.',
  },
  {
    icon: 'lucide:shovel', // Précédemment 'lucide:leaf'
    title: 'MATÉRIELS DE JARDINAGE',
    description: 'Ex: Broyeur de végétaux, débroussailleuse, tronçonneuse, etc.',
  },
  {
    icon: 'lucide:wrench', // Identique
    title: 'OUTILLAGE',
    description: 'Ex: Clé à griffe, coupe boulons, pince à rivet, marteau, etc.',
  },
  {
    icon: 'lucide:layers', // Précédemment 'lucide:paintbrush'
    title: 'AGRÉGATS (VRAC & BIG BAG)',
    description: 'Ex: Gravier, sable, scorie, touvenant',
  },
  {
    icon: 'lucide:droplet', // Précédemment 'lucide:droplet'
    title: 'TUYAUX ET ACCESSOIRES PLOMBERIE',
    description: 'Ex: Tuyau PVC, polyéthylène, accessoires',
  },
  {
    icon: 'lucide:brick-wall', // Précédemment 'lucide:zap' (électricité)
    title: 'MAÇONNERIE & GROS ŒUVRE',
    description: 'Ex: Blocs, chainage, poteau, bétonnières',
  },
]
</script>