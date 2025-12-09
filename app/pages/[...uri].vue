<template>
  <div>
    <div v-if="!data?.page" class="py-20 text-center container mx-auto">
      <h1 class="text-4xl font-bold mb-4">404 - Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <UiBaseButton to="/" class="mt-8">Retour à l'accueil</UiBaseButton>
    </div>

    <div v-else>
      <component
          v-for="(section, index) in sections"
          :key="section.id || index"
          :is="componentRegistry[section.component]"
          v-bind="section.props"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {GET_PAGE_QUERY} from '~/queries/getPage';
import {mapPageBuilder, mapGlobalData} from '~/utils/wpMappers';
import Hero from '~/components/blocks/Hero.vue';
import CategoryGrid from '~/components/blocks/CategoryGrid.vue';
import TrustBar from '~/components/blocks/TrustBar.vue';
import TransportSection from '~/components/blocks/TransportSection.vue';
import Local from '~/components/blocks/Local.vue';
import ClientsReviews from '~/components/blocks/ClientsReviews.vue';
import BlockCatalogue from '~/components/blocks/Catalogue.vue';
import CTA from '~/components/blocks/CTA.vue';
import FAQ from '~/components/blocks/FAQ.vue';
import Categories from '~/components/blocks/Categories.vue';
import Reassurance from '~/components/blocks/Reassurance.vue';
import Equipe from '~/components/blocks/Équipe.vue';
import Formulaire from '~/components/blocks/Formulaire.vue';

const componentRegistry: Record<string, any> = {
  'HeroSection': Hero,
  'CategoryGrid': CategoryGrid,
  'TrustBar': TrustBar,
  'TransportSection': TransportSection,
  'LocalSection': Local,
  'ClientsReviews': ClientsReviews,
  'Catalogue': BlockCatalogue,
  'CtaSection': CTA,
  'FaqSection': FAQ,
  'Categories': Categories,
  'Reassurance': Reassurance,
  'Equipe': Equipe,
  'Formulaire': Formulaire,
};

const route = useRoute();
const dev = import.meta.dev;

// Normalisation URI (identique à index.vue)
const uri = route.path === '/' ? '/' : route.path.replace(/\/$/, '');

// 1. APPEL API
const {data} = await useWpQuery(GET_PAGE_QUERY, {uri});

// Gestion 404 Côté Serveur (Important pour le SEO)
if (import.meta.server && !data.value?.page) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  });
}

// 2. MAPPING DONNÉES GLOBALES
const globalData = computed(() => {
  return mapGlobalData(data.value);
});

// Injection Menu
const mainMenuState = useState('main-menu');
if (globalData.value?.menuItems) {
  mainMenuState.value = globalData.value.menuItems;
}

const companyInfoState = useState('company-info');
if (globalData.value?.settings) {
  companyInfoState.value = globalData.value.settings;
}

// 3. MAPPING PAGE BUILDER
const sections = computed(() => {
  if (!data.value?.page) return [];

  const pageData = data.value.page;
  const acfOptions = data.value.acfOptions;

  const rawData = pageData.pageBuilder?.flexContent;

  return mapPageBuilder(rawData || [], globalData.value, acfOptions);
});

// 4. Méta-données (SEO)
useHead({
  title: data.value?.page?.title || 'Page introuvable'
})
</script>