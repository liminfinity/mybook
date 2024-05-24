import QueryClientProvider from "@app/providers/withQueryClient";
import AddBookFab from "./addBookFab";

export default function MockProvider() {
	return (
		<QueryClientProvider>
			<AddBookFab />
		</QueryClientProvider>
	);
}
