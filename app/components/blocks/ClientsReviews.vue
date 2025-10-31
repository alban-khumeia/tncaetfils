<template>
  <section class="py-16 md:py-24 bg-secondary">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-heading font-black uppercase text-background mb-4 text-balance">
          Avis vérifiés de nos clients
        </h2>
        <p class="font-sans text-lg text-background/80 max-w-2xl mx-auto leading-relaxed">
          Découvrez ce que nos clients professionnels et particuliers pensent de nos services.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
            v-for="(review, index) in reviews"
            :key="index"
            class="bg-foreground border border-secondary p-6 hover:shadow-lg transition-shadow"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="h-12 w-12 bg-primary flex items-center justify-center flex-shrink-0">
              <Icon name="lucide:user" class="h-5 w-5 text-background"/>
            </div>
            <div>
              <h3 class="font-sans font-semibold text-background">{{ review.name }}</h3>
              <p class="font-sans text-sm text-background/80">{{ review.role }}</p>
            </div>
          </div>

          <div class="flex gap-1 mb-4">
            <Icon
                v-for="star in 5"
                :key="star"
                name="heroicons-solid:star"
                class="fill-primary text-primary"
                size="20"
            />
          </div>

          <p class="font-sans text-background/90 leading-relaxed italic">
            "{{ review.comment }}"
          </p>

          <div class="mt-4 pt-4 border-t border-secondary">
            <div class="flex items-center gap-2 text-sm text-background/80">
              <Icon name="lucide:calendar" class="h-5 w-5"/>
              <span class="font-sans">{{ review.date }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <div class="inline-flex items-center gap-2 text-background/80">
          <Icon name="lucide:shield-check" class="h-5 w-5 text-primary"/>
          <span class="font-sans font-medium">Avis certifiés et vérifiés</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Le script reste inchangé
const reviews = [
  {
    name: 'Jean-Marc L.',
    role: 'Artisan maçon',
    comment: 'Excellent service ! Le stock est toujours disponible et les conseils sont précieux. La livraison est rapide et les chauffeurs sont professionnels. Je recommande vivement pour tous les chantiers.',
    date: 'Janvier 2025',
  },
  {
    name: 'Sophie R.',
    role: 'Particulier',
    comment: 'Très satisfaite de mon achat pour ma rénovation. L\'équipe a pris le temps de me conseiller sur les bons produits. Prix compétitifs et qualité au rendez-vous. Je reviendrai sans hésiter.',
    date: 'Décembre 2024',
  },
  {
    name: 'Patrick M.',
    role: 'Entrepreneur BTP',
    comment: 'Partenaire de confiance depuis 3 ans. Leur expertise en transport est un vrai plus pour nos gros chantiers. Toujours à l\'écoute et réactifs. Une référence à La Réunion.',
    date: 'Novembre 2024',
  },
]
</script>