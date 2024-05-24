import QueryClientProvider from "@app/providers/withQueryClient";
import DesktopBookHeader from "./desktopBookHeader";

export default function MockProvider() {
	return (
		<QueryClientProvider>
			<DesktopBookHeader />
		</QueryClientProvider>
	);
}
