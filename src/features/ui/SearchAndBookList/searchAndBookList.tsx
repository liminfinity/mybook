import { BOOKS_QUERY_DELAY } from "@entities/Book/consts";
import { useBooksQuery } from "@entities/Book/hook";
import { SearchQuery } from "@shared/context";
import { SearchForm } from "@shared/ui";
import { FormEvent, useState } from "react";
import { useDebounce } from "use-debounce";
import { Box, CircularProgress } from "@mui/material";
import styles from "./searchAndBookList.module.scss";
import { BooksNotFound, BookList } from "@entities/Book/ui";

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
			{isSuccess && !!data.length && <BookList books={data} />}
			{isSuccess && !data.length && <BooksNotFound />}
			{isLoading && (
				<Box className={styles.progressContainer}>
					<CircularProgress />
				</Box>
			)}
		</>
	);
}
