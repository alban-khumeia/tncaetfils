<template>
  <section class="py-12 md:py-16 bg-muted">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-heading font-black uppercase text-foreground mb-4 text-balance">
          Questions fréquentes
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Tout ce que vous devez savoir sur nos services de quincaillerie et transport à La Réunion.
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border border-border overflow-hidden bg-background"
        >
          <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
              :aria-expanded="openIndex === index"
          >
            <h3 class="text-lg font-heading font-bold text-foreground pr-4 text-balance">
              {{ faq.question }}
            </h3>
            <Icon
                name="lucide:chevron-down"
                class="h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform"
                :class="{ 'rotate-180': openIndex === index }"
            />
          </button>

          <div
              v-show="openIndex === index"
              class="px-6 pb-5 text-muted-foreground leading-relaxed"
          >
            <p class="text-pretty">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const openIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
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
</script>
