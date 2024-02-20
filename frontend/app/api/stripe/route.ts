const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { headers } from "next/headers";
import { RedirectType, redirect } from "next/navigation"

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(req: Request) {
//   const headersList = headers()
//   const origin = headersList.get('host')
// 	console.log(headersList)
//   try {
//     // Create Checkout Sessions from body params.

// 		const session = await stripe.checkout.sessions.create({
// 			ui_mode: 'embedded',
// 			line_items: [
// 				{
// 					// Provide the exact Price ID (for example, pr_1234) of
// 					// the product you want to sell
// 					price: "price_1OgeFZA9v3dWd7Agtqu2Iidj",
// 					quantity: 1,
// 				},
// 			],
// 			mode: 'payment',
// 			return_url:
// 				`http://${origin}/complete?session_id={CHECKOUT_SESSION_ID}`,
// 		});

// 		return Response.json({clientSecret: session.client_secret})
//   } catch (err) {
//     console.log("!!! Error in stripe backend",err)
// 		return Response.json({"status":"error"},{status:405})
//   }
  return Response.json({"status":"error"},{status:405})
}


export async function GET(req: Request) {
  const headersList = headers()
  const origin = headersList.get('host')
	console.log(headersList)
//   try {
// 		const session =
// 		await stripe.checkout.sessions.retrieve(req.session);

// 		return Response.json(
// 			{
// 				status: session.status,
// 				customer_email: session.customer_details.email
// 			}
// 		)
//   } catch (err) {
//     console.log("!!! Error in stripe backend",err)
// 		return Response.json({"status":"error"},{status:405})
//   }
	return Response.json({"status":"error"},{status:405})
}