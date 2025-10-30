<template>
  <div class="min-h-screen">
    <main>
      <BlocksHero/>
      <BlocksTrustBar/>
      <BlocksQuincaillerieSection/>
      <BlocksTransportSection/>
      <BlocksLocal/>
      <BlocksClientsReviews/>
      <BlocksCatalogue />
      <BlocksCTA/>
      <BlocksFAQ />
    </main>
  </div>
</template>

<script setup lang="ts">
import {useHead} from '#app';

useHead({
  title: 'Matériaux Réunion - Quincaillerie & Transport de Matériaux BTP'
})
</script>
