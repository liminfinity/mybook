import { IBookStore } from "@entities/Book/types";

const groupByState = (store: IBookStore) => ({
	groupBy: store.groupBy,
	setGroupBy: store.setGroupBy,
});

export { groupByState };
