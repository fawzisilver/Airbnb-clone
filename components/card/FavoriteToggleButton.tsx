import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Button";
import { fetchFavorite, toggleFavoriteAction } from "@/app/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

async function FavoriteToggleButton({ propertyId }: { propertyId: string }) {
	const { userId } = await auth();

	if (!userId) return <CardSignInButton />;

	const favoriteId = await fetchFavorite({ propertyId });
	return (
		<FavoriteToggleForm
			favoriteId={favoriteId}
			propertyId={propertyId}
		></FavoriteToggleForm>
	);
}

export default FavoriteToggleButton;
