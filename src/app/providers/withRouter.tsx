import {
	createBrowserRouter,
	RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import { Book, NotFound } from "@pages/index";

const router = createBrowserRouter([
	{
		path: "*",
		element: <NotFound.NotFoundPage />,
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
