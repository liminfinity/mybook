import { ITooltipProps } from "./tooltip.props";
import { Info } from "@mui/icons-material";
import { IconButton, Tooltip as MUITooltip } from "@mui/material";
import styles from "./tooltip.module.scss";

export default function Tooltip({
	icon,
	children,
	placement = "left",
	className = "",
	...props
}: ITooltipProps) {
	return (
		<MUITooltip
			slotProps={{
				tooltip: {
					className: [styles.tooltip, className].join(" "),
				},
			}}
			{...props}
			placement={placement}
			title={children}
		>
			<IconButton color="primary">{icon || <Info />}</IconButton>
		</MUITooltip>
	);
}
