import { Container } from "@mui/material";
import styles from "./booksPage.module.scss";
import { SearchAndBookList } from "@features/ui";
import { ScrollToTopFab } from "@shared/ui";

export default function BooksPage() {
	return (
		<>
			<Container className={styles.default}>
				<SearchAndBookList />
			</Container>
			<ScrollToTopFab />
		</>
	);
}
