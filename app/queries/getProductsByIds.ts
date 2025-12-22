export const GET_PRODUCTS_BY_IDS = `
  query getProductsByIds($ids: [ID]) {
    produits(where: { in: $ids }) {
      nodes {
        databaseId
        title
        produitFields { 
          price
          availability
          description
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;