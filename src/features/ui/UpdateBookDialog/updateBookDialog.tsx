import { useBookById, useUpdateBook } from "@entities/Book/hook";
import { IUpdateBookDialogProps } from "./updateBookDialog.props";

import { BookFormDialog } from "@features/ui";
import { IBookFormDialogProps } from "@features/ui/BookFormDialog/bookFormDialog.props";
import { getCleanBook } from "@features/lib";
import { useBookStore } from "@entities/Book/model";

export default function UpdateBookDialog({
	bookId,
	onClose,
	...props
}: IUpdateBookDialogProps) {
	const { mutateAsync: updateBook, isError } = useUpdateBook();

	const book = useBookById(bookId);
	const addNotice = useBookStore(store => store.addNotice);

	const handleSubmit: IBookFormDialogProps["onSubmit"] =
		async updatedBook => {
			const cleanBook = getCleanBook(updatedBook);
			await updateBook([bookId, cleanBook]);
			if (isError) {
				addNotice({
					severity: "error",
					text: "Ошибка при изменении книги",
				});
			} else {
				addNotice({
					severity: "success",
					text: "Книга изменена",
				});
			}
			onClose && onClose();
		};

	return (
		<>
			{book && (
				<BookFormDialog
					{...props}
					//* Для перерендера, иначе рендер не происходит
					key={JSON.stringify(book)}
					onClose={onClose}
					onSubmit={handleSubmit}
					defaultValues={book}
					submitLabel="Изменить"
					title="Изменить параметры книги"
				/>
			)}
		</>
	);
}
