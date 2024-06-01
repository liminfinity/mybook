import { useBooksQuery } from "./useBooksQuery";
import { SearchQuery } from "@shared/context";

function useBookById(bookId: string) {
	const { value: searchQuery } = SearchQuery.useContext();

	const { data, isSuccess } = useBooksQuery(searchQuery);

	if (isSuccess) {
		return data.find(book => book.id === bookId);
	}
}

export { useBookById };
