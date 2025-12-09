<template>
  <component
      :is="componentTag"
      :to="normalizedPath"
      :class="computedClasses"
      v-bind="$attrs"
  >
    <Icon
        v-if="leadingIcon"
        :name="leadingIcon"
        :class="iconSizeClass"
        aria-hidden="true"
    />
    <span><slot/></span>
    <Icon
        v-if="trailingIcon"
        :name="trailingIcon"
        :class="iconSizeClass"
        aria-hidden="true"
    />
  </component>
</template>

<script setup lang="ts">
import {computed, useAttrs, resolveComponent} from 'vue'
import {twMerge} from "tailwind-merge"

defineOptions({
  inheritAttrs: false
})

const attrs = useAttrs()

const props = withDefaults(defineProps<{
  to?: string | null // On accepte null au cas où le mapper renvoie null
  href?: string | null // Pour la rétrocompatibilité
  variant?: 'solid' | 'outline' | 'ghost' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  leadingIcon?: string
  trailingIcon?: string
}>(), {
  variant: 'solid',
  size: 'md',
  to: undefined,
  href: undefined, // Optionnel, si tu veux garder la compatibilité
})

// 1. On unifie la destination
// Si 'to' est présent, on l'utilise. Sinon on regarde 'href'.
const destination = computed(() => props.to || props.href)

// 2. On nettoie le chemin (Optionnel mais sécurisant pour WP)
// Si le lien est vide, on retourne undefined pour désactiver le lien
const normalizedPath = computed(() => {
  return destination.value ? destination.value : undefined
})

// 3. Résolution du composant
const NuxtLink = resolveComponent('NuxtLink')

const componentTag = computed(() => {
  // Si on a une destination valide -> NuxtLink (qui gérera a href ou router-link)
  if (normalizedPath.value) {
    return NuxtLink
  }
  // Sinon -> C'est un bouton d'action (ex: submit formulaire, ouvrir modal)
  return 'button'
})

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

const baseClasses = computed(() => {
  const classes = []

  // Base commune
  classes.push('inline-flex items-center justify-center gap-2 font-bold font-sans transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer')

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

  switch (props.variant) {
    case 'outline':
      classes.push('border border-primary text-primary hover:bg-primary-hover/10 focus:ring-primary')
      break
    case 'ghost':
      classes.push('text-primary hover:bg-primary-hover/10 focus:ring-primary')
      break
    case 'glass':
      classes.push('border border-white/30 bg-secondary/25 text-white backdrop-blur-sm hover:bg-secondary/40 hover:border-white/50 focus:ring-white')
      break
    case 'solid':
    default:
      classes.push('bg-primary text-white hover:bg-primary-hover focus:ring-primary')
      break
  }

  return classes
})

const computedClasses = computed(() => {
  return twMerge(baseClasses.value, attrs.class as string)
})
</script>