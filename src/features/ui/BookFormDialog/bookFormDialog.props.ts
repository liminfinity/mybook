import { IBook } from "@entities/Book/types";
import { DialogProps } from "@mui/material";
import { IDefaultProps } from "@shared/types";
import { SubmitHandler } from "react-hook-form";

type InputBookForm = Required<Omit<IBook, "rating"> & { rating: string }>;

interface IBookFormDialogProps
	extends IDefaultProps,
		Pick<DialogProps, "open"> {
	onClose?: () => void;
	onSubmit: SubmitHandler<InputBookForm>;
	title?: string;
	submitLabel?: string;
	defaultValues?: IBook;
}

export type { InputBookForm, IBookFormDialogProps };
