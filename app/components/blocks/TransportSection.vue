<template>
  <section id="transport" class="py-16 md:py-24 bg-muted">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-start">

        <div class="relative md:order-2">
          <NuxtImg
              src="/camion.png"
              alt="Camion de livraison"
              class="w-full"
              width="600"
              height="500"
          />
        </div>

        <div class="md:order-1">
          <h2 class="text-3xl md:text-4xl font-heading leading-tight font-black uppercase text-secondary mb-6 text-balance">
            Notre métier historique : Transport de matériaux
          </h2>
          <p class="text-lg text-foreground mb-8 leading-relaxed">
            Depuis plus de 25 ans, nous assurons le transport de matériaux de construction sur toute La Réunion. Notre
            expertise et notre flotte moderne garantissent une livraison rapide et sécurisée de vos commandes, du
            simple sac de ciment au camion complet de matériaux.
          </p>

          <div class="grid sm:grid-cols-2 gap-6 mb-8">
            <UiBaseCard
                v-for="(service, index) in services"
                :key="index"
                :icon="service.icon"
                :title="service.title"
                :description="service.description"
            />
          </div>

          <UiBaseButton size="lg" to="/transport-materiaux">
            Découvrir Notre Service de Transport
          </UiBaseButton>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// CHANGEMENT : Descriptions rééquilibrées pour une harmonie visuelle
const services = [
  {
    icon: 'lucide:truck',
    title: 'Flotte moderne',
    description: '6 camions adaptés, du simple sac au camion complet.',
  },
  {
    icon: 'lucide:package',
    title: 'Chargement sécurisé',
    description: 'Manutention professionnelle de vos matériaux par nos experts.',
  },
  {
    icon: 'lucide:clock',
    title: 'Livraison rapide',
    description: 'Délais respectés et couverture complète de toute l\'île.',
  },
  {
    icon: 'lucide:shield',
    title: 'Transport Garanti', // Titre raccourci
    description: 'Capacité > 3T5. Couverture complète via notre assurance RC Pro.',
  },
]
</script>