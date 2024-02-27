// @ts-nocheck
"use server"

import {createStorefrontApiClient} from '@shopify/storefront-api-client';
import Client from 'shopify-buy';
import { Product } from '../types';
import { sanitizeString } from './utils';
import { redirect } from 'next/navigation'


const { SHOPIFY_STORE_DOMAIN, SHOPIFY_STOREFRONT_ACCESS_TOKEN, SHOPIFY_JSBUY_ACCESS_TOKEN } = process.env;


const storefrontClient = createStorefrontApiClient({
  storeDomain: `http://${SHOPIFY_STORE_DOMAIN}`,
  apiVersion: '2023-10',
  privateAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

const jsbuyClient = Client.buildClient({
  domain: `${SHOPIFY_STORE_DOMAIN}`,
  storefrontAccessToken: SHOPIFY_JSBUY_ACCESS_TOKEN,
});



const graphqlEndpoint = `https://${SHOPIFY_STORE_DOMAIN}/admin/api/2023-01/graphql.json`;

export async function buyProduct(formData:FormData) {
    'use server'

    const id = formData.get("productId")
    console.log('buying now from form data', id)

    const product = await jsbuyClient.product.fetch(id)

    const variantId = product.variants[0].id

    let checkout = await jsbuyClient.checkout.create()

    console.log('created new checkout', checkout)

    const lineItemsToAdd = [
      {
        variantId: variantId,
        quantity: 1,
      }
    ];

    checkout = await jsbuyClient.checkout.addLineItems(checkout.id, lineItemsToAdd)

    const webUrl = checkout.webUrl

    redirect(webUrl)
  
  
    
  }
  
  


export  async function getProductByHandle(handle:string):Product{
  const sanitizedHandle = sanitizeString(handle)

  const shopQuery = `
  query products {
    product(handle:"${sanitizedHandle}") {
      handle
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
  `

  const {data, errors, extensions} = await storefrontClient.request(shopQuery);

  const product = data.product

  console.log("GetProductByUrl",product)

  return product
}

  export async function getAllProducts():Array<Product> {

    const shopQuery = `
    query products {
      products(sortKey: TITLE, first: 100) {
        edges {
          node {
            handle
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
  
    const {data, errors, extensions} = await storefrontClient.request(shopQuery);

    const products = data.products.edges.map(edge=>edge.node)

    console.log(products)

    return products

  }


  