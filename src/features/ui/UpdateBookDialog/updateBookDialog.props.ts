import { IBookFormDialogProps } from "@features/ui/BookFormDialog/bookFormDialog.props";

export interface IUpdateBookDialogProps
	extends Pick<IBookFormDialogProps, "open" | "onClose" | "className"> {
	bookId: string;
}
