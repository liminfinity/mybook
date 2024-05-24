import { IBookWithId } from "@entities/Book/types";
import { IDefaultProps } from "@shared/types";

export interface IBookCardProps extends IDefaultProps, IBookWithId {}
