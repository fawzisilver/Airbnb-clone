"use client";
import { useProperty } from "@/app/utils/store";
import ConfirmBooking from "./ConfirmBooking";
import BookingForm from "./BookingForm";

function BookingContainer() {
	const { range } = useProperty((state) => state);

	if (!range || !range.from || !range.to) return null; //if user has not selected valid range

	if (range.to.getTime() === range.from.getTime()) return null; //if its not 1 day then null
	return (
		// if we pass 2 conditions above then show form and confirm booking
		<div className="w-full ">
			<BookingForm />
			<ConfirmBooking />
		</div>
	);
}

export default BookingContainer;
