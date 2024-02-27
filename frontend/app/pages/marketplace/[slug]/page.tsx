import { getProductByHandle,buyProduct } from "@/app/lib/shopify"
import { Button } from "@nextui-org/react"
import BuyNow from "./BuyNow"
import { formatCurrency } from "@/app/lib/utils"



export default async function MarketplaceProduct({ params }: { params: { slug: string } }){
    const product = await getProductByHandle(params.slug)

    console.log('productss', product)
    
    async function buyNow() {
        //@ts-ignore
        await buyProduct(product)
    }

    return (
        <div className="mt-4 w-5xl " >
            <div className="sm:flex ">
                <div className="flex-[2] sm:mr-4 sm:mb-0 mb-4 ">
                    <img className="w-full rounded-lg" src={product.featuredImage.url} height={product.featuredImage.height} width={product.featuredImage.width} alt="" />
                </div>
                <div className="flex-[1] self-end  flex flex-col w-full ">
                    <h1 className="text-xl font-bold">{product.title}</h1>
                    <h4 className="text-large font-semibold">{formatCurrency(product.priceRange.maxVariantPrice.amount,"${{amount}}")}</h4>
                    <BuyNow product={product}></BuyNow>
                    
                </div>
            </div>
            <div className="my-4">
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    )
}