export const useWpQuery = (query: string, variables = {}) => {
    const config = useRuntimeConfig();

    // useAsyncData permet à Nuxt de charger la data CÔTÉ SERVEUR (SSG)
    // et de la passer au client sans refaire la requête.
    return useAsyncData(
        // Clé unique pour le cache (basée sur la requête)
        'wp-' + JSON.stringify(variables),

        () => $fetch(config.public.wpApiUrl, {
            method: 'POST',
            body: {
                query,
                variables
            }
        })
    );
};