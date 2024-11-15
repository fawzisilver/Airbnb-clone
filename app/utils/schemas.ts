import { z } from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
	firstname: z.string().min(2, {
		message: "first name must be at least 2 characters",
	}),
	lastname: z.string().min(2, {
		message: "last name must be at least 2 characters",
	}),
	username: z.string().min(2, {
		message: "username must be at least 2 characters",
	}),
});

export function validateWithZodSchema<T>(schema: ZodSchema<T>, data: unknown): T {
	const result = schema.safeParse(data);

	// if validatedFields is not success
	if (!result.success) {
		const errors = result.error.errors.map((error) => error.message);
		throw new Error(errors.join(", "));
	}

	return result.data;
}
// turns data into objects

export const imageSchema = z.object({
	image: validateFile(),
});

function validateFile() {
	const maxUploadSize = 1024 * 1024;
	const acceptedFilesTypes = ["images/"];
	return z
		.instanceof(File)
		.refine((file) => {
			return !file || file.size <= maxUploadSize;
		}, "File size must be less than 1 MB")
		.refine((file) => {
			return !file || acceptedFilesTypes.some((type) => file.type.startsWith(type));
		}, "File must be an image");
}
