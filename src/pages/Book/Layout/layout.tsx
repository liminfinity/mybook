import { Desktop, Mobile } from "@shared/hoc";
import { MobileBookHeader, DesktopBookHeader } from "@widgets/index";
import { Outlet } from "react-router-dom";

export default function Layout() {
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
		</>
	);
}
