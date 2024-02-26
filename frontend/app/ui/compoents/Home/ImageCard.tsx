"use server"

import Image from 'next/image'
import { Card as NextUICard, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import Link from 'next/link';
import {Image as ImageType} from '@/app/types';
import { client } from '@/app/lib/sanity';
import { useNextSanityImage } from 'next-sanity-image';

export default async function ImageCard({ image }: { image: ImageType }) {
    //max-w-[340px] hover:fixed hover:w-[90vw] top-0 bottom-0 left-0 right-0

	return (
    
            <NextUICard className="max-w-[340px]">
				<CardBody className="p-0 text-small text-default-400">
                    <div className='h-[220px] overflow-clip'>
                        <img
                            src={image.image.url + "?h=800&auto=format"}
                            // style={{ width: 'auto', height: '220px', content: "fill" }}
                            className='w-full'
                            alt={`Image`}
                        />
                    </div>
				</CardBody>
				<CardFooter className="flex flex-col items-start">
					<p>{image.caption}</p>
				</CardFooter>
			</NextUICard>

	)
}
