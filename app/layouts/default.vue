<template>
  <NavBar :menu-items="headerLinks"/>
  <main :style="{ paddingTop: isHeaderScrolled ? headerHeight + 'px' : '0' }">
    <slot />
  </main>
  <AppFooter
      :main-links="headerLinks"
      :legal-links="footerLinks"
      :contact-info="contactInfo"
  />
</template>

<script setup lang="ts">
  import { useHeaderHeight } from '~/composables/useHeaderHeight'
  import {GET_LAYOUT_DATA} from '~/queries/getGlobals';
  import {mapMenu, mapLocalSection} from '~/utils/wpMappers';
  import {computed} from "vue";

  const { headerHeight, isHeaderScrolled } = useHeaderHeight()

  const GRAPHQL_ENDPOINT = 'https://admin.tncaetfils.re/graphql';

  const {data} = await useFetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    body: {
      query: GET_LAYOUT_DATA
    },
    key: 'layout-data',

    transform: (res: any) => {
      if (import.meta.client) {
        console.log('--- DEBUG MENU ---');
        console.log('1. Header Raw:', res.data.headerMenu);
        console.log('2. Footer Raw:', res.data.footerMenu);
        console.log('3. Company Settings:', res.data.companySettings);
      }
      return res.data;
    }
  });

  const headerLinks = computed(() => {
    return mapMenu(data.value?.headerMenu)
  });

  const footerLinks = computed(() => {
    return mapMenu(data.value?.footerMenu)
  });

  const contactInfo = computed(() => {
    if (!data.value?.companySettings) return {};
    return mapLocalSection({}, data.value.companySettings);
  });
</script>
