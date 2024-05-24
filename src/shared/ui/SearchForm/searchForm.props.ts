import { IDefaultProps } from "@shared/types";
import { FormEventHandler } from "react";

interface ISearchFormProps extends IDefaultProps {
	placeholder?: string;
	onSubmit: FormEventHandler<HTMLFormElement>;
}

export type { ISearchFormProps };
