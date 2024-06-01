import { IBookWithId } from "./book";

type GroupBy = "author" | "rating" | "publicationYear";

interface IGroupedBooks {
	[groupBy: string]: IBookWithId[];
}

type GroupedBookArray = [string, IBookWithId[]][];

export type { GroupBy, IGroupedBooks, GroupedBookArray };
