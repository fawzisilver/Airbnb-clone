import { z } from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
	firstname: z.string().min(2),
	lastname: z.string().min(2),
	username: z.string().min(2),
});
