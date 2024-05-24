import { BOOKS_QUERY_DELAY } from "@entities/Book/consts";
import { useBooksQuery } from "@entities/Book/hook";
import { SearchQuery } from "@shared/context";
import { SearchForm } from "@shared/ui";
import { FormEvent, useState } from "react";
import { useDebounce } from "use-debounce";
import BookList from "../BookList";
import { CircularProgress } from "@mui/material";
import styles from "./searchAndBookList.module.scss";

export default function SearchAndBookList() {
	const [searchQuery, setSearchQuery] = useState("");

	const [debouncedQuery, setDebouncedQuery] = useDebounce(
		searchQuery,
		BOOKS_QUERY_DELAY,
	);

	const { data, isSuccess, isLoading } = useBooksQuery(debouncedQuery);

	const getBooksByQuery = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDebouncedQuery(searchQuery);
	};

	return (
		<>
			<SearchQuery.Context.Provider
				value={{
					value: searchQuery,
					handleChange: e => setSearchQuery(e.target.value),
				}}
			>
				<SearchForm onSubmit={getBooksByQuery} />
			</SearchQuery.Context.Provider>
			{isSuccess && <BookList books={data} />}
			{isLoading && (
				<div className={styles.progressContainer}>
					<CircularProgress />
				</div>
			)}
		</>
	);
}
