import QueryClientProvider from "@app/providers/withQueryClient";
import CreateBookDialog from "./updateBookDialog";

export default function MockProvider() {
	return (
		<QueryClientProvider>
			<CreateBookDialog open bookId="a49Eag7Utban270gmI25" />
		</QueryClientProvider>
	);
}
