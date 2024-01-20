"use client"
import { useRouter } from "next/navigation"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HomeCard } from "@/app/types";
import { fetchCardBySlug, fetchCards } from "@/app/lib/sanity";



export default function Post({params,posts}: any) {
	const {isOpen, onOpen, onOpenChange,onClose} = useDisclosure();
	const [zeePost,setPost] = useState<HomeCard>()
	
	const shouldBeOpen = !!params.path
	const slug = params.path?.[0] ?? ""

	// let post = posts.filter((e:any)=>{
	// 	if(e.slug.current == slug){
	// 		return e
	// 	}
	// })[0]


	useEffect(()=>{
		console.log("Slug",slug)
		console.log("post   ",zeePost)
		if(shouldBeOpen){
			let post = posts.filter((e:any)=>{
				if(e.slug.current == slug){
					return e
				}
			})[0]

			setPost(post)

			onOpen()
		}else{
			console.log("closing")
			onClose()
			
		}
	},[params])




	return (
		
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} closeButton={<></>} size={"3xl"} backdrop={"transparent"} scrollBehavior={"inside"}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row gap-1 justify-between items-center">
				{zeePost?.title}
				<Link scroll={false} href="/" className="w-[20px] flex px-12" >
					Close
				</Link>
			  </ModalHeader>
              <ModalBody>
				
			 	 <img
					src={zeePost?.image.url}
					style={{ width: 'auto',objectFit:"cover",borderRadius:"8px",maxHeight:"45vh" }}
				/>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
	)
}