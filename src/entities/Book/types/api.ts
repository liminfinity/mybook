import { IBook, IBookWithId } from "./book";

interface IBookAPI {
	getBooks: (searchQuery?: string) => Promise<IBookWithId[]>;
	createBook: (newBook: IBook) => Promise<IBookWithId>;
	updateBook: (bookId: string, updatedBook: IBook) => Promise<void>;
	deleteBook: (bookId: string) => Promise<void>;
}

export type { IBookAPI };
