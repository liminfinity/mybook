import { IntRange } from "@shared/types";

type Rating = IntRange<0, 10>;

interface IAuthor {
	name: string;
}

interface IBook {
	title: string;
	authors: IAuthor[];
	publicationYear?: number;
	rating?: Rating;
	ISBN?: string;
}

interface IBookWithId extends IBook {
	id: string;
}

interface IBook {
	title: string;
	authors: IAuthor[];
	publicationYear?: number;
	rating?: Rating;
	ISBN?: string;
}

export type { IBook, IBookWithId };
