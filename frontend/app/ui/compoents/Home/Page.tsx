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
import { Order } from "..";

//Sanity
import {PortableText} from '@portabletext/react'
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'

//Styles
import "./styles.css"
import NonSanityPage from "@/app/types/NonSanityPage";




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

  const BreakComponent = ()=><br></br>

const components = {
	types: {
	  image: SanityImageComponent,
	  break: BreakComponent
	},
  }

export default function PageComponent({ params, pages,nonSanityPages }: {params:{path:string | undefined}, pages:Array<Page>,nonSanityPages:Array<NonSanityPage>}) {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	const [page, setPage] = useState<Page>()
	const [nonSanityPage, setNonSanityPage] = useState<any>(undefined)
	const router = useRouter()

	const shouldBeOpen = !!params.path
	const slug = params.path?.[0] ?? ""

	const close = ()=>{
		router.push("/")
	}

	console.log("post body   ", page?.body)

	useEffect(() => {
		console.log("Slug", slug)
		console.log("post body   ", page?.body)
		if (shouldBeOpen) {
			
			let isInNonSanityPages = false
			nonSanityPages.forEach((page)=>{
				if(slug == page.slug){
					console.log("found slug" + slug + "in nonSanityPages")
					setNonSanityPage(page)
					isInNonSanityPages = true
				}
			})

			if(!isInNonSanityPages){
				let page = pages.filter((e: any) => {
					if (e.slug.current == slug) {
						return e
					}
				})[0]

				if(page){
					console.log("Page exists")
				}else{
					notFound()
				}
				setPage(page)
			}


			onOpen()
		} else {
			console.log("closing")
			setNonSanityPage(undefined)
			onClose()

		}
	}, [params])


	if(!nonSanityPage){

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
	}else{
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
					<ModalHeader className="flex flex-row gap-1 justify-between items-center">
						{nonSanityPage.title}
						<button  onClick={close} className="w-[20px] flex mx-8" >
							Close
						</button>
					</ModalHeader>
					<ModalBody>

						<div className="post-body">
							{nonSanityPage.component}
						</div>
						
					</ModalBody>
					<ModalFooter>
					</ModalFooter>
				</ModalContent>
			</Modal>
		)
	}
}