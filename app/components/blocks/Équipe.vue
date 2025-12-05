<template>
  <section class="py-12 lg:py-24 bg-background">
    <div class="container px-4 mx-auto">

      <UiSectionHeader
          :title="title"
          :subtitle="subtitle"
          class="mb-10 lg:mb-16 text-center max-w-3xl mx-auto"
      />

      <div class="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-8 xl:gap-10">

        <article
            v-for="member in teamMembers"
            :key="member.id"
            class="
            group bg-card border border-border rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300
            w-full lg:w-[calc(33.333%-2rem)] xl:w-[calc(30%-2rem)]
            flex flex-row lg:flex-col
          "
        >
          <div class="relative shrink-0 w-24 lg:w-full lg:aspect-[4/3] overflow-hidden bg-muted">
            <NuxtImg
                :src="member.image"
                :alt="`Portrait de ${member.name}`"
                class="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                :style="{ objectPosition: member.focalPoint || 'top' }"
                sizes="(max-width: 1024px) 150px, 400px"
                loading="lazy"
            />
          </div>

          <div class="flex flex-col justify-center p-3 lg:p-6 lg:text-center w-full">
            <h3 class="text-lg lg:text-xl font-black uppercase font-heading text-foreground leading-tight">
              {{ member.name }}
            </h3>
            <p class="text-xs lg:text-sm font-bold uppercase font-sans text-primary tracking-wider mb-2 lg:mb-4">
              {{ member.role }}
            </p>

            <blockquote class="hidden lg:block mt-2 relative">
              <span class="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl text-primary/20 font-serif leading-none">&rdquo;</span>
              <p class="font-sans text-base italic text-muted-foreground leading-relaxed">
                {{ member.quote }}
              </p>
            </blockquote>

            <p class="lg:hidden text-xs italic text-muted-foreground line-clamp-2">
              &quot;{{ member.quote }}&quot;
            </p>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TeamMember {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  focalPoint?: string
}

interface Props {
  title?: string;
  subtitle?: string;
  teamMembers?: TeamMember[];
}

withDefaults(defineProps<Props>(), {
  title: "L'équipe terrain.",
  subtitle: '',
  teamMembers: () => []
})
</script>
