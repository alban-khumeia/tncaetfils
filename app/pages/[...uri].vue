<template>
  <div>
    <div v-if="pending" class="py-20 text-center">
      Chargement...
    </div>

    <div v-else-if="error || !pageData" class="py-20 text-center container mx-auto">
      <h1 class="text-4xl font-bold mb-4">404 - Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <UiBaseButton to="/" class="mt-8">Retour à l'accueil</UiBaseButton>
    </div>

    <div v-else>
      <component
          v-for="(section, index) in sections"
          :key="index"
          :is="componentRegistry[section.component]"
          v-bind="section.props"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {GET_PAGE_QUERY} from '~/queries/getPage';
// Tes imports de composants (Tu peux optimiser ça plus tard, voir point 3)
import Hero from '~/components/blocks/Hero.vue';
import CategoryGrid from '~/components/blocks/CategoryGrid.vue';
import TrustBar from '~/components/blocks/TrustBar.vue';
import TransportSection from '~/components/blocks/TransportSection.vue';
import Local from '~/components/blocks/Local.vue';
import ClientsReviews from '~/components/blocks/ClientsReviews.vue';
import CTA from '~/components/blocks/CTA.vue';
import FAQ from '~/components/blocks/FAQ.vue';
import BlockCatalogue from '~/components/blocks/Catalogue.vue';
import Categories from '~/components/blocks/Categories.vue';
import Reassurance from "~/components/blocks/Reassurance.vue";
import Equipe from '~/components/blocks/Équipe.vue';
import Formulaire from '~/components/blocks/Formulaire.vue';

// 1. Le Component Registry (Identique à l'index)
const componentRegistry: Record<string, any> = {
  'HeroSection': Hero,
  'CategoryGrid': CategoryGrid,
  'TrustBar': TrustBar,
  'TransportSection': TransportSection,
  'LocalSection': Local,
  'ClientsReviews': ClientsReviews,
  'CtaSection': CTA,
  'FaqSection': FAQ,
  'Catalogue': BlockCatalogue,
  'Categories': Categories,
  'Reassurance': Reassurance,
  'Equipe': Equipe,
  'Formulaire': Formulaire,
};

const route = useRoute();
// 2. Récupération dynamique de l'URI
const uri = route.path;

console.log('--- DEBUG START ---');
console.log('1. URI demandée:', uri);

// 3. Appel API
const {data, error, pending} = await useWpQuery(GET_PAGE_QUERY, {uri});

// 4. Récupération des données globales et assignation du menu
const globalData = computed(() => {
  return mapGlobalData(data.value?.data);
});

const mainMenuState = useState('main-menu');
if (globalData.value.menuItems) {
  mainMenuState.value = globalData.value.menuItems;
}

// 5. Computed pour sécuriser la donnée
const pageData = computed(() => data.value?.data?.page);

// 6. Gestion 404 Côté Serveur (Important pour le SEO)
if (!pageData.value && !pending.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  });
}

if (error.value) {
  console.error('2. ERREUR API:', error.value);
} else {
  console.log('2. Données reçues:', data.value);
}

// 7. Mapping
const sections = computed(() => {
  if (!pageData.value) return [];

  const rawFlex = pageData.value.pageBuilder?.flexContent;
  const companySettings = globalData.value.settings;
  const acfOptions = data.value?.data?.acfOptions;

  return mapPageBuilder(rawFlex || [], companySettings, acfOptions);
});

// 7. Méta-données (SEO Titre de la page)
useHead({
  title: pageData.value?.title || 'Page introuvable'
})
</script>