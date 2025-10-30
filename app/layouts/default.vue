<template>
  <AppHeader />
  <main>
    <slot />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
  import { useHeaderHeight } from '~/composables/useHeaderHeight'
  const { headerHeight } = useHeaderHeight()
</script>