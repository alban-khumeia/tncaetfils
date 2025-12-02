<template>
  <BlocksHero
      variant="service"
      breadcrumb="Nos Rayons"
      title="Outillage Pro & Matériaux"
      subtitle="Plus de 5000 références en stock : du gros œuvre aux finitions."
      imageSrc="/images/hero-quincaillerie.jpeg"
      imageAlt="Rayon outillage électroportatif"
      :tags="['Agrégats', 'Plomberie', 'Électricité', 'Outillage']"
      :primary-action="{ label: 'Voir le catalogue', href: '/catalogues', variant: 'solid', icon: 'lucide:file-text' }"
      :secondary-action="{ label: 'Demander un stock', href: '/contact', variant: 'glass' }"
  />
  <BlocksCategories
      title="Tous vos besoins, un seul magasin"
      subtitle="Fini de courir. Nous avons sélectioné les essentiels pour les professionnels du BTP, les artisans et les
      bricoleurs exigeants. Voici nos principaux rayons :"
      :categories="categoriesData"
  />
  <BlocksReassurance
      :title="reassuranceQuincaillerie.title"
      :intro="reassuranceQuincaillerie.intro"
      :pillars="reassuranceQuincaillerie.pillars"
      :cta="reassuranceQuincaillerie.cta"
  />
  <BlocksLocal />
  <BlocksCTA />
  <BlocksFAQ
      title="Questions fréquentes"
      subtitle="Tout ce que vous devez savoir sur nos services."
      :items="faqsQuincaillerie"
  />
</template>

<script setup lang="ts">
import type {Category} from "~/components/blocks/Categories.vue";
import BlocksHero from "~/components/blocks/Hero.vue";

const reassuranceQuincaillerie = {
  title: "Plus qu'une quincaillerie. Votre partenaire chantier.",
  intro: "",
  pillars: [
    {
      icon: 'lucide:user-check',
      title: "Le Conseil d'Expert",
      description: "Notre équipe connaît les matériaux. On ne vous vend pas juste un produit, on vous conseille sur la bonne solution pour votre chantier."
    },
    {
      icon: 'lucide:package',
      title: "Matières premières fondations de construction",
      description: "Tout est au même endroit. Ouvert à partir de 6h30."
    },
    {
      icon: 'lucide:truck',
      title: "La Livraison",
      description: "Besoin de gros volumes ? D'une livraison ? C'est notre métier. Nous assurons la logistique de vos matériaux directement sur site."
    }
  ],
  cta: {
    text: "Voir nos services de transport",
    to: "/transport"
  }
};

const faqsQuincaillerie = [
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

const categoriesData = ref<Category[]>([
  {
    title: 'Gros Œuvre & Maçonnerie',
    description: 'Ciment, parpaings, fers à béton, sable, gravier. Tout pour démarrer vos fondations et vos murs.',
    icon: 'lucide:brick',
  },
  {
    title: 'Outillage Pro',
    description: 'Perceuses, visseuses, scies, marteaux, niveaux. Nous travaillons avec les meilleures marques pour garantir la fiabilité.',
    icon: 'lucide:wrench',
  },
  {
    title: 'Peinture & Traitement',
    description: 'Peintures intérieures, extérieures, lasures, et tout le matériel du peintre (pinceaux, rouleaux).',
    icon: 'lucide:paint-roller',
  },
  {
    title: 'Électricité',
    description: 'Câbles, gaines, disjoncteurs, interrupteurs, prises et éclairage. Conforme aux normes en vigueur.',
    icon: 'lucide:plug',
  },
  {
    title: 'Plomberie & Sanitaire',
    description: 'Raccords PVC, PER, cuivre, robinetterie, et équipement pour salle de bains et cuisine.',
    icon: 'lucide:pipe',
  },
  {
    title: 'Visserie & Boulonnerie',
    description: 'Un rayon complet de vis, écrous, boulons, et fixations spéciales pour bois, métal et béton.',
    icon: 'lucide:anchor',
  },
  {
    title: 'Jardin & Extérieur',
    description: 'Outils de jardinage, terreau, arrosage, clôtures et petits aménagements extérieurs.',
    icon: 'lucide:shovel',
  },
  {
    title: 'EPI & Sécurité',
    description: 'Équipements de Protection Individuelle : casques, gants, chaussures de sécurité, harnais.',
    icon: 'lucide:shield',
  },
  {
    title: 'Menuiserie & Aluminium',
    description: 'Panneaux, tasseaux, bois de charpente et quincaillerie d\'ameublement. Aluminium standard et sur mesure.',
    icon: 'lucide:frame',
  },
  {
    title: 'Revêtement Sol & Mur',
    description: 'Carrelage, parquet, lambris et tous les accessoires de pose (colle, joints, outillage).',
    icon: 'lucide:layers',
  },
  {
    title: 'Terrassement',
    description: 'Minipelle, fouille, petits travaux.',
    icon: 'lucide:layers',
  },
])
</script>

<style scoped>

</style>
