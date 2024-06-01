import { Stack, Typography } from "@mui/material";
import { BookList } from "@entities/Book/ui";
import { IGroupedBookListProps } from "./groupedBookList.props";
import styles from "./groupedBookList.module.scss";

export default function GroupedBookList({
	groupedBooks,
	className = "",
}: IGroupedBookListProps) {
	return (
		<Stack spacing={2} className={className} component={"ul"}>
			{groupedBooks.map(([groupingField, books], idx) => {
				return (
					<li key={idx} className={styles.group}>
						<Typography
							variant="h5"
							component="span"
							className={styles.groupTitle}
						>
							{groupingField}
						</Typography>
						<BookList books={books} className={styles.groupItems} />
					</li>
				);
			})}
		</Stack>
	);
}
