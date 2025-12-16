import {GET_SITEMAP_QUERY} from '~/queries/getSitemap'

interface WpSitemapResponse {
    data: {
        pages: {
            nodes: Array<{
                uri: string
                modified: string
            }>
        }
        // Tu pourras ajouter 'posts' ici plus tard si besoin
    }
}

export default defineSitemapEventHandler(async (e) => {
    const config = useRuntimeConfig(e)
    // Assure-toi que cette variable est bien dans ton .env et nuxt.config
    const graphqlUrl = config.public.wpApiUrl || 'https://ton-site-wp.com/graphql'

    // 2. On dit à $fetch d'utiliser notre interface <WpSitemapResponse>
    const response = await $fetch<WpSitemapResponse>(graphqlUrl, {
        method: 'POST',
        body: {
            query: GET_SITEMAP_QUERY
        }
    })

    // Maintenant TypeScript sait que 'response.data' existe !
    const pages = response.data?.pages?.nodes || []

    return pages.map((page) => {
        let cleanUri = page.uri

        // 1. On enlève le dossier d'installation de WP pour avoir une URL propre
        // Si WP renvoie "/tncaetfils/contact/", on veut juste "/contact/"
        if (cleanUri.includes('/tncaetfils')) {
            cleanUri = cleanUri.replace('/tncaetfils', '')
        }

        // 2. On s'assure que ça finit par un slash (standard Nuxt/WP)
        if (!cleanUri.endsWith('/')) cleanUri += '/'

        // 3. Cas particulier de la page d'accueil
        // Si après nettoyage on a juste "/", c'est bon.

        return {
            loc: cleanUri,
            lastmod: page.modified
        }
    })
})