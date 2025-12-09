<template>
  <UiBlockContainer class="bg-muted">
    <div class="container px-4 mx-auto">
      <UiSectionHeader
          class="mb-8 text-center lg:mb-16 max-w-3xl mx-auto"
          :title="title"
          :subtitle="intro"
      />

      <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-8 mb-8 lg:mb-12">
        <div
            v-for="pillar in pillars"
            :key="pillar.title"
            class="
            group relative
            flex flex-row items-start p-4
            bg-white border border-border shadow-sm
            lg:flex-col lg:p-8
            transition-all duration-300 hover:shadow-md hover:border-primary/50
          "
        >
          <div class="
            shrink-0 mr-4 flex items-center justify-center w-10 h-10 rounded bg-primary/10 text-primary
            lg:w-14 lg:h-14 lg:mb-6 lg:mr-0 lg:text-2xl
            group-hover:bg-primary group-hover:text-white transition-colors
          ">
            <Icon
                v-if="pillar.icon"
                :name="pillar.icon"
                class="text-lg lg:text-2xl"
            />
            <span v-else class="font-bold">#</span>
          </div>

          <div class="flex flex-col">
            <h3 class="text-base font-black uppercase font-heading text-foreground lg:text-xl group-hover:text-primary transition-colors">
              {{ pillar.title }}
            </h3>

            <div class="hidden lg:block w-12 h-1 bg-border my-4 group-hover:bg-primary transition-colors"></div>

            <p class="mt-1 font-sans text-sm text-muted-foreground leading-relaxed lg:mt-0 lg:text-base">
              {{ pillar.description }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="cta || header" class="flex flex-col items-center justify-center space-y-4 lg:space-y-6">
        <div v-if="header">
          <UiSectionHeader :title="header.title" as="h4" size="sm" class="text-center"/>
        </div>

        <div v-if="cta" class="w-full sm:w-auto">
          <UiBaseButton
              :to="cta.to"
              trailing-icon="lucide:truck"
              variant="solid"
              class="w-full justify-center shadow-lg shadow-primary/20"
              size="md"
          >
            {{ cta.text }}
          </UiBaseButton>
        </div>
      </div>

    </div>
  </UiBlockContainer>
</template>

<script setup lang="ts">
interface Pillar {
  title: string;
  description: string;
  icon?: string;
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
  header?: Header;
}>();
</script>

<style scoped>
.bg-white:hover {
  background-image: linear-gradient(135deg, #ffffff 25%, #f9fafb 25%, #f9fafb 50%, #ffffff 50%, #ffffff 75%, #f9fafb 75%, #f9fafb 100%);
  background-size: 20px 20px;
}
</style>