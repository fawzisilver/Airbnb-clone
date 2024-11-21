import React from "react";
import { fetchProperties } from "@/app/utils/actions";
import PropertiesList from "./PropertiesList";
import EmptyList from "./EmptyList";
import type { PropertyCardProps } from "@/app/utils/types";

async function PropertiesContainer({
	category,
	search,
}: {
	category?: string;
	search?: string;
}) {
	const properties: PropertyCardProps[] = await fetchProperties({
		search,
		category,
	});
	// if no properties then invoke emptylist component
	properties.length === 0 && (
		<EmptyList
			heading="No result"
			message="Try changing or removing your filters"
			btnText="Clear filters"
		/>
	);
	return <PropertiesList properties={properties} />;
}

export default PropertiesContainer;
