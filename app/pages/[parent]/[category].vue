<script setup lang="ts">
import {mapPageBuilder, mapProduct} from '~/utils/wpMappers';
import {GET_PRODUCTS_BY_IDS} from '~/queries/getProductsByIds';
import {GET_PAGE_QUERY} from '~/queries/getPage';
import type {MappedBlock} from '~/types/page';

// --- Types ---
interface CategoryData {
  title: string;
  slug: string;
  productGlobalIds: string[];
}

interface ProductData {
  id: number;
  title: string;
  price: string;
  image?: string;
  alt?: string;
  inStock: boolean;
  availabilityLabel: string;
  slug?: string; // Ajouté si tu as besoin de lier vers la fiche produit
}

const route = useRoute();
const {parent, category} = route.params;

// 1. Récupération Page Parente
const {data: rawParentPage, error: parentPageError} = await useWpQuery<any>(
    GET_PAGE_QUERY,
    {uri: parent as string}
);

if (parentPageError.value) {
  console.error(`[CategoryPage] Erreur page parente "${parent}":`, parentPageError.value);
}

const parentPageTitle = computed(() => rawParentPage.value?.page?.title || parent);

// 2. Mapping Catégorie
const currentCategoryData = computed<CategoryData | null>(() => {
  if (!rawParentPage.value?.page?.pageBuilder?.flexContent) return null;
  const mappedBlocks: MappedBlock[] = mapPageBuilder(rawParentPage.value.page.pageBuilder.flexContent, parent as string);
  const categoryBlock = mappedBlocks.find(block => block.component === 'Categories');
  if (!categoryBlock) return null;
  return categoryBlock.props.categories.find((cat: any) => cat.slug === category) || null;
});

// 3. Récupération Produits
const {data: products, status} = await useAsyncData<ProductData[]>(
    `products-${String(parent)}-${String(category)}`,
    async () => {
      const categoryData = currentCategoryData.value;
      if (!categoryData?.productGlobalIds?.length) return [];

      try {
        const config = useRuntimeConfig();
        const response = await $fetch<{ data: { produits: { nodes: any[] } } }>(config.public.wpApiUrl, {
          method: 'GET',
          params: {
            query: GET_PRODUCTS_BY_IDS,
            variables: JSON.stringify({ids: categoryData.productGlobalIds})
          }
        });
        if (!response.data?.produits?.nodes) return [];
        return response.data.produits.nodes.map(mapProduct);
      } catch (e) {
        console.error(`[CategoryPage] Erreur fetch produits:`, e);
        return [];
      }
    },
    {
      watch: [currentCategoryData],
      immediate: true
    }
);
</script>

<template>
  <div class="container mx-auto px-4 py-8 md:py-12">

    <div v-if="!currentCategoryData && !parentPageError" class="py-20 text-center">
      <Icon name="lucide:loader-2" class="h-8 w-8 animate-spin text-primary mx-auto mb-4"/>
      <p class="font-heading uppercase text-muted-foreground">Chargement du rayon...</p>
    </div>

    <div v-else-if="currentCategoryData">

      <nav class="mb-8 flex items-center space-x-2 text-sm font-heading uppercase text-muted-foreground">
        <NuxtLink to="/" class="hover:text-primary transition-colors">Accueil</NuxtLink>
        <Icon name="lucide:chevron-right" class="h-4 w-4 shrink-0"/>
        <NuxtLink :to="`/${parent}`" class="hover:text-primary transition-colors">{{ parentPageTitle }}</NuxtLink>
        <Icon name="lucide:chevron-right" class="h-4 w-4 shrink-0"/>
        <span class="text-foreground font-bold">{{ currentCategoryData.title }}</span>
      </nav>

      <header class="mb-10 border-b border-gray-200 pb-6">
        <h1 class="text-3xl md:text-5xl font-heading font-black uppercase text-secondary">
          {{ currentCategoryData.title }}
        </h1>
        <div class="h-2 w-24 bg-primary mt-4"></div>
      </header>

      <div v-if="status === 'pending'" class="py-20 flex justify-center">
        <Icon name="lucide:loader-2" class="h-10 w-10 animate-spin text-primary"/>
      </div>

      <div v-else-if="products && products.length > 0"
           class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

        <article
            v-for="prod in products"
            :key="prod.id"
            class="group flex flex-col bg-white border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
        >
          <div class="relative aspect-[4/3] bg-gray-50 overflow-hidden border-b border-gray-100">
            <NuxtImg
                v-if="prod.image"
                :src="prod.image"
                :alt="prod.alt"
                class="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                sizes="100vw sm:50vw md:400px"
                fit="contain"
                loading="lazy"
            />
            <div v-else class="flex items-center justify-center h-full text-muted-foreground bg-gray-100">
              <Icon name="lucide:image-off" class="h-12 w-12 opacity-20"/>
            </div>
          </div>

          <div class="p-5 flex flex-col flex-grow">
            <h3 class="font-heading font-black uppercase text-lg leading-tight mb-2 text-foreground group-hover:text-primary transition-colors">
              {{ prod.title }}
            </h3>

            <div class="mt-auto pt-4 border-t border-gray-100 flex items-baseline gap-2">
              <span class="font-heading font-black text-2xl text-primary">
                {{ prod.price }}
              </span>
              <span class="text-xs text-gray-400 font-bold uppercase">TTC</span>
            </div>
          </div>

          <div
              :class="[
              'w-full py-3 px-4 flex items-center justify-center gap-2 text-white font-heading font-bold uppercase tracking-wider text-sm',
              prod.inStock ? 'bg-green-800' : 'bg-secondary-hover' // Vert ou Gris foncé style 'Rupture'
            ]"
          >
            <Icon :name="prod.inStock ? 'lucide:check' : 'lucide:clock'" class="h-4 w-4"/>
            <span>{{ prod.availabilityLabel }}</span>
          </div>

        </article>
      </div>

      <div v-else class="py-16 text-center border border-gray-200 bg-gray-50">
        <Icon name="lucide:package-open" class="h-12 w-12 text-muted-foreground opacity-50 mx-auto mb-4"/>
        <p class="font-heading uppercase text-lg text-muted-foreground">Rayon vide</p>
        <p class="text-sm text-gray-500 mt-2">Aucun matériau disponible pour le moment.</p>
      </div>
    </div>

    <div v-else class="container mx-auto py-20 text-center">
      <p class="text-xl mb-4 font-heading uppercase text-red-600">Catégorie introuvable</p>
      <NuxtLink :to="`/${parent}`" class="text-primary hover:underline font-bold">
        Retour aux matériaux
      </NuxtLink>
    </div>

    <div v-if="currentCategoryData && products && products.length > 0"
         class="mt-12 bg-gray-900 p-6 md:p-8 text-center md:text-left md:flex md:items-center md:justify-between border-l-4 border-primary">
      <div>
        <h4 class="text-white font-heading font-black uppercase text-xl md:text-2xl mb-2">Besoin d'un devis global
          ?</h4>
        <p class="text-gray-400 text-sm md:text-base">Listez vos références et contactez notre service commercial pour
          une offre sur mesure.</p>
      </div>
      <div class="mt-6 md:mt-0">
        <UiBaseButton href="/contact" variant="solid" class="w-full md:w-auto">
          Demander un devis
        </UiBaseButton>
      </div>
    </div>

  </div>
</template>
