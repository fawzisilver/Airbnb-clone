"use server";

import {
	imageSchema,
	profileSchema,
	propertySchema,
	validateWithZodSchema,
} from "./schemas";
import { auth, currentUser } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import db from "./db";
import { uploadImage } from "./supabase";
import { log } from "console";

uploadImage;

//==============================HELPER FUNCTIONS ============================================
// utility function for logged in user
const getAuthUser = async () => {
	const user = await currentUser();
	if (!user) throw new Error("Must be logged to access this route");

	// user.privateMetadata.hasProfile does not exist then redirect
	if (!user.privateMetadata.hasProfile) redirect("/profile/create");

	return user;
};

// If error occurs
const renderError = (error: unknown): { message: string } => {
	console.log(error);
	return { message: error instanceof Error ? error.message : "An error occurred" };
};

const inputData = (raw: FormData) => {
	const rawData = Object.fromEntries(raw);
	const validateData = profileSchema.safeParse(rawData);

	if (!validateData) return null;

	return validateData;
};
//==========================================================================

// calls this function when submitted and processes it (create profile)
export const createProfileAction = async (prevState: any, formData: FormData) => {
	try {
		// get current active user
		const user = await currentUser();
		if (!user) throw new Error("Please login to create a profile");

		// turns data into objects
		const rawData = Object.fromEntries(formData);
		// validate user data with zod
		const validatedFields = validateWithZodSchema(profileSchema, rawData);

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
		return renderError(error);
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

export const fetchProfile = async () => {
	const user = await getAuthUser();
	const profile = await db.profile.findUnique({
		where: {
			clerkId: user.id,
		},
	});
	if (!profile) redirect("/profile/create");
	return profile;
};

export const updateProfileAction = async (
	prevState: any,
	formData: FormData
): Promise<{ message: string }> => {
	const user = await getAuthUser();

	try {
		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(profileSchema, rawData);

		await db.profile.update({
			where: {
				clerkId: user.id,
			},
			data: validatedFields, //new updated data
		});

		revalidatePath("/profile"); //rerun again
		return { message: "Profile updated successfully" };
	} catch (error) {
		return renderError(error);
	}
};

// Update profile image action
export const updateProfileImageAction = async (
	prevState: any,
	formData: FormData
): Promise<{ message: string }> => {
	const user = await getAuthUser();

	try {
		const image = formData.get("image") as File;
		const validatedFields = validateWithZodSchema(imageSchema, { image });
		const fullPath = await uploadImage(validatedFields.image);

		await db.profile.update({
			where: {
				clerkId: user.id,
			},
			data: {
				profileImage: fullPath,
			},
		});
		revalidatePath("/profile");
		return { message: "Profile image updated successfully" };
	} catch (error) {
		return renderError(error);
	}
};

export const createPropertyAction = async (
	prevState: any,
	formData: FormData
): Promise<{ message: string }> => {
	const user = await getAuthUser();

	try {
		const rawData = Object.fromEntries(formData);
		const validatedFields = validateWithZodSchema(propertySchema, rawData);
		return { message: "propety created" };
	} catch (error) {
		return renderError(error);
	}

	// redirect('/')
};
