import { IBookCardProps } from "./bookCard.props";
import { Card, CardContent, Typography } from "@mui/material";
import { StarRating } from "@shared/ui";
import BookInfoTooltip from "../BookInfoTooltip";
import BookControlsTooltip from "../BookControlsTooltip";
import styles from "./bookCard.module.scss";

export default function BookCard({
	id,
	authors,
	rating,
	title,
	ISBN,
	publicationYear,
	className = "",
}: IBookCardProps) {
	return (
		<Card className={className}>
			<CardContent className={styles.content}>
				<div className={styles.mainContent}>
					<Typography variant="h6" component="h3">
						{title}
					</Typography>
					<span className={styles.authors}>{authors.join(", ")}</span>
					<StarRating rating={rating} />
				</div>
				<div className={styles.optional}>
					<BookControlsTooltip bookId={id} />
					{(ISBN || publicationYear) && (
						<BookInfoTooltip bookId={id} />
					)}
				</div>
			</CardContent>
		</Card>
	);
}
