<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-4 items-start bg-background p-6 border border-border h-full">
    <div
        class="h-10 w-10 bg-primary/10 flex items-center justify-center flex-shrink-0"
    >
      <Icon :name="icon" class="h-5 w-5 text-primary"/>
    </div>

    <div>
      <h3 class="font-bold text-xl text-foreground mb-1">{{ title }}</h3>
      <p class="text-sm text-muted-foreground leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>