<template>
  <BlocksCategories
      class="mt-12"
      title="Du transport à la quincaillerie : une évolution logique."
      subtitle="Notre métier n'a jamais été juste de conduire des camions. Il a toujours été de comprendre les matériaux, de respecter les délais et de connaître les réalités d'un chantier."
      :categories="categoriesData"
  />
  <BlocksTrustBar :features="features"/>
  <BlocksÉquipe />
  <BlocksCTA
      title="Rejoignez l'équipe !"
      description="Chauffeurs, magasiniers... nous recrutons des profils motivés."
      cta-label="Nous contacter"
      cta-link="/carrieres"
      cta-icon="lucide:hard-hat"
      image-src="/team-photo.jpg"
  />
  <BlocksLocal />
</template>

<script setup lang="ts">
import type {Category} from "~/components/blocks/Categories.vue";

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

const categoriesData = ref<Category[]>([
  {
    title: 'Notre force historique : Le Transport',
    description: 'Pendant [X] ans, [Nom de l\'entreprise] a été le partenaire fiable des artisans et des constructeurs de [Région]. Nous avons appris sur le terrain, en livrant des tonnes de ciment, de sable et d\'outils. Nous savons ce qui fonctionne, ce qui est urgent et ce qui est critique.',
    icon: 'lucide:truck',
  },
  {
    title: 'Notre nouvelle mission : La Quincaillerie',
    description: 'À force d\'entendre nos clients nous dire \'Si seulement vous vendiez aussi les matériaux que vous livrez...\', nous avons franchi le pas. Cette quincaillerie est le résultat de vos demandes : un guichet unique où vous trouvez le bon produit, le bon conseil, et la bonne solution de livraison.',
    icon: 'lucide:wrench',
  }
])

</script>

<style scoped>

</style>