<template>
  <section id="transport" class="py-16 md:py-24 bg-muted">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-heading leading-tight font-black uppercase text-secondary mb-6 text-balance">
            Notre métier historique : Transport de matériaux
          </h2>
          <p class="text-lg text-foreground mb-8 leading-relaxed">
            Depuis plus de 25 ans, nous assurons le transport de matériaux de construction sur toute La Réunion. Notre
            expertise et notre flotte moderne garantissent une livraison rapide et sécurisée de vos commandes, du
            simple sac de ciment au camion complet de matériaux.
          </p>

          <div class="grid sm:grid-cols-2 gap-6 mb-8">
            <div
                v-for="(service, index) in services"
                :key="index"
                class="flex gap-4 items-start bg-background p-6 border border-border"
            >
              <div class="h-10 w-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon :name="service.icon" class="h-5 w-5 text-primary"/>
              </div>
              <div>
                <h3 class="font-semibold text-foreground mb-1">{{ service.title }}</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">{{ service.description }}</p>
              </div>
            </div>
          </div>

          <UiBaseButton to="#transport" size="lg">
            Découvrir notre service de transport
          </UiBaseButton>
        </div>

        <div class="relative">
          <NuxtImg
              src="/camion.png"
              alt="Camion de livraison"
              class="w-full"
              width="600"
              height="500"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: 'lucide:truck',
    title: 'Flotte moderne',
    description: 'Camions adaptés à tous types de matériaux',
  },
  {
    icon: 'lucide:package',
    title: 'Chargement sécurisé',
    description: 'Manutention professionnelle de vos matériaux',
  },
  {
    icon: 'lucide:clock',
    title: 'Livraison rapide',
    description: 'Délais respectés sur toute l\'île',
  },
  {
    icon: 'lucide:shield',
    title: 'Assurance complète',
    description: 'Vos matériaux protégés pendant le transport',
  },
]
</script>