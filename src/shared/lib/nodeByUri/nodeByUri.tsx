import { gql } from '@apollo/client';

export const NodeByUri = gql`

query {
  products(
    where: {category: "sinks", orderby: {field: NAME, order: ASC}}
    first: 20
  ) {
    edges {
      cursor
      node {
        id
        name
        image {
          sourceUrl(size: THUMBNAIL)
        }
        averageRating
        type
        ... on ProductWithPricing {
          price
          salePrice
          regularPrice
          ... on SimpleProduct {
            image {
              sourceUrl(size: THUMBNAIL)
            }
          }
        }
        ... on ProductWithVariations {
          variations {
            nodes {
              id
              databaseId
              name
              image {
                sourceUrl
              }
              price
              salePrice
              regularPrice
              attributes {
                nodes {
                  id
                  name
                  value
                }
              }
            }
          }
        }
      }
    }
  }
}

`;
