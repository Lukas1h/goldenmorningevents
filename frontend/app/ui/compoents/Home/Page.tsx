"use client"
//React
import { useEffect, useState } from "react";

//Next
import { useRouter,notFound } from "next/navigation"
import Image from "next/image";

//NextUI
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

//Local
import { Page } from "@/app/types";
import { client} from "@/app/lib/sanity";

//Sanity
import {PortableText} from '@portabletext/react'
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'

//Styles
import "./styles.css"


const SanityImageComponent = ({value, isInline}:{value:any,isInline:boolean}) => {
    const {width, height} = getImageDimensions(value)
    return (
      <img
        src={urlBuilder(client)
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          display: isInline ? 'inline-block' : 'block',
          aspectRatio: width / height,
        }}
      />
    )
  }

const components = {
	types: {
	  image: SanityImageComponent,
	},
  }

export default function PageComponent({ params, pages }: any) {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	const [page, setPage] = useState<Page>()
	const router = useRouter()

	const shouldBeOpen = !!params.path
	const slug = params.path?.[0] ?? ""

	// let post = posts.filter((e:any)=>{
	// 	if(e.slug.current == slug){
	// 		return e
	// 	}
	// })[0]
	const close = ()=>{
		router.push("/")
	}


	useEffect(() => {
		console.log("Slug", slug)
		console.log("post   ", page)
		if (shouldBeOpen) {
			let page = pages.filter((e: any) => {
				if (e.slug.current == slug) {
					return e
				}
			})[0]

			if(page){
				console.log("!!! Page exists")
			}else{
				console.log("!!! NO PAGE")
			}

			setPage(page)

			onOpen()
		} else {
			console.log("closing")
			onClose()

		}
	}, [params])




	return (

		<Modal isOpen={isOpen} onOpenChange={onOpenChange}  size={"3xl"} scrollBehavior={"outside"}
			closeButton={<></>}
			onClose={()=>{
				router.push("/")
			}}
			motionProps={{
				variants: {
					enter: {
						y: 0,
						opacity: 1,
						transition: {
							duration: 0.0,
							ease: "easeOut",
						},
					},
					exit: {
						y: 0,
						opacity: 0,
						transition: {
							duration: 0,
							ease: "easeIn",
						},
					},
				}
			}}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-row gap-1 justify-between items-center">
							{page?.title}
							<button  onClick={close} className="w-[20px] flex mx-8" >
								Close
							</button>
						</ModalHeader>
						<ModalBody>
							{
							page?.image &&
							<Image
								src={page?.image.url + "?h=800&auto=format"}
								height={220}
								width={600}
								style={{ width: 'auto', objectFit: "cover", borderRadius: "8px", maxHeight: "45vh" }}
								alt={`Image for ${page?.slug.current}`}
							/>
							}
							<div className="post-body">
								<PortableText
									value={page?.body}
									components={components}
								/>
							</div>
							
						</ModalBody>
						<ModalFooter>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}