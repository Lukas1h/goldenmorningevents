"use server"


import { Card as NextUICard, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import Link from 'next/link';

export default async function PageCard({ page }: { page: {title:string,excerpt:string,path:string} }) {


	return (
		<Link scroll={false} href={page.path}>
			<NextUICard className="max-w-[340px] hover:scale-[103%]">
				<CardBody className="p-0 text-small text-default-400">
					<div className='h-[220px] overflow-clip'>
                        <img
                            src={`/page/${page.path}.jpg`}
                            // style={{ width: 'auto', height: '220px', content: "fill" }}
                            className='w-full'
                            alt={`Image`}
                        />
                    </div>
					
				</CardBody>
				<CardFooter className="flex flex-col items-start">
					<h4 className='font-semibold'>{page.title}</h4>
					<p>{page.excerpt}</p>
				</CardFooter>
			</NextUICard>
		</Link>
	)
}
