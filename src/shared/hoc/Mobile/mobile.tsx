import { useMediaQuery } from "react-responsive";
import { IMobileProps } from "./mobile.props";
import { DeviceConfig } from "@app/config";

export default function Mobile({ children }: IMobileProps) {
	const isMobile = useMediaQuery({ ...DeviceConfig.mobile });
	return isMobile ? children : null;
}
