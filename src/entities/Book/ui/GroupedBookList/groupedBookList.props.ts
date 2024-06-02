import { GroupedBookArray } from "@entities/Book/types";
import { IDefaultProps } from "@shared/types";

export interface IGroupedBookListProps extends IDefaultProps {
	groupedBooks: GroupedBookArray;
}
