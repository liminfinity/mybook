import { z } from "zod";

const AuthorSchema = z.object({
	name: z.string({ message: "Имя автора является строкой" }),
});

export { AuthorSchema };
