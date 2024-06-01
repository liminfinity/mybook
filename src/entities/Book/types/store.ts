import { GroupBy } from "./bookGrouping";

interface IBookStoreState {
	groupBy?: GroupBy;
	searchQuery: string;
}

interface IBookStoreActions {
	setGroupBy: (groupBy: IBookStoreState["groupBy"]) => void;
	setSearchQuery: (groupBy: IBookStoreState["searchQuery"]) => void;
}

type IBookStore = IBookStoreState & IBookStoreActions;

export type { IBookStore };
