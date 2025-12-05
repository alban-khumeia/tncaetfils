<template>
  <footer class="relative pt-8 pb-8 md:pt-12 md:pb-4 overflow-hidden bg-gray-900 text-background">
    <NuxtImg
        src="/footer.jpg"
        alt=""
        role="presentation"
        placeholder
        class="absolute inset-0 w-full h-full object-cover object-bottom z-0 pointer-events-none"
    />

    <div class="absolute inset-0 bg-secondary/85 md:bg-secondary/75 z-10"></div>

    <div class="relative container mx-auto px-4 z-20">

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 mb-8 md:mb-12">

        <div class="text-center md:text-left border-b border-white/10 pb-6 md:border-none md:pb-0">
          <h3 class="font-heading font-black uppercase text-2xl md:text-xl mb-3 drop-shadow-md tracking-wide">
            TNCA ET FILS
          </h3>
          <p class="font-sans text-sm opacity-90 leading-relaxed drop-shadow max-w-sm mx-auto md:mx-0">
            Votre partenaire de confiance pour tous vos projets de construction et rénovation à La Réunion.
          </p>
        </div>

        <div>
          <h4 class="font-heading font-black uppercase text-base mb-4 drop-shadow text-center md:text-left">
            Navigation
          </h4>
          <ul class="grid grid-cols-2 md:block gap-2 md:space-y-2 text-sm text-center md:text-left">
            <li>
              <a href="/#quincaillerie"
                 class="block py-2 md:py-0 opacity-90 hover:opacity-100 hover:underline drop-shadow">
                Quincaillerie
              </a>
            </li>
            <li>
              <a href="/#transport" class="block py-2 md:py-0 opacity-90 hover:opacity-100 hover:underline drop-shadow">
                Transport
              </a>
            </li>
            <li>
              <a href="/#qui-sommes-nous"
                 class="block py-2 md:py-0 opacity-90 hover:opacity-100 hover:underline drop-shadow">
                Qui sommes-nous
              </a>
            </li>
            <li>
              <a href="/#contact" class="block py-2 md:py-0 opacity-90 hover:opacity-100 hover:underline drop-shadow">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-heading font-black uppercase text-base mb-4 drop-shadow text-center md:text-left">
            Contact
          </h4>
          <ul class="space-y-4 text-sm">
            <li class="flex flex-col md:flex-row items-center md:items-start gap-2">
              <a href="tel:+262693034669"
                 class="flex items-center justify-center gap-3 w-full md:w-auto bg-white/10 md:bg-transparent border border-white/20 md:border-none rounded p-3 md:p-0 hover:bg-white/20 transition-colors font-bold text-lg md:text-sm md:font-normal shadow-lg md:shadow-none">
                <Icon name="lucide:phone" class="h-5 w-5 drop-shadow"/>
                <span>06 93 034 669</span>
              </a>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start gap-2 text-center md:text-left">
              <Icon name="lucide:map-pin" class="h-5 w-5 mt-0.5 flex-shrink-0 drop-shadow hidden md:block"/>
              <a href="https://maps.google.com/?q=53+Chemin+Anaclet+Benard+97432" target="_blank"
                 class="opacity-90 hover:opacity-100 hover:underline drop-shadow block p-2 md:p-0">
                <span class="md:hidden block mb-1 font-bold uppercase text-xs text-white/60">Y aller :</span>
                53 Chemin Anaclet Benard<br/>
                97432 Ravine des Cabris
              </a>
            </li>
          </ul>
        </div>

        <div class="bg-black/20 md:bg-transparent -mx-4 px-4 py-6 md:p-0 md:mx-0">
          <h4 class="font-heading font-black uppercase text-base mb-4 drop-shadow text-center md:text-left">
            Horaires
          </h4>
          <ul class="space-y-3 text-sm opacity-90 max-w-xs mx-auto md:max-w-none md:mx-0">
            <li class="font-sans drop-shadow flex justify-between border-b border-white/10 pb-1 md:border-none md:pb-0 md:block">
              <span class="font-bold md:font-normal">Lun-Ven : </span>
              <span>6h30-12h | 13h30-17h</span>
            </li>
            <li class="font-sans drop-shadow flex justify-between border-b border-white/10 pb-1 md:border-none md:pb-0 md:block">
              <span class="font-bold md:font-normal">Samedi : </span>
              <span>6h30 - 12h00</span>
            </li>
            <li class="font-sans drop-shadow flex justify-between md:block text-red-200 md:text-inherit">
              <span class="font-bold md:font-normal">Dimanche : </span>
              <span>Fermé</span>
            </li>
          </ul>
        </div>
      </div>

      <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mb-8 border-t border-white/10 md:border-none pt-8 md:pt-0">

        <div class="md:col-span-1 text-center px-4">
          <h4 class="font-heading font-black uppercase text-base mb-2 drop-shadow text-white/80">
            Tarification
          </h4>
          <p class="font-sans text-sm opacity-90 drop-shadow mb-2">
            Tarifs HT selon la charte de bonne pratique.
          </p>
          <div class="flex flex-wrap justify-center gap-2 text-xs font-bold opacity-100">
            <span class="bg-white/10 px-2 py-1 rounded"><Icon name="lucide:hourglass" class="h-3 w-3 mr-1"/>Heure</span>
            <span class="bg-white/10 px-2 py-1 rounded"><Icon name="lucide:calendar-days" class="h-3 w-3 mr-1"/>Journée</span>
            <span class="bg-white/10 px-2 py-1 rounded"><Icon name="lucide:ruler" class="h-3 w-3 mr-1"/>Kilomètre</span>
          </div>
        </div>

        <div class="md:col-span-1 text-center px-4">
          <h4 class="font-heading font-black uppercase text-base mb-2 drop-shadow text-white/80">
            Paiement
          </h4>
          <div class="flex flex-wrap justify-center gap-3 text-sm opacity-90 drop-shadow mb-2">
            <span class="flex items-center gap-1"><Icon name="lucide:credit-card" class="h-4 w-4"/> CB</span>
            <span class="w-px h-4 bg-white/30"></span>
            <span class="flex items-center gap-1"><Icon name="lucide:wallet" class="h-4 w-4"/> Espèces</span>
            <span class="w-px h-4 bg-white/30"></span>
            <span class="flex items-center gap-1"><Icon name="lucide:banknote" class="h-4 w-4"/> Virement</span>
          </div>
          <p class="font-sans text-xs opacity-75 drop-shadow mt-1 italic">
            <Icon name="lucide:wifi" class="h-3 w-3 inline relative top-px mr-1"/>
            Paiement à distance par CB disponible.
          </p>
        </div>
      </div>

      <div
          class="border-t border-background/20 pt-8 text-center text-xs md:text-sm opacity-75 drop-shadow flex flex-col md:block gap-4">
        <p>&copy; {{ new Date().getFullYear() }} TNCA ET FILS. Tous droits réservés.</p>
        <div class="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <a href="#" class="hover:underline drop-shadow p-1">Mentions légales</a>
          <a href="#" class="hover:underline drop-shadow p-1">Politique de confidentialité</a>
          <a href="#" class="hover:underline drop-shadow p-1">CGV</a>
        </div>

        <div class="mt-4 pt-4 border-t border-white/10 md:border-none md:pt-0 md:mt-2">
          <a
              href="https://khumeia-lab.com/"
              target="_blank"
              rel="noopener"
              class="group inline-flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest opacity-50 hover:opacity-100 transition-all duration-300"
          >
            <span class="font-sans font-normal">Réalisation</span>
            <span class="h-px w-3 bg-current opacity-50 group-hover:w-6 transition-all"></span>
            <span class="font-heading font-black">khumeía lab</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>