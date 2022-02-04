import gql from 'graphql-tag'

export const productsQuery = {
        query: gql`query {
            products {
              id,
              title,
              color,
            }
          }`
}

export const productQuery = (id) => ({
        query: gql`query {
            product(where: { id: "${id}"}) {
                id,
                title,
                description,
                price,
                color,
                image {
                    url
                }
                customFields
            }
        }`
    } )
