import { useBestBook } from "@entities/Book/hook";
import { IBestBookCardProps } from "./bestBookCard.props";
import { Box, CircularProgress } from "@mui/material";
import styles from "./bestBookCard.module.scss";
import { BookCard } from "@entities/Book/ui";
import { Caption } from "@shared/ui";

export default function BestBookCard({ className = "" }: IBestBookCardProps) {
	const bestBook = useBestBook();

	return (
		<section className={className}>
			{bestBook && (
				<div className={styles.bestBookContainer}>
					<Caption>
						Рекомендация книги, проверенной годами и признанной
						лучшей!
					</Caption>
					<BookCard {...bestBook} />
				</div>
			)}
			{!bestBook && (
				<Box className={styles.progressContainer}>
					<CircularProgress />
				</Box>
			)}
		</section>
	);
}
