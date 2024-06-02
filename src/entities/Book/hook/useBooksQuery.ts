import { useQuery } from "@tanstack/react-query";
import { FirestoreBookAPI } from "../api";

const { getBooks } = new FirestoreBookAPI();

function useBooksQuery(searchQuery = "") {
	const query = useQuery({
		queryKey: ["books", searchQuery],
		queryFn: () => getBooks(searchQuery),
		//* swr стратегия
		staleTime: 0,
		gcTime: 1000 * 60 * 10, //* 10 минут - время хранения кеша (примерное время сессии пользователя)
	});

	return query;
}

export { useBooksQuery };
