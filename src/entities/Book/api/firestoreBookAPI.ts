import {
	addDoc,
	deleteDoc,
	getDocs,
	orderBy,
	query,
	updateDoc,
} from "firebase/firestore";
import { IBook, IBookAPI, IBookWithId } from "../types";
import { BookCollection } from "../model";
import { getBookDocument } from "../lib";

class FirestoreBookAPI implements IBookAPI {
	async getBooks(searchQuery = ""): Promise<IBookWithId[]> {
		const booksQuery = query(BookCollection, orderBy("title", "asc"));
		const booksSnapshot = await getDocs(booksQuery);
		const searchQueryRegexp = new RegExp(
			`.*${searchQuery.replace(/'/g, "")}.*`,
			"i",
		);

		const books = booksSnapshot.docs
			.map(bookDoc => ({
				...bookDoc.data(),
				id: bookDoc.id,
			}))
			.filter(book => searchQueryRegexp.test(book.title));
		return books;
	}

	async createBook(newBook: IBook): Promise<IBookWithId> {
		const bookRef = await addDoc(BookCollection, newBook);
		return {
			id: bookRef.id,
			...newBook,
		};
	}

	async deleteBook(bookId: string) {
		const docRef = getBookDocument(bookId);
		await deleteDoc(docRef);
	}

	async updateBook(bookId: string, updatedBook: IBook) {
		const docRef = getBookDocument(bookId);
		await updateDoc(docRef, updatedBook);
	}
}

export { FirestoreBookAPI };
