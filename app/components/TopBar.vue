<template>
  <div class="bg-primary text-primary-foreground py-2 px-4">
    <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
      <div class="flex flex-wrap items-center gap-4">
        <a href="tel:+262262123456" class="flex items-center gap-2 hover:underline">
          <Icon name="lucide:phone" class="h-4 w-4"/>
          <span>0262 12 34 56</span>
        </a>
        <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 hover:underline"
        >
          <Icon name="lucide:map-pin" class="h-4 w-4"/>
          <span>123 Route Nationale, Saint-Denis 97400</span>
        </a>
      </div>
      <div class="flex items-center gap-2">
        <Icon name="lucide:clock" class="h-4 w-4"/>
        <span>Horaires : Lun-Ven 7h-17h | Sam 8h-12h</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
