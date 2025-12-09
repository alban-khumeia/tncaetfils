<template>
  <div class="layout-wrapper">
    <NavBar :menu-items="headerLinks"/>

    <main :style="{ paddingTop: isHeaderScrolled ? headerHeight + 'px' : '0' }">
      <slot/>
    </main>

    <AppFooter
        :main-links="headerLinks"
        :legal-links="footerLinks"
        :contact-info="contactInfo"
    />
  </div>
</template>

<script setup lang="ts">
import {useHeaderHeight} from '~/composables/useHeaderHeight'
import {GET_LAYOUT_DATA} from '~/queries/getGlobals'; // Vérifie que ce fichier existe bien !
import {mapMenu, mapLocalSection} from '~/utils/wpMappers';

const {headerHeight, isHeaderScrolled} = useHeaderHeight()

// 1. UTILISATION DE USEWPQUERY (CRITIQUE POUR L'HYDRATATION)
// On remplace useFetch par ton composable sécurisé.
// Cela garantit que la clé est stable entre le serveur et le client.
const {data} = await useWpQuery(GET_LAYOUT_DATA);

const headerLinks = computed(() => {
  // Sécurité : si pas de data, tableau vide
  return mapMenu(data.value?.headerMenu || {});
});

const footerLinks = computed(() => {
  return mapMenu(data.value?.footerMenu || {});
});

const contactInfo = computed(() => {
  // 2. CORRECTION DU MAPPING
  // Le mapper mapLocalSection attend un objet globalData qui contient une clé "settings".
  // Or, data.value.companySettings EST déjà les settings.

  if (!data.value?.companySettings) return undefined;

  // On recrée la structure attendue par le mapper : { settings: ... }
  const fakeGlobalData = {
    settings: data.value.companySettings
  };

  // Premier argument {} car on n'a pas de bloc local spécifique ici, juste les infos globales
  return mapLocalSection({}, fakeGlobalData);
});
</script>