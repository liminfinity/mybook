import { BOOKS_QUERY_DELAY } from "@entities/Book/consts";
import { useBooksQuery, useGroupedBooks } from "@entities/Book/hook";
import { SearchQuery } from "@shared/context";
import { SearchForm } from "@shared/ui";
import { FormEvent, useState } from "react";
import { useDebounce } from "use-debounce";
import { Box, CircularProgress } from "@mui/material";
import styles from "./searchAndBookList.module.scss";
import {
	BooksNotFound,
	BookList,
	GroupedBookList,
	BookGroupingPanel,
} from "@entities/Book/ui";
import { useBookStore } from "@entities/Book/model";
import { GroupedBookArray, SortingOrder } from "@entities/Book/types";
import { ISearchAndBookList } from "./searchAndBookList.props";

export default function SearchAndBookList({
	className = "",
}: ISearchAndBookList) {
	const [searchQuery, setSearchQuery] = useState("");

	const [debouncedQuery, setDebouncedQuery] = useDebounce(
		searchQuery,
		BOOKS_QUERY_DELAY,
	);

	const groupBy = useBookStore(store => store.groupBy);

	const { data, isSuccess, isLoading } = useBooksQuery(debouncedQuery);

	const groupedBooks = useGroupedBooks(data, groupBy, SortingOrder.DESC);

	const getBooksByQuery = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDebouncedQuery(searchQuery);
	};

	return (
		<section className={[styles.default, className].join(" ")}>
			<SearchQuery.Context.Provider
				value={{
					value: searchQuery,
					handleChange: e => setSearchQuery(e.target.value),
				}}
			>
				<SearchForm onSubmit={getBooksByQuery} />
				{isSuccess && !!data.length && (
					<BookGroupingPanel className={styles.groupingPanel} />
				)}
				{isSuccess && !!data.length && !groupBy && (
					<BookList books={data} className={styles.bookList} />
				)}
				{isSuccess && !!data.length && groupBy && (
					<GroupedBookList
						groupedBooks={groupedBooks as GroupedBookArray}
						className={styles.bookList}
					/>
				)}
			</SearchQuery.Context.Provider>
			{isSuccess && !data.length && <BooksNotFound />}
			{isLoading && (
				<Box className={styles.progressContainer}>
					<CircularProgress />
				</Box>
			)}
		</section>
	);
}
