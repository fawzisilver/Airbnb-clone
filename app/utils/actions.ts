"use server";

import { profileSchema } from "./schemas";
import { auth, currentUser } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import db from "./db";

// calls this function when submitted and processes it (create profile)
export const createProfileAction = async (prevState: any, formData: FormData) => {
	try {
		// get current active user
		const user = await currentUser();
		if (!user) throw new Error("Please login to create a profile");

		// turns data into objects
		const rawData = Object.fromEntries(formData);
		// validate user data with zod
		const validatedFields = profileSchema.parse(rawData);
		// create profile based on currentUser info
		await db.profile.create({
			data: {
				clerkId: user.id,
				email: user.emailAddresses[0].emailAddress,
				profileImage: user.imageUrl ?? "",
				...validatedFields,
			},
		});
		// adding metadata
		(await clerkClient()).users.updateUserMetadata(user.id, {
			privateMetadata: {
				hasProfile: true,
			},
		});
	} catch (error) {
		console.log(error);
		return { message: error instanceof Error ? error.message : "An error occurred" };
	}
	// after execution of try (try/catch) we redirect to homepage
	redirect("/");
};

export const fetchProfileImage = async () => {
	// get current active user
	const user = await currentUser();

	// if user doesnt exist
	if (!user) return null;

	// get profile from database
	const profile = await db.profile.findUnique({
		where: {
			clerkId: user.id,
		},
		select: {
			profileImage: true,
		},
	});

	return profile?.profileImage;
};
