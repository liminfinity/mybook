import { TooltipProps } from "@mui/material";
import { ReactNode } from "react";

export interface ITooltipProps extends Omit<TooltipProps, "title"> {
	icon?: ReactNode;
}
