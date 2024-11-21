import Link from "next/link";
import CountryFlagAndName from "./CountryFlagAndName";
import PropertyRating from "./PropertyRating";
import FavoriteToggleButton from "./FavoriteToggleButton";
import { PropertyCardProps } from "@/app/utils/types";

function PropertyCard({ property }: { property: PropertyCardProps }) {
	const { name, image, price } = property;

	return <div>PropertyCard</div>;
}

export default PropertyCard;
