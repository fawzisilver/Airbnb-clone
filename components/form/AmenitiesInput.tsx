"use client";

import { useState } from "react";
import { amenities, Amenity } from "@/app/utils/amenities";
import { Checkbox } from "@/components/ui/checkbox";

type AmenityProps = {
	defaultValue: Amenity[];
};

function AmenitiesInput({ defaultValue }: AmenityProps) {
	const [selectedAnemities, setSelectedAnemities] = useState<Amenity[]>(
		defaultValue || amenities
	);

	const handleChange = (amenity: Amenity) => {
		setSelectedAnemities((prevAmen) => {
			return prevAmen.map((a) => {
				if (a.name === amenity.name) {
					return { ...a, selected: !a.selected };
				}
				return a;
			});
		});
	};

	return (
		<section>
			<input
				type="hidden"
				name="amenities"
				value={JSON.stringify(selectedAnemities)}
			/>

			<div className="grid grid-cols-2 gap-4">
				{selectedAnemities.map((amenity) => {
					return (
						<div key={amenity.name} className="flex items-center space-x-2">
							<Checkbox
								id={amenity.name}
								checked={amenity.selected}
								onCheckedChange={() => handleChange(amenity)}
								className="rounded"
							/>
							<label
								htmlFor={amenity.name}
								className="text-sm font-medium leading-none capitalize flex gap-x-2 items-center"
							>
								{amenity.name} <amenity.icon className="w-4 h-4" />
							</label>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default AmenitiesInput;
