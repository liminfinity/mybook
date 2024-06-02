import { ThemeProvider } from "@mui/material";
import { QueryClientProvider, RouterProvider } from "./providers";
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
