<script setup lang="ts">
import {computed} from 'vue'

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
  theme: {
    type: String as () => 'light' | 'dark',
    default: 'light',
    validator: (value: string) => ['light', 'dark'].includes(value),
  }
});

const titleSizeStyles = {
  lg: 'text-3xl md:text-4xl',
  md: 'text-2xl md:text-4xl',
  sm: 'text-xl md:text-2xl',
};

const themeStyles = {
  light: {
    title: 'text-secondary',
    subtitle: 'text-muted-foreground'
  },
  dark: {
    title: 'text-background',
    subtitle: 'text-background/80'
  }
};

const titleClasses = computed(() => {
  const baseClasses = 'font-heading font-black uppercase';
  const sizeClass = titleSizeStyles[props.size];
  const colorClass = themeStyles[props.theme].title;

  return `${baseClasses} ${sizeClass} ${colorClass}`;
});

const subtitleClasses = computed(() => {
  const colorClass = themeStyles[props.theme].subtitle;
  return `mt-4 text-lg font-sans ${colorClass}`;
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