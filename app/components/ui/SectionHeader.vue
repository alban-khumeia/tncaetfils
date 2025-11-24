<script setup lang="ts">
import {computed} from 'vue'

// Define props with types
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
    default: '',
  },
  as: {
    type: String,
    default: 'h2',
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'lg',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
});

const titleSizeStyles = {
  lg: 'text-3xl md:text-4xl',
  md: 'text-2xl md:text-4xl',
  sm: 'text-xl md:text-2xl',
};

const titleClasses = computed(() => {
  const baseClasses = 'font-heading font-black uppercase text-secondary';
  const sizeClass = titleSizeStyles[props.size];

  return `${baseClasses} ${sizeClass}`;
});

const subtitleClasses = computed(() => {
  return 'mt-4 text-lg font-sans text-muted-foreground';
});
</script>

<template>
  <div class="max-w-3xl mx-auto text-center">
    <component :is="as" :class="titleClasses">
      {{ title }}
    </component>

    <p v-if="subtitle" :class="subtitleClasses">
      {{ subtitle }}
    </p>
  </div>
</template>