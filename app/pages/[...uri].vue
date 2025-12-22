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
const currentSlug = Array.isArray(route.params.uri)
    ? route.params.uri.join('/')
    : route.params.uri;
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

// --- AJOUT SEO (Début) ---
// On crée un raccourci vers les données de la page
const pageNode = computed(() => data.value?.page);

// Petite fonction utilitaire pour nettoyer les balises <p> de l'extrait WP
const cleanText = (html: string) => html ? html.replace(/<[^>]+>/g, '').trim() : '';

const featuredImage = computed(() => pageNode.value?.featuredImage?.node?.sourceUrl);

useSeoMeta({
  // Titre: Utilise le titre WP
  title: () => pageNode.value?.title,

  // Description: Utilise l'extrait WP (nettoyé) ou une phrase par défaut
  description: () => cleanText(pageNode.value?.excerpt) || 'Quincaillerie et Matériaux de construction à Ravine des Cabris',

  // Open Graph (Facebook/LinkedIn/WhatsApp)
  ogTitle: () => pageNode.value?.title,
  ogDescription: () => cleanText(pageNode.value?.excerpt),
  // Récupère l'URL de l'image à la une si elle existe
  ogImage: featuredImage,

  // Twitter
  twitterCard: 'summary_large_image',
});

if (!featuredImage.value) {
  defineOgImageComponent('NuxtSeo', {
    title: () => pageNode.value?.title || 'TNCA ET FILS', // Le titre s'écrira sur l'image
    description: () => cleanText(pageNode.value?.excerpt), // La description aussi (optionnel)
    theme: '#d92323', // Mets la couleur primaire du client ici !
    colorMode: 'light', // ou 'light'
    siteLogo: '/logo.png' // Assure-toi d'avoir un logo dans /public
  })
}
// --- AJOUT SEO (Fin) ---

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

  return mapPageBuilder(rawData || [], currentSlug, globalData.value, acfOptions);
});

// 4. Méta-données (SEO)
useHead({
  title: data.value?.page?.title || 'Page introuvable'
})
</script>