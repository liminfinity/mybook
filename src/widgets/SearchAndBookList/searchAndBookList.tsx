import { BOOKS_QUERY_DELAY } from "@entities/Book/consts";
import { useBooksQuery, useGroupedBooks } from "@entities/Book/hook";
import { SearchForm } from "@shared/ui";
import { FormEvent } from "react";
import { useDebounce } from "use-debounce";
import { Box, CircularProgress } from "@mui/material";
import styles from "./searchAndBookList.module.scss";
import {
	BooksNotFound,
	BookList,
	GroupedBookList,
	BookGroupingPanel,
} from "@entities/Book/ui";
import { selectors, useBookStore } from "@entities/Book/model";
import { GroupedBookArray, SortingOrder } from "@entities/Book/types";
import { ISearchAndBookList } from "./searchAndBookList.props";

export default function SearchAndBookList({
	className = "",
}: ISearchAndBookList) {
	const { searchQuery, setSearchQuery } = useBookStore(
		selectors.searchQuerySlice,
	);

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
			<SearchForm
				onSubmit={getBooksByQuery}
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
			/>
			{isSuccess && !!data.length && (
				<BookGroupingPanel className={styles.groupingPanel} />
			)}
			{isSuccess && !!data.length && !groupBy && (
				<BookList books={data} />
			)}
			{isSuccess && !!data.length && groupBy && (
				<GroupedBookList
					groupedBooks={groupedBooks as GroupedBookArray}
				/>
			)}
			{isSuccess && !data.length && <BooksNotFound />}
			{isLoading && (
				<Box className={styles.progressContainer}>
					<CircularProgress />
				</Box>
			)}
		</section>
	);
}
