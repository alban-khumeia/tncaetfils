<script setup lang="ts">
defineProps({
  icon: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
});
</script>

<template>
  <div class="group flex gap-3 md:gap-4 items-start bg-white p-4 md:p-6 shadow-sm border-l-4 border-primary/80 h-full">

    <div class="h-8 w-8 md:h-10 md:w-10 bg-muted flex items-center justify-center flex-shrink-0 rounded-sm">
      <Icon :name="icon" class="h-4 w-4 md:h-5 md:w-5 text-foreground"/>
    </div>

    <div class="flex-1">
      <h3 class="font-heading font-bold text-base md:text-lg text-foreground leading-none mb-1.5 uppercase tracking-tight">
        {{ title }}
      </h3>
      <p class="text-xs md:text-sm text-muted-foreground leading-snug md:leading-normal text-pretty">
        {{ description }}
      </p>
    </div>
  </div>
</template>