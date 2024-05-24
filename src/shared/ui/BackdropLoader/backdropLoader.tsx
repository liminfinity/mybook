import { IBackdropLoaderProps } from "./backdropLoader.props";
import { Backdrop, CircularProgress } from "@mui/material";
import styles from "./backdropLoader.module.scss";

export default function BackdropLoader({ open = false }: IBackdropLoaderProps) {
	return (
		<Backdrop
			sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
			open={open}
			className={styles.default}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
}
