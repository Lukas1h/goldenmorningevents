"use client"
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';


export default function Stripe({ stripePromise, clientSecret }: any) {
    return (
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
        >
            <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
    )
}