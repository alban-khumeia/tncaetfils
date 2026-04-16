export const GET_PRODUCTS_BY_IDS = `
  query getProductsByIds($ids: [ID]) {
    produits(first: 100, where: { in: $ids }) {
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