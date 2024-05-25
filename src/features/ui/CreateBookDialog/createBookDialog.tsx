import { useCreateBook } from "@entities/Book/hook";
import { ICreateBookDialogProps } from "./createBookDialog.props";

import { BookFormDialog } from "@features/ui";
import { IBookFormDialogProps } from "@features/ui/BookFormDialog/bookFormDialog.props";
import { getCleanBook } from "@features/lib";

export default function CreateBookDialog(props: ICreateBookDialogProps) {
	const { mutate: createBook } = useCreateBook();

	const handleSubmit: IBookFormDialogProps["onSubmit"] = newBook => {
		const cleanBook = getCleanBook(newBook);
		createBook(cleanBook);
	};

	return (
		<>
			<BookFormDialog
				{...props}
				onSubmit={handleSubmit}
				submitLabel="Добавить"
				title="Добавить новую книгу"
			/>
		</>
	);
}
