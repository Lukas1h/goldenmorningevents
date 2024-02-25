"use server"

import Image from 'next/image'
import { Card as NextUICard, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import Link from 'next/link';
import {Product} from '@/app/types';
import { client } from '@/app/lib/sanity';
import { useNextSanityImage } from 'next-sanity-image';

export default async function ProductCard({ product }: { product: Product }) {


	return (
			<NextUICard className="max-w-[340px] hover:scale-[103%]">
				<CardBody className="p-0 text-small text-default-400">
					<img
						src={product.featuredImage.url}
						height={product.featuredImage.height}
						width={product.featuredImage.width}
						style={{ width: 'auto', height: '220px', content: "fill" }}
						alt={`Image`}
					/>
				</CardBody>
				<CardFooter className="flex flex-col items-start">
					<p>{product.description}</p>
				</CardFooter>
			</NextUICard>
	)
}
