import { ISnackbarNoticeProps } from "./snackbarNotice.props";
import { Alert, Slide, SlideProps, Snackbar } from "@mui/material";
import styles from "./snackbarNotice.module.scss";
import { AUTO_HIDE_DURATION, TRANSITION_DURATION } from "./consts";

export default function SnackbarNotice({
	open = false,
	onClose,
	toggleOpen,
	severity = "info",
	children,
	className = "",
}: ISnackbarNoticeProps) {
	const handleClose = (
		_event: React.SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === "clickaway") return;
		toggleOpen();
		setTimeout(() => {
			onClose();
		}, TRANSITION_DURATION);
	};

	return (
		<Snackbar
			open={open}
			onClose={handleClose}
			anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
			autoHideDuration={AUTO_HIDE_DURATION}
			TransitionComponent={SlideTransition}
			transitionDuration={TRANSITION_DURATION}
			className={className}
		>
			<Alert severity={severity} className={styles.alert}>
				{children}
			</Alert>
		</Snackbar>
	);
}

function SlideTransition(props: SlideProps) {
	return <Slide {...props} direction="right" />;
}
