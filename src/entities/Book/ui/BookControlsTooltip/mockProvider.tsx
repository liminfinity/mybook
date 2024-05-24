import QueryClientProvider from "@app/providers/withQueryClient";
import BookControlsTooltip from "./bookControlsTooltip";

export default function mockProvider() {
	return (
		<QueryClientProvider>
			<BookControlsTooltip bookId="a49Eag7Utban270gmI25" />
		</QueryClientProvider>
	);
}
