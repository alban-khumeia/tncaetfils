import {hash} from 'ohash'

export const useWpQuery = <T>(query: string, variables: Record<string, any> = {}) => {
    const config = useRuntimeConfig();

    // Stabilisation des variables pour la clé (Crucial pour l'hydratation)
    const cleanVariables = JSON.parse(JSON.stringify(variables));
    const key = `wp-${hash({query, cleanVariables})}`;

    return useAsyncData<T>(
        key,
        async () => {
            const response = await $fetch<any>(config.public.wpApiUrl, {
                method: 'POST',
                body: {query, variables: cleanVariables}
            });

            // Si erreur GraphQL (ex: champ mal nommé), on lève une erreur pour la voir
            if (response.errors) {
                console.error('[GraphQL Error]', response.errors);
                throw new Error(response.errors[0].message);
            }

            // ICI EST LA CLÉ DU PROBLÈME
            // WPGraphQL retourne toujours un objet { data: { ... } }
            // On retourne response.data pour avoir directement { page: ..., acfOptions: ... }
            return response.data;
        },
        {
            // On force le mode serveur pour que le HTML soit généré
            server: true,
            lazy: false,
            // TRANSFORM: On s'assure que si c'est null, on renvoie un objet vide pour ne pas casser Vue
            transform: (data: any) => (data || {}) as T
        }
    );
};