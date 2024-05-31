import { IDefaultProps } from "@shared/types";
import { ImgHTMLAttributes } from "react";

export interface IImageProps
	extends IDefaultProps,
		ImgHTMLAttributes<HTMLImageElement> {}
