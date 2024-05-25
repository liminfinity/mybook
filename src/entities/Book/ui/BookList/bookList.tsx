import { Grid } from "@mui/material";
import { BookCard } from "@entities/Book/ui";
import styles from "./bookList.module.scss";
import { IBookListProps } from "./bookList.props";

export default function BookList({ books, className = "" }: IBookListProps) {
	return (
		<Grid className={className} container spacing={2} columns={12}>
			{books.map(book => {
				return (
					<Grid
						className={styles.cardItem}
						item
						sm={12}
						md={6}
						key={book.id}
					>
						<BookCard className={styles.card} {...book} />
					</Grid>
				);
			})}
		</Grid>
	);
}
