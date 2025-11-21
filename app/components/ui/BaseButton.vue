<template>
  <component
      :is="componentTag"
      :to="to"
      :href="href"
      :class="computedClasses"
      v-bind="$attrs"
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
import {computed, useAttrs} from 'vue'
import {twMerge} from "tailwind-merge";

defineOptions({
  inheritAttrs: false
})

const attrs = useAttrs()

const props = withDefaults(defineProps<{
  to?: string
  href?: string
  variant?: 'solid' | 'outline' | 'ghost' | 'glass'
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

const componentTag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'NuxtLink'
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