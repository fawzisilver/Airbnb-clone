import { fetchPropertyDetails } from "@/app/utils/actions";
import { redirect } from "next/navigation";

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
	const { id } = await params;
	const property = await fetchPropertyDetails(id);

	if (!property) redirect("/");

	const { baths, bedrooms, beds, guests } = property;
	const details = { baths, bedrooms, beds, guests };
	return <div>PropertyDetailsPage</div>;
}

export default PropertyDetailsPage;
