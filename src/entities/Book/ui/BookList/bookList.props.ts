import { IBookWithId } from "@entities/Book/types";
import { IDefaultProps } from "@shared/types";

export interface IBookListProps extends IDefaultProps {
	books: IBookWithId[];
}
