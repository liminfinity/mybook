import QueryClientProvider from "@app/providers/withQueryClient";
import MobileBookHeader from "./mobileBookHeader";

export default function MockProvider() {
	return (
		<QueryClientProvider>
			<MobileBookHeader />
		</QueryClientProvider>
	);
}
