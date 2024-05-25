import QueryClientProvider from "@app/providers/withQueryClient";
import CreateBookDialog from "./createBookDialog";

export default function MockProvider() {
	return (
		<QueryClientProvider>
			<CreateBookDialog open />
		</QueryClientProvider>
	);
}
