import QueryClientProvider from "@app/providers/withQueryClient";
import BookInfoTooltip from "./bookInfoTooltip";

export default function mockProvider() {
	return (
		<QueryClientProvider>
			<BookInfoTooltip bookId="kH8LCGmEKh9iAnzAcM9L" />
		</QueryClientProvider>
	);
}
