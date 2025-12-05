<script setup lang="ts">
import {ref} from 'vue'

interface Props {
  title?: string;
  subtitle?: string;
  customerTypeOptions?: string[];
  subjectOptions?: string[];
  rgpdText?: string;
  submitButtonText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Pour un devis ou une demande écrite',
  subtitle: 'Remplissez ce formulaire, nous vous répondons sous 24h ouvrées.',
  customerTypeOptions: () => ['Un professionnel', 'Un particulier', 'Une collectivité'],
  subjectOptions: () => ['Demande de devis Quincaillerie', 'Demande de devis Transport', 'Question sur un produit / stock', 'Autre...'],
  rgpdText: 'J\'accepte que mes données soient stockées et traitées pour répondre à ma demande.',
  submitButtonText: 'Envoyer ma demande'
})

const formData = ref({
  name: '',
  phone: '',
  email: '',
  customerType: props.customerTypeOptions[0],
  subject: props.subjectOptions[0],
  message: '',
  rgpd: false,
})

const handleSubmit = () => {
  console.log('Formulaire soumis:', formData.value)
}
</script>

<template>
  <section class="bg-background py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="font-heading font-black uppercase text-3xl md:text-4xl text-foreground">
          {{ title }}
        </h2>
        <p class="mt-4 font-sans text-lg text-muted-foreground">
          {{ subtitle }}
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="mt-12 max-w-3xl mx-auto space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block font-sans text-sm font-medium text-foreground mb-2">Nom / Prénom</label>
            <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="w-full border border-border bg-background text-foreground p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label for="phone" class="block font-sans text-sm font-medium text-foreground mb-2">Téléphone</label>
            <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                required
                class="w-full border border-border bg-background text-foreground p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label for="email" class="block font-sans text-sm font-medium text-foreground mb-2">Email</label>
          <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              class="w-full border border-border bg-background text-foreground p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="customerType" class="block font-sans text-sm font-medium text-foreground mb-2">Vous êtes</label>
            <div class="relative">
              <select
                  id="customerType"
                  v-model="formData.customerType"
                  class="appearance-none w-full border border-border bg-background text-foreground p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option v-for="option in customerTypeOptions" :key="option">{{ option }}</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-foreground">
                <Icon name="lucide:chevron-down" class="h-5 w-5"/>
              </div>
            </div>
          </div>

          <div>
            <label for="subject" class="block font-sans text-sm font-medium text-foreground mb-2">Sujet de votre
              demande</label>
            <div class="relative">
              <select
                  id="subject"
                  v-model="formData.subject"
                  class="appearance-none w-full border border-border bg-background text-foreground p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option v-for="option in subjectOptions" :key="option">{{ option }}</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-foreground">
                <Icon name="lucide:chevron-down" class="h-5 w-5"/>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label for="message" class="block font-sans text-sm font-medium text-foreground mb-2">Votre Message</label>
          <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              required
              class="w-full border border-border bg-background text-foreground p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          ></textarea>
        </div>

        <div class="flex items-start">
          <div class="flex h-5 items-center">
            <input
                id="rgpd"
                v-model="formData.rgpd"
                type="checkbox"
                required
                class="h-4 w-4 rounded-none border-border text-primary focus:ring-primary"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="rgpd" class="font-sans text-muted-foreground">
              {{ rgpdText }}
            </label>
          </div>
        </div>

        <div class="pt-4">
          <button
              type="submit"
              class="w-full md:w-auto font-sans font-medium uppercase px-8 py-3 bg-primary text-white hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {{ submitButtonText }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
