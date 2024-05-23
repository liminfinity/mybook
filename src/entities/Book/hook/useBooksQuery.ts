import { useQuery } from "@tanstack/react-query";
import { FirestoreBookAPI } from "../api";

const { getBooks } = new FirestoreBookAPI();

function useBooksQuery() {
	const query = useQuery({
		queryKey: ["books"],
		queryFn: getBooks,
		staleTime: 0,
	});

	return query;
}

export { useBooksQuery };
