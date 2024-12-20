"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useCallback, Suspense } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

function CheckoutPage() {
	const searchParams = useSearchParams();
	const bookingId = searchParams.get("bookingId");

	const fetchClientSecret = useCallback(async () => {
		const response = await axios.post("/api/payment", {
			bookingId: bookingId,
		});
		return response.data.clientSecret;
	}, []);

	const options = { fetchClientSecret };

	return (
		<div id="checkout">
			<EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
				<EmbeddedCheckout />
			</EmbeddedCheckoutProvider>
		</div>
	);
}

const SuspenseCheckout = () => {
	return (
		<Suspense>
			<CheckoutPage />
		</Suspense>
	);
};

export default SuspenseCheckout;
// export default CheckoutPage;
