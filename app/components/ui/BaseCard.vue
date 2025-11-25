<script setup lang="ts">
defineProps({
  icon: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
});
</script>

<template>
  <div
      class="group flex gap-4 items-start bg-white p-5 md:p-6 shadow-sm border-l-4 border-primary/80 h-full transition-colors hover:shadow-md active:bg-gray-50">

    <div class="h-10 w-10 bg-muted flex items-center justify-center flex-shrink-0 rounded-sm mt-1 md:mt-0">
      <Icon :name="icon" class="h-5 w-5 text-foreground group-hover:scale-110 transition-transform duration-300"/>
    </div>

    <div class="flex-1">
      <h3 class="font-heading font-bold text-base md:text-lg text-foreground leading-tight md:leading-none mb-2 uppercase tracking-tight">
        {{ title }}
      </h3>

      <p class="text-sm text-muted-foreground leading-relaxed text-pretty">
        {{ description }}
      </p>
    </div>
  </div>
</template>