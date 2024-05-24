import QueryClientProvider from "@app/providers/withQueryClient";
import BookControlsTooltip from "./bookControlsTooltip";

export default function mockProvider() {
	return (
		<QueryClientProvider>
			<BookControlsTooltip bookId="kH8LCGmEKh9iAnzAcM9L" />
		</QueryClientProvider>
	);
}
