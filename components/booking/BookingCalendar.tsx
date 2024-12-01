"use client";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { DateRange } from "react-day-picker";
import { useProperty } from "@/app/utils/store";

import {
	generateDisabledDates,
	generateDateRange,
	defaultSelected,
	generateBlockedPeriods,
} from "@/app/utils/calendar";

function BookingCalendar() {
	const currentDate = new Date();
	const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
	const bookings = useProperty((state) => state.bookings);
	const { toast } = useToast();

	const blockedPeriods = generateBlockedPeriods({ bookings, today: currentDate });

	const unavailableDates = generateDisabledDates(blockedPeriods);
	console.log(unavailableDates);
	//if we choose range (setRange) then update state
	useEffect(() => {
		//check if date is book
		const selectedRange = generateDateRange(range);
		const isDisabledDateIncluded = selectedRange.some((date) => {
			if (unavailableDates[date]) {
				setRange(defaultSelected);
				toast({
					description: "Some dates are booked. Please select again	",
				});
				return true;
			}
			return false;
		});

		// set date range of selected
		useProperty.setState({ range });
	}, [range]);

	return (
		// generates Calendar
		<Calendar
			mode="range"
			defaultMonth={currentDate}
			selected={range}
			onSelect={setRange}
			className="mb-4"
			disabled={blockedPeriods}
		/>
	);
}

export default BookingCalendar;
