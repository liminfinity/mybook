import {
	IGroupedBooks,
	SortingOrder,
	GroupedBookArray,
} from "@entities/Book/types";
import { UNGROUPED_BOOKS_TITLE } from "../consts";

function getGroupedBookArray(
	groupedBooks: IGroupedBooks,
	sortingOrder?: SortingOrder,
): GroupedBookArray {
	const groupedBookArray = Object.entries(groupedBooks);
	if (sortingOrder) {
		groupedBookArray.sort((group1, group2) => {
			if (group1[0] === UNGROUPED_BOOKS_TITLE) return 1;
			if (group2[0] === UNGROUPED_BOOKS_TITLE) return -1;
			if (group1[0] < group2[0])
				return sortingOrder === SortingOrder.ASC ? -1 : 1;
			if (group1[0] > group2[0])
				return sortingOrder === SortingOrder.ASC ? 1 : -1;
			return 0;
		});
	}
	return groupedBookArray;
}

export { getGroupedBookArray };
