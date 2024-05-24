import { IntRange } from "@shared/types";

type Rating = IntRange<0, 10>;

interface IBook {
	title: string;
	authors: string[];
	publicationYear?: number;
	rating: Rating;
	ISBN?: string;
}

interface IBookWithId extends IBook {
	id: string;
}

export type { IBook, IBookWithId };
