<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 v-if="title" class="text-3xl md:text-4xl font-heading font-bold text-secondary mb-8">
          {{ title }}
        </h2>
        <div class="prose prose-lg max-w-none text-foreground rich-text" v-html="content"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  content: string;
}>();
</script>

<style>
@reference "../../assets/css/main.css";

.rich-text p {
  @apply mb-4 leading-relaxed;
}
.rich-text h2 {
  @apply text-2xl font-bold mt-8 mb-4 text-secondary;
}
.rich-text h3 {
  @apply text-xl font-bold mt-6 mb-3 text-secondary;
}
.rich-text ul {
  @apply list-disc pl-5 mb-4 space-y-1;
}
.rich-text ol {
  @apply list-decimal pl-5 mb-4 space-y-1;
}
.rich-text a {
  @apply text-primary hover:underline font-medium;
}
.rich-text strong {
  @apply font-bold text-secondary;
}
.rich-text blockquote {
  @apply border-l-4 border-primary pl-4 italic my-4 text-muted-foreground;
}
</style>
