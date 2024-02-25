type Product =   {
    id: string,
    title: string,
    description: string,
    featuredImage: {
        url:string
        width:number
        height:number
    }
    priceRange: {
        maxVariantPrice: {
            currencyCode:string
            amount:string
        }
    }
  }

  export default Product