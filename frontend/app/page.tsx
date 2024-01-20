// "use client"
import Image from 'next/image'
import { Card as NextUICard, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { Card, Post} from '@/app/ui/compoents';
import { fetchCards } from './lib/sanity';
// import { useRouter } from 'next/router';



export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: any;
}) {
  const cards = await fetchCards()

  return (
    <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
      <NextUICard className="md:col-span-3 max-w-[340px] md:max-w-none">
        <Image
          src={"/hero.png"}
          width={1920}
          height={1080}
          alt='Golden Morning Events logo.'
        />
      </NextUICard>
      {
        cards.map((card)=>{
          return (
            <Card key={card.slug.current} card={card}></Card>
          )
        })
      }
      <Post params={searchParams} posts={cards}></Post>
    </div>
  )
}
