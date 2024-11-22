"use client";

import { usePathname } from "next/navigation";
import FormContainer from "../form/FormContainer";
import { toggleFavoriteAction } from "@/app/utils/actions";
import { CardSubmitButton } from "../form/Button";

type FavoriteToggleFormProps = {
	propertyId: string;
	favoriteId: string | null;
};

function FavoriteToggleForm({ propertyId, favoriteId }: FavoriteToggleFormProps) {
	const pathname = usePathname(); // /favorite  or  /  or /profile  (examples)
	const toggleAction = toggleFavoriteAction.bind(null, {
		propertyId,
		favoriteId,
		pathname,
	});
	return (
		<FormContainer action={toggleAction}>
			<CardSubmitButton isFavorite={favoriteId ? true : false} />
		</FormContainer>
	);
}

export default FavoriteToggleForm;
