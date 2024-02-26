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


  export function formatCurrency(cents, format) {
    if (typeof cents == 'string') { cents = cents.replace('.',''); }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || this.money_format);
  
    function defaultOption(opt, def) {
       return (typeof opt == 'undefined' ? def : opt);
    }
  
    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = defaultOption(precision, 2);
      thousands = defaultOption(thousands, ',');
      decimal   = defaultOption(decimal, '.');
  
      if (isNaN(number) || number == null) { return 0; }
  
      number = (number/100.0).toFixed(precision);
  
      var parts   = number.split('.'),
          dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
          cents   = parts[1] ? (decimal + parts[1]) : '';
  
      return dollars + cents;
    }
  
    switch(formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
    }
  
    return formatString.replace(placeholderRegex, value);
  };