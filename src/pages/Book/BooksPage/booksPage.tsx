import { Container } from "@mui/material";
import styles from "./booksPage.module.scss";
import { SearchAndBookList } from "@widgets/index";
import { ScrollToTopFab } from "@shared/ui";
import { Helmet } from "react-helmet";

export default function BooksPage() {
	return (
		<>
			<Container className={styles.default} component={"main"}>
				<SearchAndBookList />
			</Container>
			<ScrollToTopFab />
			<Helmet 
				title="Главная – MyBook"
				meta={[
					{name: "description", content: "Страница для управления книгами"}
				]} 
			/>
		</>
	);
}

