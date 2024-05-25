import { useBookById, useUpdateBook } from "@entities/Book/hook";
import { IUpdateBookDialogProps } from "./updateBookDialog.props";

import { BookFormDialog } from "@features/ui";
import { IBookFormDialogProps } from "@features/ui/BookFormDialog/bookFormDialog.props";
import { getCleanBook } from "@features/lib";


export default function UpdateBookDialog({
	bookId,
	onClose,
	...props
}: IUpdateBookDialogProps) {
	const { mutate: updateBook } = useUpdateBook();
	const book = useBookById(bookId);
	const handleSubmit: IBookFormDialogProps["onSubmit"] = updatedBook => {
		const cleanBook = getCleanBook(updatedBook);
		updateBook([bookId, cleanBook]);
		onClose && onClose()
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
