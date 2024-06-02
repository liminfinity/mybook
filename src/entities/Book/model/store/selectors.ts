import { IBookStore } from "@entities/Book/types";

const groupBySlice = (store: IBookStore) => ({
	groupBy: store.groupBy,
	setGroupBy: store.setGroupBy,
});

const searchQuerySlice = (store: IBookStore) => ({
	searchQuery: store.searchQuery,
	setSearchQuery: store.setSearchQuery,
});

const noticeSlice = (store: IBookStore) => ({
	notices: store.notices,
	addNotice: store.addNotice,
	deleteNotice: store.deleteNotice,
	toggleNotice: store.toggleNotice,
});

export { groupBySlice, searchQuerySlice, noticeSlice };
