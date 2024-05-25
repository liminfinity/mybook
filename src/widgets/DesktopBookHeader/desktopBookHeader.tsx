import { AddBookButton } from "@entities/Book/ui";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function DesktopBookHeader() {
	return (
		<AppBar position="sticky">
			<Container>
				<Toolbar>
					<Typography
						variant="h5"
						component="h1"
						sx={{ flexGrow: 1 }}
					>
						MyBook
					</Typography>
					<AddBookButton />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
