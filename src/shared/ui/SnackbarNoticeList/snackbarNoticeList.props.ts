import { IDefaultProps } from "@shared/types";
import { INotice } from "../SnackbarNotice";

export interface ISnackbarNoticeListProps extends IDefaultProps {
	notices: INotice[];
	onClose: (noticeId: string) => void;

	//* Для срабатывания анимации ухода уведомления нужно сперва изменить состояние открытия, а потом удалить
	toggleOpen: (noticeId: string) => void;
}
