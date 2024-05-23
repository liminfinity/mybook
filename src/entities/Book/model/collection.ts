import { firestore } from "@app/index";
import { collection, CollectionReference } from "firebase/firestore";
import { IBookWithId } from "../types/book";

const BookCollection = collection(firestore, "books") as CollectionReference<
	IBookWithId,
	IBookWithId
>;

export { BookCollection };
