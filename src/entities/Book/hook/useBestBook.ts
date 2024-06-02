import { random } from "@shared/lib";
import { IBookWithId } from "../types";
import { useBooksQuery } from "./useBooksQuery";

function useBestBook() {
	const { data: books, isSuccess } = useBooksQuery();

	if (isSuccess) {
		const oldBooks = books.filter(book => {
			if (book.publicationYear) {
				return new Date().getFullYear() - book.publicationYear > 3;
			} else return false;
		});
		const bestsellers = oldBooks.reduce<IBookWithId[]>(
			(curBestsellers, book) => {
				if (!curBestsellers.length) curBestsellers.push(book);
				else {
					const bookRating = book?.rating ?? -1;
					const curBestsellersRating =
						curBestsellers[0]?.rating ?? -1;
					if (bookRating > curBestsellersRating)
						curBestsellers = [book];
					else if (bookRating === curBestsellersRating)
						curBestsellers.push(book);
				}
				return curBestsellers;
			},
			[],
		);

		return bestsellers[
			random(0, bestsellers.length && bestsellers.length - 1)
		];
	}
}

export { useBestBook };
