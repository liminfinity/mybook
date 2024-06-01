import { IDefaultProps } from "@shared/types";
import { FormHTMLAttributes, InputHTMLAttributes } from "react";

interface ISearchFormProps
	extends IDefaultProps,
		Pick<FormHTMLAttributes<HTMLFormElement>, "onSubmit">,
		Pick<
			InputHTMLAttributes<HTMLInputElement>,
			"value" | "onChange" | "placeholder"
		> {}

export type { ISearchFormProps };
