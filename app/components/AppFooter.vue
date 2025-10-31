<template>
  <footer class="relative py-12 overflow-hidden">

    <NuxtImg
        src="/footer2.jpg"
        alt=""
        role="presentation"
        placeholder
        class="absolute inset-0 w-full h-full object-cover object-bottom z-0"
    />

    <div class="absolute inset-0 bg-secondary opacity-75 z-10"></div>


    <div class="relative container mx-auto px-4 text-background z-20">

      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="font-heading font-black uppercase text-xl mb-4 drop-shadow">
            TNCA ET FILS
          </h3>
          <p class="font-sans text-sm opacity-90 leading-relaxed drop-shadow">
            Votre partenaire de confiance pour tous vos projets de construction et rénovation à La Réunion.
          </p>
        </div>

        <div>
          <h4 class="font-heading font-black uppercase text-base mb-4 drop-shadow">
            Navigation
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#quincaillerie" class="opacity-90 hover:opacity-100 hover:underline drop-shadow">
                Quincaillerie
              </a>
            </li>
            <li>
              <a href="#quincaillerie" class="opacity-90 hover:opacity-100 hover:underline drop-shadow">
                Transport
              </a>
            </li>
            <li>
              <a href="#quincaillerie" class="opacity-90 hover:opacity-100 hover:underline drop-shadow">
                Qui sommes-nous
              </a>
            </li>
            <li>
              <a href="#quincaillerie" class="opacity-90 hover:opacity-100 hover:underline drop-shadow">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-heading font-black uppercase text-base mb-4 drop-shadow">
            Contact
          </h4>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-2">
              <Icon name="lucide:phone" class="h-5 w-5 mt-0.5 flex-shrink-0 drop-shadow"/>
              <a href="tel:+262262123456" class="opacity-90 hover:opacity-100 hover:underline drop-shadow">
                0692 93 65 80
              </a>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="lucide:map-pin" class="h-5 w-5 mt-0.5 flex-shrink-0 drop-shadow"/>
              <span class="opacity-90 drop-shadow">
                53 Chemin Anaclet Benard<br/>
                97432 Ravine des Cabris
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-heading font-black uppercase text-base mb-4 drop-shadow">
            Horaires
          </h4>
          <ul class="space-y-2 text-sm opacity-90">
            <li class="font-sans drop-shadow">Lun-Ven : 6h30 - 12h00 | 13h30 - 17h</li>
            <li class="font-sans drop-shadow">Samedi : 6h30 - 12h00</li>
            <li class="font-sans drop-shadow">Dimanche : Fermé</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-background/20 pt-8 text-center text-sm opacity-75 drop-shadow">
        <p>&copy; {{ new Date().getFullYear() }} TNCA ET FILS. Tous droits réservés.</p>
        <div class="mt-2 space-x-4">
          <a href="#" class="hover:underline drop-shadow">
            Mentions légales
          </a>
          <a href="#" class="hover:underline drop-shadow">
            Politique de confidentialité
          </a>
          <a href="#" class="hover:underline drop-shadow">
            CGV
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Le composant est maintenant optimisé avec NuxtImg
</script>