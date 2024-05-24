import { ThemeProvider } from "@mui/material";
import QueryClientProvider from "./providers/withQueryClient";
import RouterProvider from "./providers/withRouter";
import { MUIThemeConfig } from "./config";
import "./styles/globals.scss";

function App() {
	return (
		<>
			<QueryClientProvider>
				<ThemeProvider theme={MUIThemeConfig}>
					<RouterProvider />
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
