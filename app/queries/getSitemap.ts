export const GET_SITEMAP_QUERY = `
  query GetSitemap {
    pages(first: 1000) {
      nodes {
        uri
        modified
      }
    }
    # Si tu as des articles de blog, décommente ça :
    # posts(first: 1000) {
    #   nodes {
    #     uri
    #     modified
    #   }
    # }
  }
`