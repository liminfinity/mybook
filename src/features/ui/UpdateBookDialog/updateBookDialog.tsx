import { useBookById, useUpdateBook } from "@entities/Book/hook";
import { IUpdateBookDialogProps } from "./updateBookDialog.props";

import { BookFormDialog } from "@features/ui";
import { IBookFormDialogProps } from "@features/ui/BookFormDialog/bookFormDialog.props";
import { getCleanBook } from "@features/lib";

export default function UpdateBookDialog({
	bookId,
	...props
}: IUpdateBookDialogProps) {
	const { mutate: updateBook } = useUpdateBook();
	const book = useBookById(bookId);

	const handleSubmit: IBookFormDialogProps["onSubmit"] = updatedBook => {
		const cleanBook = getCleanBook(updatedBook);
		updateBook([bookId, cleanBook]);
	};

	return (
		<>
			{book && (
				<BookFormDialog
					{...props}
					onSubmit={handleSubmit}
					defaultValues={book}
					submitLabel="Изменить"
					title="Изменить параметры книги"
				/>
			)}
		</>
	);
}
