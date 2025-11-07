<template>
  <BlocksHero />
  <BlocksCategories
      title="Nos Services de Transport & Logistique Chantier"
      subtitle="Nous disposons d'une flotte adaptée à tous vos besoins, de l'évacuation de gravats à la livraison de matériaux sensibles."
      :categories="categoriesData"/>
  <BlocksReassurance
      :title="reassuranceTransports.title"
      :intro="reassuranceTransports.intro"
      :pillars="reassuranceTransports.pillars"
      :cta="reassuranceTransports.cta"
      :header="reassuranceTransports.header"
  />
  <BlocksCTA />
  <BlocksFAQ
      title="Questions fréquentes"
      subtitle="Tout ce que vous devez savoir sur nos services."
      :items="faqsTransports"
  />
</template>

<script setup lang="ts">
const reassuranceTransports = {
  title: "Une flotte fiable, des chauffeurs d'expérience.",
  intro: "Ne jonglez plus entre fournisseurs et transporteurs. Commandez vos matériaux BTP, outillage et jardinage dans notre nouvelle quincaillerie et planifiez la livraison en une seule fois.",
  pillars: [
    {
      icon: 'lucide:user-check',
      title: "La Flotte",
      description: "Notre parc de [X] camions (bennes, grues, plateaux...) est entretenu rigoureusement pour garantir zéro panne."
    },
    {
      icon: 'lucide:package',
      title: "Les Chauffeurs",
      description: "Nos chauffeurs sont tous expérimentés, formés [CACES, etc.] et connaissent parfaitement les accès de [Région]."
    },
    {
      icon: 'lucide:truck',
      title: "La Réactivité",
      description: "Nous comprenons les imprévus d'un chantier. Nous nous engageons sur des délais clairs et une réactivité maximale."
    }
  ],
  cta: {
    text: "Voir nos rayons de produits",
    to: "/quincaillerie"
  },
  header: {
    title: "Achetez vos matériaux, on s'occupe de la livraison.",
  }
};

const faqsTransports = [
  {
    question: 'Avez-vous un service de conseil pour les professionnels ?',
    answer: 'Oui, notre équipe d\'experts est à votre disposition pour vous conseiller sur le choix des matériaux, les quantités nécessaires et les meilleures solutions pour votre chantier. Nous travaillons avec des artisans et entreprises BTP depuis plus de 25 ans à La Réunion.'
  },
  {
    question: 'Puis-je commander en ligne ou par téléphone ?',
    answer: 'Vous pouvez passer commande par téléphone pour une réponse immédiate. Pour les grosses commandes ou devis personnalisés, nous vous recommandons de nous contacter directement ou de venir en magasin pour bénéficier de nos conseils d\'experts.'
  },
  {
    question: 'Quels moyens de paiement acceptez-vous ?',
    answer: 'Nous acceptons les paiements par carte bancaire, chèque, virement bancaire et espèces. Pour les professionnels, nous proposons également des facilités de paiement et l\'ouverture de comptes clients avec paiement différé.'
  },
  {
    question: 'Avez-vous un stock permanent de matériaux ?',
    answer: 'Oui, nous maintenons un stock important de matériaux et produits de quincaillerie pour répondre aux besoins immédiats. Pour les articles spécifiques ou en grande quantité, nous pouvons vous les obtenir rapidement grâce à notre réseau de fournisseurs locaux et nationaux.'
  }
]

interface Category {
  title: string
  description: string
  icon: string
}

const categoriesData = ref<Category[]>([
  {
    title: 'Livraison Vrac & Matériaux',
    description: 'Sable, gravier, roches, terre végétale. Nous livrons en vrac ou en big-bag directement sur votre chantier.',
    icon: 'lucide:truck',
  },
  {
    title: 'Location Camion Grue (avec chauffeur)',
    description: 'Pour vos charges lourdes, la pose de charpentes, ou le déchargement de palettes en hauteur. Intervention sécurisée.',
    icon: 'lucide:wrench',
  },
  {
    title: 'Évacuation & Mouvement de Terre',
    description: 'Nous assurons l\'évacuation de vos gravats, déblais de chantier et assurons vos travaux de terrassement.',
    icon: 'lucide:paint-roller',
  },
])
</script>

<style scoped>

</style>