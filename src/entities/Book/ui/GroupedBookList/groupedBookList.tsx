import { Stack } from "@mui/material";
import { BookList } from "@entities/Book/ui";
import { IGroupedBookListProps } from "./groupedBookList.props";
import styles from "./groupedBookList.module.scss";
import { Caption } from "@shared/ui";

export default function GroupedBookList({
	groupedBooks,
	className = "",
}: IGroupedBookListProps) {
	return (
		<Stack spacing={2} className={className} component={"ul"}>
			{groupedBooks.map(([groupingField, books], idx) => {
				return (
					<li key={idx} className={styles.group}>
						<Caption>{groupingField}</Caption>
						<BookList books={books} className={styles.groupItems} />
					</li>
				);
			})}
		</Stack>
	);
}
