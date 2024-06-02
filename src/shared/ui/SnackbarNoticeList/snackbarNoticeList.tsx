import { SnackbarNotice } from "@shared/ui";
import { ISnackbarNoticeListProps } from "./snackbarNoticeList.props";

export default function SnackbarNoticeList({
	notices,
	toggleOpen,
	onClose,
}: ISnackbarNoticeListProps) {
	return (
		<>
			{notices.map(notice => {
				return (
					<SnackbarNotice
						key={notice.id}
						severity={notice.severity}
						open={notice.isOpen}
						onClose={() => onClose(notice.id)}
						toggleOpen={() => toggleOpen(notice.id)}
					>
						{notice.text}
					</SnackbarNotice>
				);
			})}
		</>
	);
}
