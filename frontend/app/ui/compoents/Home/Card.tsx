"use server"

import Image from 'next/image'
import { Card as NextUICard, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import Link from 'next/link';
import { HomeCard } from '@/app/types';
import { client } from '@/app/lib/sanity';
import { useNextSanityImage } from 'next-sanity-image';

export default async function Card({ card }: { card: HomeCard }) {


	return (
		<Link scroll={false} href={`/${card.slug.current}`}>
			<NextUICard className="max-w-[340px] hover:scale-[103%]">
				<CardBody className="p-0 text-small text-default-400">
					<img
						src={card.image.url}
						height={220}
						style={{ width: 'auto', height: '220px', content: "fill" }}
					/>
				</CardBody>
				<CardFooter className="flex flex-col items-start">
					<h4 className='font-semibold'>{card.title}</h4>
					<p>{card.excerpt}</p>
				</CardFooter>
			</NextUICard>
		</Link>
	)
}
