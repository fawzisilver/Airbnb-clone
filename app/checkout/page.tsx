"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

function CheckoutPage() {
	const searchParams = useSearchParams();
	const bookingId = searchParams.get("bookingId");
	const [clientSecret, setClientSecret] = useState<string | null>(null);

	// Fetch the client secret after the page loads
	useEffect(() => {
		if (bookingId) {
			axios
				.post("/api/payment", { bookingId })
				.then((response) => setClientSecret(response.data.clientSecret))
				.catch((error) => console.error("Error fetching client secret:", error));
		}
	}, [bookingId]);

	// Define options for EmbeddedCheckout
	const options = { clientSecret };

	if (!clientSecret) {
		return <div>Loading...</div>; // Show a loading state until the client secret is ready
	}

	return (
		<div id="checkout">
			<EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
				<EmbeddedCheckout />
			</EmbeddedCheckoutProvider>
		</div>
	);
}

export default function SuspendedCheckoutPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<CheckoutPage />
		</Suspense>
	);
}
