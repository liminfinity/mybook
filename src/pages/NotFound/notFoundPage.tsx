import { Container } from "@mui/material";
import { Helmet } from "react-helmet";
import { NotFoundContent } from "@widgets/index";
import styles from "./notFoundPage.module.scss";

export default function NotFoundPage() {
	return (
		<>
			<Container className={styles.default} component={"main"}>
				<NotFoundContent />
			</Container>
			<Helmet
				title="Страница не найдена – MyBook"
				meta={[{ name: "description", content: "Страница ошибки" }]}
			/>
		</>
	);
}
