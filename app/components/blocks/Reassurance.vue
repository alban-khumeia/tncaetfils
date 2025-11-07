<template>
  <section class="py-16 bg-muted">
    <div class="container px-4 mx-auto">
      <UiSectionHeader
          class="mb-12 md:mb-16"
          :title= title
          :subtitle= intro
      />
      <div class="grid grid-cols-1 gap-8 mt-16 mb-12 md:grid-cols-3">
        <div v-for="pillar in pillars" :key="pillar.title" class="flex flex-col">
          <h3 class="mt-4 text-xl font-black uppercase font-heading text-foreground">
            {{ pillar.title }}
          </h3>
          <p class="mt-2 font-sans text-base text-muted-foreground">
            {{ pillar.description }}
          </p>
        </div>
      </div>
      <div v-if="header">
        <UiSectionHeader
            class="m-4"
            :title="header.title"
            as="h4"
            size="sm"
        />
      </div>
      <div v-if="cta" class="mt-8 text-center">
        <UiBaseButton :to="cta.to" leading-icon="lucide-lab:toolbox" variant="solid">
          {{ cta.text }}
        </UiBaseButton>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Pillar {
  title: string;
  description: string;
}

interface Cta {
  text: string;
  to: string;
}

interface Header {
  title: string;
}

defineProps<{
  title: string;
  intro: string;
  pillars: Pillar[];
  cta?: Cta;
  header? : Header;
}>();

</script>

<style scoped>

</style>
