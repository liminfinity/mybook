import { IBook } from "@entities/Book/types";
import { InputBookForm } from "@features/ui/BookFormDialog";

function getCleanBook(dirtyBook: InputBookForm): IBook {
	const { ISBN, publicationYear, rating, ...cleanBook } = dirtyBook;
	if (parseInt(rating))
		(cleanBook as IBook)["rating"] = parseInt(rating) as IBook["rating"];
	if (ISBN) (cleanBook as IBook)["ISBN"] = ISBN;
	if (!isNaN(publicationYear))
		(cleanBook as IBook)["publicationYear"] = publicationYear;
	return cleanBook;
}

export { getCleanBook };
