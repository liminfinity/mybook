import { Button, Typography } from "@mui/material";
import styles from "./notFoundContent.module.scss";
import { Image } from "@shared/ui";
import { Link as RouterLink } from "react-router-dom";

export default function NotFoundContent() {
	return (
		<section className={styles.default}>
			<Image src="/404Girl.png" width={150} alt="" />
			<div className={styles.content}>
				<div className={styles.description}>
					<Typography
						variant="h5"
						component="span"
						className={styles.oops}
					>
						Упс!
					</Typography>
					<Typography variant="h5" component="span">
						Такой страницы не существует
					</Typography>
				</div>
				<RouterLink to={"/"} className={styles.link}>
					{/* Стили кнопки нельзя передать ссылке напрямую */}
					<Button variant="contained" fullWidth role="presentation">
						На главную
					</Button>
				</RouterLink>
			</div>
		</section>
	);
}
