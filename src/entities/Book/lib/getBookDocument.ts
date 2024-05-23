import { firestore } from "@app/index";
import { doc, DocumentReference } from "firebase/firestore";
import { IBookWithId } from "../types";

function getBookDocument(bookId: string) {
	return doc(firestore, "books", bookId) as DocumentReference<
		IBookWithId,
		IBookWithId
	>;
}

export { getBookDocument };
