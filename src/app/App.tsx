import QueryClientProvider from "./providers/withQueryClient";
import RouterProvider from "./providers/withRouter";

function App() {
	return (
		<>
			<QueryClientProvider>
				<RouterProvider />
			</QueryClientProvider>
		</>
	);
}

export default App;
