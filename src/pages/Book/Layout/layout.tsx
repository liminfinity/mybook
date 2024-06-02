import { Desktop, Mobile } from "@shared/hoc";
import { MobileBookHeader, DesktopBookHeader } from "@widgets/index";
import { Outlet } from "react-router-dom";
import { selectors, useBookStore } from "@entities/Book/model";
import { SnackbarNoticeList } from "@shared/ui";

export default function Layout() {
	const { notices, deleteNotice, toggleNotice } = useBookStore(
		selectors.noticeSlice,
	);

	return (
		<>
			<Desktop>
				<DesktopBookHeader />
				<Outlet />
			</Desktop>
			<Mobile>
				<MobileBookHeader />
				<Outlet />
			</Mobile>
			<SnackbarNoticeList
				notices={notices}
				onClose={deleteNotice}
				toggleOpen={toggleNotice}
			/>
		</>
	);
}
