import { ICaptionProps } from "./caption.props";

import styles from "./caption.module.scss";

import { Typography } from "@mui/material";

export default function Caption({
	children,
	variant = "h6",
	className = "",
}: ICaptionProps) {
	return (
		<Typography
			variant={variant}
			component="span"
			className={[styles.default, className].join(" ")}
		>
			{children}
		</Typography>
	);
}
