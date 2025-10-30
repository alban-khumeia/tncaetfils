<template>
  <component
      :is="componentTag"
      :to="to"
      :href="href"
      :class="computedClasses"
  >
    <Icon
        v-if="leadingIcon"
        :name="leadingIcon"
        :class="iconSizeClass"
        aria-hidden="true"
    />

    <span>
      <slot/>
    </span>

    <Icon
        v-if="trailingIcon"
        :name="trailingIcon"
        :class="iconSizeClass"
        aria-hidden="true"
    />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'

// --- 1. Définition des Props ---

const props = withDefaults(defineProps<{
  to?: string
  href?: string
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  leadingIcon?: string
  trailingIcon?: string
}>(), {
  variant: 'solid',
  size: 'md',
  to: undefined,
  href: undefined,
  leadingIcon: undefined,
  trailingIcon: undefined,
})

// --- 2. Logique du composant (Tag) ---

const componentTag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'NuxtLink'
  return 'button'
})

// --- 3. Logique des Classes (Styles) ---

const iconSizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-4 w-4'
    case 'lg':
      return 'h-6 w-6'
    case 'md':
    default:
      return 'h-5 w-5'
  }
})

const computedClasses = computed(() => {
  const classes = []

  classes.push('inline-flex items-center justify-center gap-2 font-bold font-sans transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer')

  switch (props.size) {
    case 'sm':
      classes.push('px-3 py-1.5 text-sm')
      break
    case 'lg':
      classes.push('px-8 py-3 text-lg')
      break
    case 'md':
    default:
      classes.push('px-4 py-2 text-base')
      break
  }

  // Variantes (Variant)
  switch (props.variant) {
    case 'outline':
      classes.push('border border-primary text-primary hover:bg-primary-hover/10')
      break
    case 'ghost':
      classes.push('text-primary hover:bg-primary-hover/10')
      break
    case 'solid':
    default:
      classes.push('bg-primary text-white hover:bg-primary-hover')
      break
  }

  return classes
})
</script>