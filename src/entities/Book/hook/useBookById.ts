import { useBookStore } from "../model";
import { useBooksQuery } from "./useBooksQuery";

function useBookById(bookId: string) {
	const searchQuery = useBookStore(state => state.searchQuery);

	const { data, isSuccess } = useBooksQuery(searchQuery);

	if (isSuccess) {
		return data.find(book => book.id === bookId);
	}
}

export { useBookById };
