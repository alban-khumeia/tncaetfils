import {hash} from 'ohash'

export const useWpQuery = <T>(query: string, variables: Record<string, any> = {}) => {
    const config = useRuntimeConfig();
    const cleanVariables = JSON.parse(JSON.stringify(variables));
    const key = `wp-${hash({query, cleanVariables})}`;

    return useAsyncData<T>(
        key,
        async () => {
            // ON PASSE EN GET
            // Pour le GET, query et variables passent dans l'URL (params)
            const response = await $fetch<any>(config.public.wpApiUrl, {
                method: 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Content-Type': 'application/json',
                },
                // En GET, pas de body. On utilise 'params'.
                // Attention : il faut stringify les variables pour que WP comprenne
                params: {
                    query: query,
                    variables: JSON.stringify(cleanVariables)
                }
            });

            if (response.errors) {
                console.error('[GraphQL Error]', response.errors);
                throw new Error(response.errors[0].message);
            }

            return response.data;
        },
        {
            server: true,
            lazy: false,
            transform: (data: any) => (data || {}) as T
        }
    );
};