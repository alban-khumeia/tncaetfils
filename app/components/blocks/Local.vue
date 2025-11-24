<template>
  <section id="contact" class="py-12 lg:py-24 bg-background scroll-mt-8 lg:scroll-mt-16">
    <div class="container mx-auto px-4">

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

        <div
            class="order-2 lg:order-1 relative w-full h-64 lg:h-auto lg:min-h-[500px] rounded-xl overflow-hidden shadow-lg border border-border/50 bg-muted">
          <iframe
              src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=TNCA et Fils&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              class="absolute inset-0 w-full h-full object-cover"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Localisation TNCA et Fils Quincaillerie à la Ravine des Cabris"
          />
        </div>

        <div class="order-1 lg:order-2 flex flex-col justify-center py-2 lg:py-6">
          <h2 class="text-3xl md:text-4xl font-heading leading-tight font-black uppercase text-secondary mb-6 lg:mb-8 text-balance">
            Notre Magasin
          </h2>

          <div class="flex flex-col gap-6 lg:gap-8 items-start mb-8 lg:mb-10">

            <div class="flex gap-4 group w-full">
              <div
                  class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Icon name="lucide:map-pin" class="h-6 w-6 text-primary"/>
              </div>
              <a
                  href="https://www.google.com/maps/place/TNCA+ET+FILS/@-21.2872196,55.4789098,17z/data=!3m1!4b1!4m6!3m5!1s0x2182a184761c594f:0x99e7809a330ec409!8m2!3d-21.2872246!4d55.4814847!16s%2Fg%2F11p3hp0p_m"
                  target="_blank"
                  rel="noopener"
                  class="flex-1 hover:text-primary transition-colors"
              >
                <h3 class="font-semibold text-foreground mb-1 uppercase tracking-wide text-sm">Adresse</h3>
                <p class="text-muted-foreground leading-relaxed text-sm md:text-base">
                  53 Chemin Anaclet Benard<br/>
                  97432 Ravine des Cabris<br/>
                  La Réunion
                </p>
              </a>
            </div>

            <div class="flex gap-4 w-full">
              <div
                  class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                <Icon name="lucide:clock" class="h-6 w-6 text-primary"/>
              </div>
              <div>
                <h3 class="font-semibold text-foreground mb-1 uppercase tracking-wide text-sm">Horaires d'ouverture</h3>
                <p class="text-muted-foreground leading-relaxed text-sm md:text-base">
                  <span class="block mb-1"><span class="font-medium text-foreground">Lun - Ven :</span> 6h30 - 12h00 / 13h30 - 17h00</span>
                  <span class="block mb-1"><span class="font-medium text-foreground">Samedi :</span> 6h30 - 12h00</span>
                  <span class="text-red-500 font-medium">Dimanche : Fermé</span>
                </p>
              </div>
            </div>

            <div class="flex gap-4 w-full">
              <div
                  class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                <Icon name="lucide:phone" class="h-6 w-6 text-primary"/>
              </div>
              <div class="flex flex-col justify-center">
                <h3 class="font-semibold text-foreground mb-0 uppercase tracking-wide text-sm">Téléphone</h3>
                <a href="tel:+262693034669"
                   class="text-secondary hover:text-primary hover:underline text-base md:text-md font-black tracking-tight transition-colors py-1">
                  06 93 034 669
                </a>
              </div>
            </div>
          </div>

          <div class="lg:pt-6 lg:border-t lg:border-border">
            <UiBaseButton
                href="https://www.google.com/maps/place/TNCA+ET+FILS/@-21.2872196,55.4789098,17z/data=!3m1!4b1!4m6!3m5!1s0x2182a184761c594f:0x99e7809a330ec409!8m2!3d-21.2872246!4d55.4814847!16s%2Fg%2F11p3hp0p_m"
                target="_blank"
                rel="noopener"
                leading-icon="lucide:navigation"
                class="w-full justify-center py-4 text-lg shadow-md active:scale-[0.98] transition-transform"
            >
              Y aller maintenant
            </UiBaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>