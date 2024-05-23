import {
	createBrowserRouter,
	RouterProvider as ReactRouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "*",
		element: <h1>Not found</h1>,
	},
	{
		path: "/",
		children: [
			{
				index: true,
				element: <h2>Main</h2>,
			},
		],
	},
]);

export default function RouterProvider() {
	return <ReactRouterProvider router={router} />;
}
