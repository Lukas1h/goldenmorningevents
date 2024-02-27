
//UI
import Image from 'next/image'
import { Card as NextUICard, CardHeader, CardBody, CardFooter } from '@nextui-org/react';

//Components
import { PageCard, ImageCard, ProductCard, HeaderCard, FacebookCard } from '@/app/ui/compoents';


//APIs
import { fetchImges } from './lib/sanity';
import { getAllProducts } from './lib/shopify';




export const dynamic = 'force-dynamic'

export default async function Home() {
  const images = await fetchImges()
  const products = await getAllProducts()



  return (
    <>
      <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-4'>
        <NextUICard className="md:col-span-2 max-w-[340px] md:max-w-none">
          <Image
            src={"/hero.png"}
            width={1920}
            height={1080}
            alt='Golden Morning Events logo.'
          />
        </NextUICard>

        <PageCard page={{
          title:"Flowers",
          path:"/flowers",
          excerpt:"This is an excerpt about flowers."

        }}></PageCard>
        
        <PageCard page={{
          title:"Nursry",
          path:"/nursry",
          excerpt:"This is the excerpt about the Nuersry page."

        }}></PageCard>

        <PageCard page={{
          title:"Seeds and Bulbs",
          path:"/seeds-and-bulbs",
          excerpt:"This is the excerpt about seeds and bulbs"

        }}></PageCard>

        <FacebookCard></FacebookCard>
        
      </div>

      <HeaderCard title='Marketplace'></HeaderCard>
      <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-4'>
        {
          products.map((product) => {
            return <ProductCard key={product.id} product={product}></ProductCard>
          })
        }
      </div>

      <HeaderCard title='Images'></HeaderCard>
      <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {
          images.map((image) => {
            return <ImageCard key={image.id} image={image}></ImageCard>
          })
        }
      </div>

    </>
  )
}
