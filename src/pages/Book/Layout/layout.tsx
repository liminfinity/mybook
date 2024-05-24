import { Desktop, Mobile } from "@shared/hoc";
import DesktopBookHeader from "@widgets/DesktopBookHeader";
import MobileBookHeader from "@widgets/MobileBookHeader";
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
