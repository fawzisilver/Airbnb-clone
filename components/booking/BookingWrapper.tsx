"use client";
import { useProperty } from "@/app/utils/store";
import { Booking } from "@/app/utils/types";
import BookingCalendar from "./BookingCalendar";
import BookingContainer from "./BookingContainer";
import { useEffect } from "react";

type BookingWrapperProps = {
	propertyId: string;
	price: number;
	bookings: Booking[];
};
// booking wrapper only in client
function BookingWrapper({ propertyId, price, bookings }: BookingWrapperProps) {
	// set state (with zutand)
	useEffect(() => {
		useProperty.setState({
			propertyId,
			price,
			bookings,
		});
	}, []);

	return (
		<>
			<BookingCalendar />
			<BookingContainer />
		</>
	);
}

export default BookingWrapper;
