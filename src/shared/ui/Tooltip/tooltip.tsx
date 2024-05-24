import { ITooltipProps } from "./tooltip.props";
import { Info } from "@mui/icons-material";
import { IconButton, Tooltip as MUITooltip } from "@mui/material";

export default function Tooltip({
	icon,
	children,
	placement = "left",
	...props
}: ITooltipProps) {
	return (
		<MUITooltip
			{...props}
			placement={placement}
			title={children}
		>
			<IconButton color="primary">{icon || <Info />}</IconButton>
		</MUITooltip>
	);
}
