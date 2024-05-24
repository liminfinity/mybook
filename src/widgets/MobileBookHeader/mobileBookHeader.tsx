import { AddBookFab } from "@entities/Book/ui";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styles from "./mobileBookHeader.module.scss";

export default function MobileBookHeader() {
	return (
		<>
			<AppBar position="sticky">
				<Toolbar>
					<Typography
						variant="h5"
						component="h1"
						sx={{ flexGrow: 1 }}
					>
						MyBook
					</Typography>
				</Toolbar>
			</AppBar>
			<AppBar position="fixed" className={styles.default}>
				<Toolbar>
					<AddBookFab className={styles.addBookFab} />
				</Toolbar>
			</AppBar>
		</>
	);
}
