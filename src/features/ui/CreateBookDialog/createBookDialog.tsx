import { useCreateBook } from "@entities/Book/hook";
import { ICreateBookDialogProps } from "./createBookDialog.props";

import { BookFormDialog } from "@features/ui";
import { IBookFormDialogProps } from "@features/ui/BookFormDialog/bookFormDialog.props";
import { getCleanBook } from "@features/lib";
import { useBookStore } from "@entities/Book/model";

export default function CreateBookDialog(props: ICreateBookDialogProps) {
	const { mutateAsync: createBook, isError } = useCreateBook();
	const addNotice = useBookStore(store => store.addNotice);

	const handleSubmit: IBookFormDialogProps["onSubmit"] = async newBook => {
		const cleanBook = getCleanBook(newBook);
		await createBook(cleanBook);
		if (isError) {
			addNotice({
				severity: "error",
				text: "Ошибка при добавлении книги",
			});
		} else {
			addNotice({
				severity: "success",
				text: "Книга добавлена",
			});
		}
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
