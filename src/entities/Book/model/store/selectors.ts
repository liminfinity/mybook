import { IBookStore } from "@entities/Book/types";

const groupBySlice = (store: IBookStore) => ({
	groupBy: store.groupBy,
	setGroupBy: store.setGroupBy,
});

const searchQuerySlice = (store: IBookStore) => ({
	searchQuery: store.searchQuery,
	setSearchQuery: store.setSearchQuery,
});

export { groupBySlice, searchQuerySlice };
