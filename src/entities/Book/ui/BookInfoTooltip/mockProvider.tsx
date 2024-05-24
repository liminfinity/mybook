import QueryClientProvider from "@app/providers/withQueryClient";
import BookInfoTooltip from "./bookInfoTooltip";

export default function mockProvider() {
	return (
		<QueryClientProvider>
			<BookInfoTooltip bookId="a49Eag7Utban270gmI25" />
		</QueryClientProvider>
	);
}
