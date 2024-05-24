import { IDefaultProps } from "@shared/types";

export interface IUpdateDeleteControlsProps extends IDefaultProps {
	onUpdate: () => void;
	onDelete: () => void;
}
