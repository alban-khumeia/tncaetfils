<template>
  <section id="contact" class="py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12">
        <div class="rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-auto">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59717.89!2d55.4515!3d-20.8823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDUyJzU2LjMiUyA1NcKwMjcnMDUuNCJF!5e0!3m2!1sfr!2sre!4v1234567890"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Localisation Matériaux Réunion"
          />
        </div>

        <div class="flex flex-col justify-center">
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Venez nous rencontrer</h2>

          <div class="space-y-6 mb-8">
            <div class="flex gap-4">
              <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:map-pin" class="h-6 w-6 text-primary"/>
              </div>
              <div>
                <h3 class="font-semibold text-foreground mb-1">Adresse</h3>
                <p class="text-muted-foreground leading-relaxed">
                  123 Route Nationale<br/>
                  97400 Saint-Denis<br/>
                  La Réunion
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:clock" class="h-6 w-6 text-primary"/>
              </div>
              <div>
                <h3 class="font-semibold text-foreground mb-1">Horaires d'ouverture</h3>
                <p class="text-muted-foreground leading-relaxed">
                  Lundi - Vendredi : 7h00 - 17h00<br/>
                  Samedi : 8h00 - 12h00<br/>
                  Dimanche : Fermé
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="lucide:phone" class="h-6 w-6 text-primary"/>
              </div>
              <div>
                <h3 class="font-semibold text-foreground mb-1">Téléphone</h3>
                <a href="tel:+262262123456" class="text-primary hover:underline text-lg font-medium">
                  0262 12 34 56
                </a>
              </div>
            </div>
          </div>

          <div class="rounded-lg overflow-hidden shadow-md">
            <NuxtImg
                src="/placeholder.svg?height=300&width=600"
                alt="Devanture du magasin"
                class="w-full h-48 object-cover"
                width="600"
                height="300"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
