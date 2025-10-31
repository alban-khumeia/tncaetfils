<template>
  <section id="contact" class="py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12">
        <div class="overflow-hidden shadow-lg h-[400px] lg:h-auto">
          <iframe
              src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=TNCA et Fils&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Localisation TNCA et Fils Quincaillerie à la Ravine des Cabris"
          />
        </div>

        <div class="flex flex-col justify-center">
          <h2 class="text-3xl md:text-4xl font-heading leading-tight font-black uppercase text-secondary mb-6 text-balance">Notre Magasin</h2>

          <div class="flex flex-col gap-6 items-start mb-8">
            <div class="flex gap-4">
              <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:map-pin" class="h-6 w-6 text-primary"/>
              </div>
              <a
                  href="https://www.google.com/maps/place/TNCA+ET+FILS/@-21.2872196,55.4789098,17z/data=!3m1!4b1!4m6!3m5!1s0x2182a184761c594f:0x99e7809a330ec409!8m2!3d-21.2872246!4d55.4814847!16s%2Fg%2F11p3hp0p_m"
                  target="_blank"
                  rel="noopener"
                  class="hover:text-primary transition-colors"
              >
                <h3 class="font-semibold text-foreground mb-1">Adresse</h3>
                <p class="text-muted-foreground leading-relaxed">
                  53 Chemin Anaclet Benard<br/>
                  97432 Ravine des Cabris<br/>
                  La Réunion
                </p>
              </a>
            </div>

            <div class="flex gap-4">
              <div class="h-12 w-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:clock" class="h-6 w-6 text-primary"/>
              </div>
              <div>
                <h3 class="font-semibold text-foreground mb-1">Horaires d'ouverture</h3>
                <p class="text-muted-foreground leading-relaxed">
                  Lundi - Vendredi : 6h30 - 12h00 / 13h30 - 17h00<br/>
                  Samedi : 6h30 - 12h00<br/>
                  Dimanche : Fermé
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="h-12 w-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:phone" class="h-6 w-6 text-primary"/>
              </div>
              <div>
                <h3 class="font-semibold text-foreground mb-1">Téléphone</h3>
                <a href="tel:+262692936580" class="text-secondary hover:underline text-lg font-medium">
                  06 92 93 65 80
                </a>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <UiBaseButton
                href="https://www.google.com/maps/place/TNCA+ET+FILS/@-21.2872196,55.4789098,17z/data=!3m1!4b1!4m6!3m5!1s0x2182a184761c594f:0x99e7809a330ec409!8m2!3d-21.2872246!4d55.4814847!16s%2Fg%2F11p3hp0p_m"
                target="_blank"
                rel="noopener"
                leading-icon="lucide:navigation"
                class="w-full"
            >
              Voir l'itinéraire
            </UiBaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>