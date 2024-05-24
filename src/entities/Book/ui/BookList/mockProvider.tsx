import QueryClientProvider from "@app/providers/withQueryClient";
import BookList from "./bookList";

export default function mockProvider() {
	return (
		<QueryClientProvider>
			<BookList />
		</QueryClientProvider>
	);
}
