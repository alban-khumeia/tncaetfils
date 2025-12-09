import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},

    // 1. AJOUT INDISPENSABLE : Pour que le lien relatif "/contact"
    // devienne correctement "/tncaetfils/contact" sur Github Pages.
    app: {
        baseURL: '/tncaetfils/',
    },

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
                weights: ['400', '500', '600', '700']
            },
            {
                name: 'Lexend',
                provider: 'google',
                weights: ['400', '700', '900']
            }
        ]
    },

    ssr: true,

    // 2. AJOUT INDISPENSABLE : On calme le crawler pour éviter le 503 WP.
    // On ne touche pas au preset, juste à la vitesse.
    nitro: {
        prerender: {
            concurrency: 1, // Une page à la fois
            interval: 200,  // Petite pause de 200ms entre chaque appel API
            failOnError: false // On tolère une erreur sans tout casser
        }
    },

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