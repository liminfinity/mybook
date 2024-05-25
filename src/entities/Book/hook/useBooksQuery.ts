import { useQuery } from "@tanstack/react-query";
import { FirestoreBookAPI } from "../api";

const { getBooks } = new FirestoreBookAPI();

function useBooksQuery(searchQuery = "") {
	const query = useQuery({
		queryKey: ["books"],
		queryFn: () => getBooks(searchQuery),
		staleTime: 0,
	});

	return query;
}

export { useBooksQuery };
