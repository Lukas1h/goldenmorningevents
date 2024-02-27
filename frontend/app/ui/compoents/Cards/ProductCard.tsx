"use server"

import Image from 'next/image'
import { Card as NextUICard, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import Link from 'next/link';
import {Product} from '@/app/types';
import { client } from '@/app/lib/sanity';
import { useNextSanityImage } from 'next-sanity-image';
import { formatCurrency } from '@/app/lib/utils';

export default async function ProductCard({ product }: { product: Product }) {


	return (
		<Link scroll={false} href={`/marketplace/${product.handle}`}>
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
					<div className="flex justify-between w-full">
						<h4 className='font-semibold'>{product.title}</h4>
						<h4 className='font-semibold'>{formatCurrency(product.priceRange.maxVariantPrice.amount,"${{amount}}")}</h4>
					</div>
					<p>{product.description}</p>
				</CardFooter>
			</NextUICard>
			</Link>
	)
}
