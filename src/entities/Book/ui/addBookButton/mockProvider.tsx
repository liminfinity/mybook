import QueryClientProvider from "@app/providers/withQueryClient";
import AddBookButton from "./addBookButton";

export default function MockProvider() {
	return (
		<QueryClientProvider>
			<AddBookButton />
		</QueryClientProvider>
	);
}
