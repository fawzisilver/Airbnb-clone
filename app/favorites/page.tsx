import React from "react";
import { fetchFavorites } from "../utils/actions";
import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";

async function FavoritePage() {
	const favorites = await fetchFavorites();

	if (favorites.length === 0) {
		return <EmptyList />;
	}
	return <PropertiesList properties={favorites} />;
}

export default FavoritePage;
