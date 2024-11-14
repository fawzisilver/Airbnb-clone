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
