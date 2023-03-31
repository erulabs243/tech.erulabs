import { z } from "zod";

export const ContactSchema = z.object({
	firstname: z.string().min(3, "small_firstname").max(24),
	lastname: z.string().min(3, "little_lastname").max(24),
	email: z.string().min(7),
	phone: z.string().min(7),
	message: z.string().min(25),
});

type ContactSchemaType = z.infer<typeof ContactSchema>;

export default ContactSchemaType;
