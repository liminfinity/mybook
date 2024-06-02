import { INotice } from "@shared/ui/SnackbarNotice";
import { GroupBy } from "./bookGrouping";

interface IBookStoreState {
	groupBy?: GroupBy;
	searchQuery: string;
	notices: INotice[];
}

interface IBookStoreActions {
	setGroupBy: (groupBy: IBookStoreState["groupBy"]) => void;
	setSearchQuery: (groupBy: IBookStoreState["searchQuery"]) => void;
	addNotice: (newNotice: Omit<INotice, "id" | "isOpen">) => void;
	deleteNotice: (noticeId: string) => void;
	toggleNotice: (noticeId: string) => void;
}

type IBookStore = IBookStoreState & IBookStoreActions;

export type { IBookStore };
