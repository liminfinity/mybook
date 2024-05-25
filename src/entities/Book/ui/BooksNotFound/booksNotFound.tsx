import { Book } from "@mui/icons-material";
import { IBooksNotFoundProps } from "./booksNotFound.props";
import { Box, Typography } from "@mui/material";
import styles from "./booksNotFound.module.scss";

export default function BooksNotFound({ className = "" }: IBooksNotFoundProps) {
	return (
		<Box className={[styles.default, className].join(" ")}>
			<Book color="primary" />
			<Typography variant="h6" component="span">
				Таких книг у нас нет
			</Typography>
		</Box>
	);
}
