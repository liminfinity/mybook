import { GroupBy, IBookWithId, IGroupedBooks } from "@entities/Book/types";
import { UNGROUPED_BOOKS_TITLE } from "../consts";

function getGroupedBooks(books: IBookWithId[], groupBy: GroupBy) {
	switch (groupBy) {
		case "publicationYear":
		case "rating": {
			return books.reduce<IGroupedBooks>((groupedBooks, book) => {
				const bookGroupingParam =
					book[groupBy]?.toString() ?? UNGROUPED_BOOKS_TITLE;
				if (groupedBooks[bookGroupingParam]) {
					groupedBooks[bookGroupingParam].push(book);
				} else {
					groupedBooks[bookGroupingParam] = [book];
				}
				return groupedBooks;
			}, {});
		}
		case "author": {
			return books.reduce<IGroupedBooks>((groupedBooks, book) => {
				for (const { name } of book.authors) {
					if (groupedBooks[name]) {
						groupedBooks[name].push(book);
					} else {
						groupedBooks[name] = [book];
					}
				}
				return groupedBooks;
			}, {});
		}
	}
}

export { getGroupedBooks };
