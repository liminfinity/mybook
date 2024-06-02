import { getGroupedBookArray, getGroupedBooks } from "@entities/Book/lib";
import { GroupBy, IBookWithId, SortingOrder } from "../types";

function useGroupedBooks(
	books?: IBookWithId[],
	groupBy?: GroupBy,
	sortingOrder?: SortingOrder,
) {
	if (!books || !groupBy) return books;
	const groupedBooks = getGroupedBooks(books, groupBy);
	const groupedBookArray = getGroupedBookArray(groupedBooks, sortingOrder);
	return groupedBookArray;
}

export { useGroupedBooks };
