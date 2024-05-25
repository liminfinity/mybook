import QueryClientProvider from "@app/providers/withQueryClient";
import BookList from "./bookList";
import { useBooksQuery } from "@entities/Book/hook";

export default function MockProvider() {
	const { data, isSuccess } = useBooksQuery();
	return (
		<QueryClientProvider>
			{isSuccess && <BookList books={data} />}
		</QueryClientProvider>
	);
}
