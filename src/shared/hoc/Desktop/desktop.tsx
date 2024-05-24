import { useMediaQuery } from "react-responsive";
import { IDesktopProps } from "./desktop.props";
import { DeviceConfig } from "@app/config";

export default function Desktop({ children }: IDesktopProps) {
	const isDesktop = useMediaQuery({ ...DeviceConfig.desktop });
	return isDesktop ? children : null;
}
