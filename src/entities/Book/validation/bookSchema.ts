import { z } from "zod";
import { AuthorSchema } from "./authorSchema";

const BookSchema = z.object({
	title: z
		.string({ message: "Название является строкой" })
		.max(100, { message: "Длина названия не больше 100 символов" }),

	authors: z
		.array(AuthorSchema)
		.min(1, { message: "Должен быть хотя бы один автор" }),

	publicationYear: z
		.number({ message: "Год публикации является числом" })
		.min(1800, { message: "Год публикации не раньше 1800 года" })
		.max(new Date().getFullYear(), {
			message: "Год публикации не позже текущего года",
		})
		.or(z.nan()),

	rating: z
		.number({ message: "Рейтинг книги является числом" })
		.min(0, { message: "Рейтинг книги не меньше 0" })
		.max(10, { message: "Рейтинг книги не больше 10" })
		.default(0)
		.or(z.string()),

	ISBN: z
		.string({ message: "ISBN является строкой" })
		.regex(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/i, {
			message: "Не соотвествует ISBN формату",
		})
		.or(z.string({ message: "ISBN является строкой" }).max(0)),
});

export { BookSchema };
