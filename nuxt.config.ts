import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},

    // --- CORRECTION 1 : Configuration GitHub Pages ---
    app: {
        // Indispensable : dit à Nuxt que le site vit dans ce sous-dossier
        baseURL: '/tncaetfils/',
        // Optionnel : range les fichiers JS/CSS proprement
        buildAssetsDir: 'assets',
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
            {name: 'Roboto', provider: 'google', weights: ['400', '500', '600', '700']},
            {name: 'Lexend', provider: 'google', weights: ['400', '700', '900']}
        ]
    },

    ssr: true,

    // --- CORRECTION 2 : Calmer le jeu avec WordPress ---
    nitro: {
        prerender: {
            // Ralentit la génération : 1 page à la fois pour ne pas tuer ton WP (fix erreur 503)
            concurrency: 1,
            // Ajoute une pause de 500ms entre chaque page
            interval: 500,
            // Empêche le build d'échouer complètement si une seule page plante
            failOnError: false,
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