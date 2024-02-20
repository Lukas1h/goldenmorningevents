
import Image from 'next/image'
import { Card as NextUICard, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { PageCard, Page} from '@/app/ui/compoents';
import { fetchPages } from './lib/sanity';
import {Order,OrderComplete} from '@/app/ui/compoents';
// import { useRouter } from 'next/router';

const nonSanityPages = [
	{
		slug:"order",
		component:<Order/>,
		title:"Order"
		
	},
  {
		slug:"complete",
		component:<OrderComplete/>,
		title:"Order Complete"
		
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

  return (
    <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
      <NextUICard className="md:col-span-2 max-w-[340px] md:max-w-none">
        <Image
          src={"/hero.png"}
          width={1920}
          height={1080}
          alt='Golden Morning Events logo.'
        />
      </NextUICard>
      {
        pages.map((page)=>{
          return page.shouldShowOnHome ? (
            <PageCard key={page.slug.current} page={page}></PageCard>
          ) : <></>
        })
      }
      <Page params={searchParams} nonSanityPages={nonSanityPages} pages={pages}></Page>
    </div>
  )
}
