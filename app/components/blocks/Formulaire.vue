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

const config = useRuntimeConfig()
const isSubmitting = ref(false)
const status = ref<{ type: 'success' | 'error', message: string } | null>(null)

const formData = ref({
  name: '',
  phone: '',
  email: '',
  customerType: props.customerTypeOptions[0],
  subject: props.subjectOptions[0],
  message: '',
  rgpd: false,
  fax: '' // Champ Honeypot (Pot de miel)
})

const handleSubmit = async () => {
  status.value = null
  isSubmitting.value = true

  try {
    await $fetch(config.public.wpContactUrl, {
      method: 'POST',
      body: formData.value
    })

    status.value = {
      type: 'success',
      message: 'Merci ! Votre demande a bien été envoyée.'
    }

    formData.value = {
      name: '',
      phone: '',
      email: '',
      customerType: props.customerTypeOptions[0],
      subject: props.subjectOptions[0],
      message: '',
      rgpd: false,
      fax: ''
    }

  } catch (error: any) {
    console.error(error)
    status.value = {
      type: 'error',
      message: 'Une erreur est survenue. Veuillez nous contacter par téléphone ou réessayer.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <UiBlockContainer class="bg-background">
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

        <div v-if="status" :class="[
            'p-4 rounded-md text-sm font-medium text-center',
            status.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'
          ]">
          {{ status.message }}
        </div>

        <div class="opacity-0 absolute -z-10 h-0 w-0 overflow-hidden">
          <label for="fax">Please leave this field blank</label>
          <input type="text" id="fax" name="fax" v-model="formData.fax" tabindex="-1" autocomplete="off">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block font-sans text-sm font-medium text-foreground mb-2">Nom / Prénom</label>
            <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                :disabled="isSubmitting"
                class="w-full border border-border bg-background text-foreground p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
            />
          </div>
          <div>
            <label for="phone" class="block font-sans text-sm font-medium text-foreground mb-2">Téléphone</label>
            <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                required
                :disabled="isSubmitting"
                class="w-full border border-border bg-background text-foreground p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
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
              :disabled="isSubmitting"
              class="w-full border border-border bg-background text-foreground p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="customerType" class="block font-sans text-sm font-medium text-foreground mb-2">Vous êtes</label>
            <div class="relative">
              <select
                  id="customerType"
                  v-model="formData.customerType"
                  :disabled="isSubmitting"
                  class="appearance-none w-full border border-border bg-background text-foreground p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
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
                  :disabled="isSubmitting"
                  class="appearance-none w-full border border-border bg-background text-foreground p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
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
              :disabled="isSubmitting"
              class="w-full border border-border bg-background text-foreground p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
          ></textarea>
        </div>

        <div class="flex items-start">
          <div class="flex h-5 items-center">
            <input
                id="rgpd"
                v-model="formData.rgpd"
                type="checkbox"
                required
                :disabled="isSubmitting"
                class="h-4 w-4 rounded-none border-border text-primary focus:ring-primary disabled:opacity-50"
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
              :disabled="isSubmitting"
              class="w-full md:w-auto font-sans font-medium uppercase px-8 py-3 bg-primary text-white hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:bg-opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <span v-if="isSubmitting">
                 <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24">
                   <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                   <path class="opacity-75" fill="currentColor"
                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                 </svg>
            </span>
            {{ isSubmitting ? 'Envoi...' : submitButtonText }}
          </button>
        </div>
      </form>
    </div>
  </UiBlockContainer>
</template>