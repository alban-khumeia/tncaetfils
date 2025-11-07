<template>
  <section class="py-16 bg-background">
    <div class="container px-4 mx-auto">

      <UiSectionHeader
          title="Des visages, pas juste un comptoir."
          subtitle="Nous sommes une entreprise locale et fière de l'être. Venez nous rencontrer."
      />
      <div class="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2 md:gap-x-16 md:gap-y-12">

        <!-- Membre 1: Gérant -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 items-start">
          <NuxtImg
              src="/ano.webp"
              alt="Photo du Gérant"
              class="w-full"
              width="520"
              height="520"
          />
          <div>
            <h3 class="text-2xl font-black uppercase font-heading text-foreground">
              [Nom du Gérant]
            </h3>
            <p class="mt-1 text-base font-semibold uppercase font-sans text-primary">
              Gérant / Fondateur
            </p>
            <blockquote class="pl-4 mt-4 border-l-4 border-primary">
              <p class="font-sans text-lg italic text-muted-foreground">
                &quot;Ma vision a toujours été simple : un service fiable. Que ce soit pour livrer 10 tonnes de gravier
                ou pour vous conseiller sur une vis, l'exigence est la même.&quot;
              </p>
            </blockquote>
          </div>
        </div>

        <!-- Membre 2: Responsable Quincaillerie -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 items-start">
          <NuxtImg
              src="/ano.webp"
              alt="Photo du Responsable Quincaillerie"
              class="w-full"
              width="520"
              height="520"
          />
          <div>
            <h3 class="text-2xl font-black uppercase font-heading text-foreground">
              [Nom du Responsable]
            </h3>
            <p class="mt-1 text-base font-semibold uppercase font-sans text-primary">
              Responsable Quincaillerie
            </p>
            <blockquote class="pl-4 mt-4 border-l-4 border-primary">
              <p class="font-sans text-lg italic text-muted-foreground">
                &quot;Avec mes [X] ans d'expérience dans le BTP, je suis là pour vous aider à trouver la solution
                technique, pas seulement un produit en rayon.&quot;
              </p>
            </blockquote>
          </div>
        </div>

        <!-- Membre 3: Chauffeur / Logistique -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 items-start">
          <NuxtImg
              src="/ano.webp"
              alt="Photo du Responsable Logistique"
              class="w-full"
              width="520"
              height="520"
          />
          <div>
            <h3 class="text-2xl font-black uppercase font-heading text-foreground">
              [Nom Chauffeur]
            </h3>
            <p class="mt-1 text-base font-semibold uppercase font-sans text-primary">
              Logistique & Transport
            </p>
            <blockquote class="pl-4 mt-4 border-l-4 border-primary">
              <p class="font-sans text-lg italic text-muted-foreground">
                &quot;Je connais chaque route et chaque chantier de la région. Votre livraison est entre de bonnes
                mains, dans le respect des délais.&quot;
              </p>
            </blockquote>
          </div>
        </div>

        <!-- Membre 4: Conseil Vente -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 items-start">
          <NuxtImg
              src="/ano.webp"
              alt="Photo du Conseiller Vente"
              class="w-full"
              width="520"
              height="520"
          />
          <div>
            <h3 class="text-2xl font-black uppercase font-heading text-foreground">
              [Nom Conseiller]
            </h3>
            <p class="mt-1 text-base font-semibold uppercase font-sans text-primary">
              Conseil Vente Comptoir
            </p>
            <blockquote class="pl-4 mt-4 border-l-4 border-primary">
              <p class="font-sans text-lg italic text-muted-foreground">
                &quot;Un chantier réussi commence par le bon matériel. Je suis là pour préparer vos commandes et
                m'assurer que vous ne manquez de rien.&quot;
              </p>
            </blockquote>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>

