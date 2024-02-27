"use client";

import { buyProduct } from "@/app/lib/shopify";
import { Product } from "@/app/types";
import { Button } from "@nextui-org/react"

export default function BuyNow({product}:{product:Product}){

    return (
        <form action={buyProduct} className="w-full  flex-row flex justify-center items-center">
            <Button color="primary" variant="shadow" className="w-[90%] mt-4 font-semibold hover:scale-[98%]" type="submit">
                Buy Now
            </Button>
            <input type="hidden" id="productId" name="productId" value={product.id} />
        </form>
    )
}