<template>
  <section id="transport" class="py-12 md:py-24 bg-muted overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

        <div class="hidden md:block relative md:order-2">
          <NuxtImg
              src="/camion.png"
              alt="Camion livraison matériaux"
              class="w-full h-auto max-h-[500px] object-contain mix-blend-multiply"
              width="600"
              height="500"
          />
        </div>

        <div class="md:order-1 flex flex-col">
          <span class="block text-primary font-bold tracking-widest uppercase text-xs mb-2">
            Logistique & Service
          </span>

          <h2 class="text-3xl md:text-4xl font-heading font-black uppercase text-secondary mb-4 text-balance">
            Transport de matériaux
          </h2>

          <p class="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed border-l-4 border-border pl-4">
            Depuis 25 ans, notre flotte livre vos chantiers. Du simple sac au semi-remorque, nous garantissons rapidité
            et accès difficile.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mb-6">
            <UiBaseCard
                v-for="(service, index) in services"
                :key="index"
                :icon="service.icon"
                :title="service.title"
                :description="service.description"
            />
          </div>

          <div
              class="md:hidden relative w-full -mx-4 mb-4 flex justify-center bg-gradient-to-r from-transparent via-white/40 to-transparent">
            <NuxtImg
                src="/camion.png"
                alt="Camion livraison matériaux"
                class="h-48 w-auto object-contain mix-blend-multiply"
                width="400"
                height="300"
            />
          </div>

          <UiBaseButton
              size="lg"
              to="/transport-materiaux"
              class="w-full md:w-auto font-bold uppercase tracking-wide shadow-lg z-10"
          >
            Voir nos tarifs transport
          </UiBaseButton>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Données validées client conservées strictement
const services = [
  {
    icon: 'lucide:truck',
    title: 'Flotte Polyvalente',
    description: '6 camions récents. Du simple sac de ciment au chargement complet.',
  },
  {
    icon: 'lucide:package',
    title: 'Chargement Soigné',
    description: 'Manutention et arrimage par nos experts pour sécuriser vos matériaux.',
  },
  {
    icon: 'lucide:map-pin',
    title: 'Livraison Toute l\'Île',
    description: 'Délais respectés et couverture logistique sur toute La Réunion.',
  },
  {
    icon: 'lucide:shield-check',
    title: 'Transport Assuré',
    description: 'Capacité > 3.5T. Marchandise couverte par notre assurance RC Pro.',
  },
]
</script>