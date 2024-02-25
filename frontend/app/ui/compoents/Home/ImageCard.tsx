"use server"

import Image from 'next/image'
import { Card as NextUICard, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import Link from 'next/link';
import {Image as ImageType} from '@/app/types';
import { client } from '@/app/lib/sanity';
import { useNextSanityImage } from 'next-sanity-image';

export default async function ImageCard({ image }: { image: ImageType }) {


	return (
			<NextUICard className="max-w-[340px] hover:scale-[103%]">
				<CardBody className="p-0 text-small text-default-400">
					<Image
						src={image.image.url + "?h=800&auto=format"}
						height={220}
						width={600}
						style={{ width: 'auto', height: '220px', content: "fill" }}
						alt={`Image`}
					/>
				</CardBody>
				<CardFooter className="flex flex-col items-start">
					<p>{image.caption}</p>
				</CardFooter>
			</NextUICard>
	)
}
