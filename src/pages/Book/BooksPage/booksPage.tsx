import { Container } from "@mui/material";
import styles from "./booksPage.module.scss";
import { SearchAndBookList } from "@entities/Book/ui";

export default function BooksPage() {
	return (
		<Container className={styles.default}>
			<SearchAndBookList />
		</Container>
	);
}
