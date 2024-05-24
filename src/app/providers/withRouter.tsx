import {
	createBrowserRouter,
	RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import { Book } from "@pages/index";

const router = createBrowserRouter([
	{
		path: "*",
		element: <h1>Not found</h1>,
	},
	{
		path: "/",
		element: <Book.Layout />,
		children: [
			{
				index: true,
				element: <Book.BooksPage />,
			},
		],
	},
]);

export default function RouterProvider() {
	return <ReactRouterProvider router={router} />;
}
