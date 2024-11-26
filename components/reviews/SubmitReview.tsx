"use client";

import { useState } from "react";
import { SubmitButton } from "../form/Button";
import FormContainer from "../form/FormContainer";
import { Card } from "../ui/card";
import RatingInput from "../form/RatingInput";
import TextAreaInput from "../form/TextAreaInput";
import { Button } from "../ui/button";
import { createReviewAction } from "@/app/utils/actions";

function SubmitReview({ propertyId }: { propertyId: string }) {
	const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);

	return (
		<div className="mt-8 ">
			<Button onClick={() => setIsReviewFormVisible((prev) => !prev)}>
				Leave a Review
			</Button>
			{isReviewFormVisible && (
				<Card className="p-8 mt-8">
					<FormContainer action={createReviewAction}>
						<input type="hidden" name="propertyId" value={propertyId} />
						{/**needs to match the prisma rating name */}
						<RatingInput name="rating" />{" "}
						<TextAreaInput
							name="comment"
							labelText="your thoughts on this property"
							defaultValue="Amazing place!"
						/>
						<SubmitButton text="Submit review" className="mt-4" />
					</FormContainer>
				</Card>
			)}
		</div>
	);
}

export default SubmitReview;
