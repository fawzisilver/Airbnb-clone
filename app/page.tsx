import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";

// type SearchParams = {
//   category?: string,
//   search?: string
// }

function HomePage({
	searchParams,
}: {
	searchParams: { category?: string; search?: string };
}) {
	console.log(searchParams);
	return (
		<section>
			<CategoriesList
				category={searchParams.category}
				search={searchParams.search}
			/>
			<PropertiesContainer
				category={searchParams.category}
				search={searchParams.search}
			/>
		</section>
	);
}

export default HomePage;
