import { AddBookButton } from "@entities/Book/ui";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function DesktopBookHeader() {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
					MyBook
				</Typography>
				<AddBookButton />
			</Toolbar>
		</AppBar>
	);
}
