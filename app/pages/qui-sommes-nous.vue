<template>
  <BlocksHero />
  <BlocksTimeline />
  <BlocksTrustBar :features="features"/>
  <BlocksÉquipe />
  <BlocksCTA/>
  <BlocksLocal />
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'lucide:award',
    title: 'Conseil d\'experts',
    description: 'On connaît les produits et leur mise en œuvre.',
  },
  {
    icon: 'lucide:wrench',
    title: 'Stock réel',
    description: 'Ce qui est en rayon est disponible.',
  },
  {
    icon: 'lucide:truck',
    title: 'Logistique intégrée',
    description: 'Votre matériel, du plus petit au plus gros, livré par notre propre flotte.',
  },
  {
    icon: 'lucide:package-check',
    title: 'Service Efficace',
    description: 'Zéro intermédiaire, zéro délai inutile.',
  },
]
</script>

<style scoped>

</style>