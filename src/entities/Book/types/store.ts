import { GroupBy } from "./bookGrouping";

interface IBookStoreState {
	groupBy?: GroupBy;
}

interface IBookStoreActions {
	setGroupBy: (groupBy: IBookStoreState["groupBy"]) => void;
}

type IBookStore = IBookStoreState & IBookStoreActions;

export type { IBookStore };
