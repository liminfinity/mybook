import { useBooksQuery } from "./useBooksQuery";

function useBookById(bookId: string) {
	const { data, isSuccess } = useBooksQuery();

	if (isSuccess) {
		return data.find(book => book.id === bookId);
	}
}

export { useBookById };
