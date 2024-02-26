"use server"

import Image from 'next/image'
import { Card as NextUICard, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import Link from 'next/link';
import { Page } from '@/app/types';
import { client } from '@/app/lib/sanity';
import { useNextSanityImage } from 'next-sanity-image';

export default async function Card({ page }: { page: Page }) {


	return (
		<Link scroll={false} href={`/${page.slug.current}`}>
			<NextUICard className="max-w-[340px] hover:scale-[103%]">
				<CardBody className="p-0 text-small text-default-400">
					<div className='h-[220px] overflow-clip'>
                        <img
                            src={page.image.url + "?h=800&auto=format"}
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
