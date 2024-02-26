
import Image from 'next/image'
import { Card as NextUICard, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { PageCard, Page } from '@/app/ui/compoents';
import { fetchPages, fetchImges } from './lib/sanity';
import { Order, OrderComplete, FacebookPosts } from '@/app/ui/compoents';
import NonSanityPage from './types/NonSanityPage';
import { FacebookEmbed } from 'react-social-media-embed';
import ImageCard from './ui/compoents/Home/ImageCard';
import { getAllProducts } from './lib/shopify';
import { ProductCard, HeaderCard } from './ui/compoents/Home';



const nonSanityPages: Array<NonSanityPage> = [
  {
    slug: "order",
    component: <Order />,
    title: "Order"

  },
  {
    slug: "complete",
    component: <OrderComplete />,
    title: "Order Complete"

  }
]


export const dynamic = 'force-dynamic'

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: any;
}) {
  const pages = await fetchPages()
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

        {
          pages.map((page) => {
            return page.shouldShowOnHome ? (
              <PageCard key={page.slug.current} page={page}></PageCard>
            ) : <></>
          })
        }
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

      <Page params={searchParams} nonSanityPages={nonSanityPages} pages={pages}></Page>
    </>
  )
}
