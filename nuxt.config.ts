import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/seo'
  ],

    css: ['~/assets/css/main.css'],
    vite: {plugins: [tailwindcss()]},

    fonts: {
        families: [
            {
                name: 'Roboto',
                provider: 'google',
                weights: ['400','500','600', '700']
            },
            {
                name: 'Lexend',
                provider: 'google',
                weights: ['400', '700', '900']
            }
        ]
    },

    ssr: true,

    routeRules: {
        '/**': {prerender: true},
    },

    experimental: {
        payloadExtraction: true,
    },

    devServer: {
        host: '0.0.0.0'
    },

    runtimeConfig: {
        public: {
            wpApiUrl: 'https://admin.tncaetfils.re/graphql',
        }
    },

    image: {
        domains: ['admin.tncaetfils.re'],
    },
})