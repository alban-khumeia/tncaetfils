<template>
  <div class="min-h-screen">
    <main>
      <BlocksHero
          variant="home"
          title="Quincaillerie et Matériaux de construction à Ravine des Cabris"
          subtitle="Votre partenaire local pour l'outillage et la livraison de chantier partout sur l'Île de la Réunion"
          imageSrc="/hero.png"
          imageAlt="Magasin de matériaux"
          :primary-action="{ label: '06 93 03 46 69', href: 'tel:+262693034669', icon: 'lucide:phone', variant: 'solid' }"
          :secondary-action="{ label: 'Venir au magasin', href: '#contact', variant: 'glass' }"
          />
      <BlocksTrustBar :features="trustFeatures"/>
      <BlocksCategoryGrid
          :title="pageTitle"
          :subtitle="pageSubtitle"
          :categories="pageCategories"
          :cta-text="cta.text"
          :cta-link="cta.link"/>
      <BlocksTransportSection/>
      <BlocksLocal/>
      <BlocksClientsReviews
          title="Ce qu'ils disent de nous"
          :items="staticReviews"
      />
      <BlocksCatalogue />
      <BlocksCTA/>
      <BlocksFAQ
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir sur nos services."
          :items="faqsAccueil"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import {useHead} from '#app';
import type {Category} from '~/components/blocks/CategoryGrid.vue'
import BlocksHero from '~/components/blocks/Hero.vue'
import type {ReviewItem} from "~/components/blocks/ClientsReviews.vue";

const faqsAccueil = [
  {
    question: 'Quels sont vos horaires d\'ouverture à La Réunion ?',
    answer: 'Notre magasin de quincaillerie est ouvert du lundi au vendredi de 6h30 à 12h puis de 13h30 à 17h et le samedi de 6h30 à 12h. Notre service de transport et livraison est disponible du lundi au vendredi de 6h à 18h pour répondre aux besoins des chantiers.'
  },
  {
    question: 'Livrez-vous partout à La Réunion ?',
    answer: 'Oui, nous livrons sur toute l\'île de La Réunion : Nord, Sud, Est et Ouest. Nos camions sont équipés pour accéder aux zones difficiles et nos chauffeurs connaissent parfaitement le terrain réunionnais. Délai de livraison : 24 à 48h selon votre localisation.'
  },
  {
    question: 'Proposez-vous des devis gratuits ?',
    answer: 'Absolument ! Nous établissons des devis gratuits sous 24h pour tous vos projets, qu\'il s\'agisse d\'achat de matériaux en quincaillerie ou de transport de matériaux BTP. Contactez-nous par téléphone, email ou directement en magasin.'
  },
  {
    question: 'Quels types de matériaux transportez-vous ?',
    answer: 'Nous transportons tous types de matériaux BTP : sable, gravier, ciment, parpaings, fer à béton, bois de construction, tuiles, et bien plus. Nos camions peuvent transporter de 1 à 20 tonnes selon vos besoins. Nous gérons également les matériaux spéciaux et encombrants.'
  },
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

const trustFeatures = [
  {
    icon: 'lucide:award',
    title: '25 ans d\'expérience',
    description: 'Expertise reconnue dans le transport',
  },
  {
    icon: 'lucide:wrench',
    title: 'Conseil Pro BTP',
    description: 'Équipe d\'experts à votre service',
  },
  {
    icon: 'lucide:truck',
    title: 'Stock Local',
    description: 'Disponible immédiatement à La Réunion',
  },
  {
    icon: 'lucide:package-check',
    title: 'Livraison Rapide',
    description: 'Service de transport professionnel',
  },
]

const pageTitle = "Votre nouvelle quincaillerie à La Réunion"
const pageSubtitle = "Découvrez notre large gamme de produits pour tous vos projets de construction, rénovation et aménagement."

const cta = {
  text: "Découvrir Tous nos Rayons",
  link: "/quincaillerie"
}

// 3. Vos catégories, typées avec l'interface importée
const pageCategories: Category[] = [
  {
    id: 'btp-1',
    image: '/images/btp.png',
    title: 'MATÉRIELS DE BTP',
    description: 'Dameuse, compresseur, pilonneuse.',
    href: '/quincaillerie',
    gridClasses: 'lg:col-span-2 lg:row-span-2 lg:min-h-[24rem]',
  },
  {
    id: 'jardin-2',
    image: '/images/jardinage.png',
    title: 'MATÉRIELS DE JARDINAGE',
    description: 'Broyeur de végétaux, débroussailleuse.',
    href: '/quincaillerie',
    gridClasses: 'lg:col-span-1 lg:row-span-2 lg:min-h-[24rem]',
  },
  {
    id: 'outil-3',
    image: '/images/outillage.png',
    title: 'OUTILLAGE',
    description: 'Clé à griffe, coupe boulons, pince à rivet.',
    href: '/quincaillerie',
    gridClasses: 'lg:col-span-1 lg:row-span-1 lg:min-h-[12rem]',
  },
  {
    id: 'agregat-4',
    image: '/images/agregats.png',
    title: 'AGRÉGATS',
    description: 'Gravier, sable, scorie, touvenant.',
    href: '/quincaillerie',
    gridClasses: 'lg:col-span-1 lg:row-span-1 lg:min-h-[12rem]',
  },
  {
    id: 'plomb-5',
    image: '/images/plomberie.png',
    title: 'PLOMBERIE',
    description: 'Tuyau PVC, polyéthylène, accessoires.',
    href: '/quincaillerie',
    gridClasses: 'lg:col-span-2 lg:row-span-1 lg:min-h-[12rem]',
  },
  {
    id: 'macon-6',
    image: '/images/maconnerie.png',
    title: 'MAÇONNERIE & GROS ŒUVRE',
    description: 'Blocs, chainage, poteau, bétonnières.',
    href: '/quincaillerie',
    gridClasses: 'lg:col-span-2 lg:row-span-1 lg:min-h-[12rem]',
  },
]

const staticReviews: ReviewItem[] = [
  {
    id: 1,
    author: 'Jean-Marc L.',
    role: 'Artisan maçon',
    content: 'Excellent service ! Le stock est toujours disponible et les conseils sont précieux. La livraison est rapide et les chauffeurs sont professionnels. Je recommande vivement pour tous les chantiers.',
    date: 'Janvier 2025',
    rating: 5
  },
  {
    id: 2,
    author: 'Sophie R.',
    role: 'Particulier',
    content: 'Très satisfaite de mon achat pour ma rénovation. L\'équipe a pris le temps de me conseiller sur les bons produits. Prix compétitifs et qualité au rendez-vous.',
    date: 'Décembre 2024',
    rating: 5
  },
  {
    id: 3,
    author: 'Patrick M.',
    role: 'Entrepreneur BTP',
    content: 'Partenaire de confiance depuis 3 ans. Leur expertise en transport est un vrai plus pour nos gros chantiers. Toujours à l\'écoute et réactifs. Une référence à La Réunion.',
    date: 'Novembre 2024',
    rating: 4 // Exemple: 4 étoiles pour tester l'affichage dynamique
  },
]
useHead({
  title: 'Matériaux Réunion - Quincaillerie & Transport de Matériaux BTP'
})
</script>
