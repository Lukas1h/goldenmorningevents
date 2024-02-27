//@ts-check
import { createClient } from "@sanity/client";
import { Image } from "../types";


export const client = createClient({
  projectId: "7iu3rqrq",
  dataset: "production",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export async function fetchPages():Promise<[]> {
  console.log("fetchPages called")
  const posts = await client.fetch(`*[_type == "card"]{
		...,
    "shouldShowOnHome": shouldShowOnHome,
		"image": image.asset->{url, altText},
    "isSanityPage":true,
	}`);
  // 
  
  
  return posts;
}

export async function fetchImges():Promise<[Image]> {
  console.log("fetchImages called")
  const images = await client.fetch(`*[_type == "imagecard"]{
		...,
		"image": image.asset->{url, altText},
    "id": _id
	}`);
  console.log("images")
  console.log(images)
  
  
  return images;
}

// export async function fetchCardBySlug(slug:string):Promise<HomeCard> {
//   console.log("fetchCardBySlug called")
//   const post = await client.fetch(`*[_type == "card" && slug.current == marketplace][0]`,{slug});
//   console.log("after fetch",post)

// 	console.log("Post",post)
//   return post[0];
// }

