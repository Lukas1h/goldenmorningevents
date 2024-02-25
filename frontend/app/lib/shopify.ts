// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck


import {createStorefrontApiClient} from '@shopify/storefront-api-client';
import { Product } from '../types';


const { SHOPIFY_STORE_DOMAIN, SHOPIFY_STOREFRONT_ACCESS_TOKEN } = process.env;


const client = createStorefrontApiClient({
  storeDomain: `http://${SHOPIFY_STORE_DOMAIN}`,
  apiVersion: '2023-10',
  privateAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

const graphqlEndpoint = `https://${SHOPIFY_STORE_DOMAIN}/admin/api/2023-01/graphql.json`;




  export async function getAllProducts():Array<Product> {

    const shopQuery = `
    query products {
      products(sortKey: TITLE, first: 100) {
        edges {
          node {
            id
            title
            description
            featuredImage {
              url
              width
              height
            }
            priceRange {
              maxVariantPrice {
                currencyCode
                amount
              }
            }
          }
        }
      }
    }
    
  `;
  
    const {data, errors, extensions} = await client.request(shopQuery);

    const products = data.products.edges.map(edge=>edge.node)

    console.log(products)

    return products

  }