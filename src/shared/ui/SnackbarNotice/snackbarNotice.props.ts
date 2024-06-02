import { AlertProps, SnackbarProps } from "@mui/material";
import { IDefaultProps } from "@shared/types";

interface INotice extends Pick<AlertProps, "severity"> {
	id: string;
	isOpen: boolean;
	text: string;
}

type ISnackbarNoticeProps = Pick<SnackbarProps, "open"> &
	Pick<AlertProps, "severity"> &
	IDefaultProps &
	Required<Pick<IDefaultProps, "children">> & {
		onClose: () => void;
		//* Для срабатывания анимации ухода уведомления нужно сперва изменить состояние открытия, а потом удалить
		toggleOpen: () => void;
	};

export type { INotice, ISnackbarNoticeProps };
