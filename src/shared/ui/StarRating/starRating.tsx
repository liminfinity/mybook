import { IStarRatingProps } from "./starRating.props";
import { Star } from "@mui/icons-material";
import styles from "./starRating.module.scss";

export default function StarRating({
	rating,
	className = "",
}: IStarRatingProps) {
	return (
		<div
			className={[
				styles.default,
				rating && styles.hasRating,
				className,
			].join(" ")}
		>
			<Star className={styles.star} />
			<span>{rating ?? "Нет оценок"}</span>
		</div>
	);
}
