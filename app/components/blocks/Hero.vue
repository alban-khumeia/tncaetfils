<template>
  <section class="relative bg-muted overflow-hidden flex items-center min-h-[84vh]">
    <div class="absolute inset-0">
      <NuxtImg
          src="/hero3.jpg"
          alt="Magasin de matériaux"
          class="w-full h-full object-cover object-bottom opacity-85"
          width="2816"
          height="1472"
      />
    </div>

    <div
        class="absolute inset-0 backdrop-blur-sm bg-black/15
             [mask-image:linear-gradient(to_right,black_35%,transparent_55%)]"
    >
    </div>


    <div class="relative container mx-auto px-4 pt-24 md:pt-32 pb-12 md:pb-16">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white mb-6 text-balance uppercase">
          Matériaux, BTP, Jardin : L'expertise transport en plus
        </h1>
        <p class="text-lg md:text-xl text-white font-sans mb-8 leading-relaxed text-balance">
          Votre nouveau guichet unique pour tous vos chantiers à la Ravine des Cabris. Conseil d'experts et stock disponible
          immédiatement.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <UiBaseButton leading-icon="lucide:phone" size="lg" href="tel:+262692936580">
            Nous appeler : 06 92 93 65 80
          </UiBaseButton>
          <UiBaseButton
              href="#contact"
              variant="outline"
              size="lg"
              class="border-2 border-white/50 text-white hover:bg-white/10 transition-colors">
            Venir en magasin
          </UiBaseButton>
        </div>
      </div>
    </div>
  </section>
</template>