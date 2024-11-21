import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Suspense } from "react";

// type SearchParams = {
//   category?: string,
//   search?: string
// }

async function HomePage({
	searchParams,
}: {
	searchParams: { category?: string; search?: string };
}) {
	console.log(searchParams);

	const { category, search } = await searchParams;
	return (
		<section>
			<CategoriesList category={category} search={search} />
			<Suspense fallback={<LoadingCards />}>
				<PropertiesContainer category={category} search={search} />
			</Suspense>
		</section>
	);
}

export default HomePage;
