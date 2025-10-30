<template>
  <footer class="bg-primary text-primary-foreground py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Matériaux Réunion</h3>
          <p class="text-sm opacity-90 leading-relaxed">
            Votre partenaire de confiance pour tous vos projets de construction et rénovation à La Réunion.
          </p>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#quincaillerie" class="opacity-90 hover:opacity-100 hover:underline">
                Quincaillerie
              </a>
            </li>
            <li>
              <a href="#transport" class="opacity-90 hover:opacity-100 hover:underline">
                Transport
              </a>
            </li>
            <li>
              <a href="#qui-sommes-nous" class="opacity-90 hover:opacity-100 hover:underline">
                Qui sommes-nous
              </a>
            </li>
            <li>
              <a href="#contact" class="opacity-90 hover:opacity-100 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2">
              <Icon name="lucide:phone" class="h-4 w-4 mt-0.5 flex-shrink-0"/>
              <a href="tel:+262262123456" class="opacity-90 hover:opacity-100 hover:underline">
                0262 12 34 56
              </a>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="lucide:mail" class="h-4 w-4 mt-0.5 flex-shrink-0"/>
              <a href="mailto:contact@materiaux-reunion.re" class="opacity-90 hover:opacity-100 hover:underline">
                contact@materiaux-reunion.re
              </a>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="lucide:map-pin" class="h-4 w-4 mt-0.5 flex-shrink-0"/>
              <span class="opacity-90">
                123 Route Nationale<br/>
                97400 Saint-Denis
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Horaires</h4>
          <ul class="space-y-2 text-sm opacity-90">
            <li>Lun-Ven : 7h00 - 17h00</li>
            <li>Samedi : 8h00 - 12h00</li>
            <li>Dimanche : Fermé</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
        <p>&copy; {{ new Date().getFullYear() }} Matériaux Réunion. Tous droits réservés.</p>
        <div class="mt-2 space-x-4">
          <a href="#" class="hover:underline">
            Mentions légales
          </a>
          <a href="#" class="hover:underline">
            Politique de confidentialité
          </a>
          <a href="#" class="hover:underline">
            CGV
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
