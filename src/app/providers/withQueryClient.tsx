import { IDefaultProps } from "@shared/types";
import {
	QueryClientProvider as ReactQueryClientProvider,
	QueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function QueryClientProvider({ children }: IDefaultProps) {
	return (
		<ReactQueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</ReactQueryClientProvider>
	);
}
