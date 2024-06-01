import { TypographyProps } from "@mui/material";
import { IDefaultProps } from "@shared/types";
import { ReactNode } from "react";

export interface ICaptionProps
	extends IDefaultProps,
		Pick<TypographyProps, "variant"> {
	children: ReactNode;
}
