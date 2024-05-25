import { IBookFormDialogProps } from "@features/ui/BookFormDialog/bookFormDialog.props";

export interface ICreateBookDialogProps
	extends Pick<IBookFormDialogProps, "open" | "onClose" | "className"> {}
