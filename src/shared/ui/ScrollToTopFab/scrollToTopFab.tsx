import { Fab } from "@mui/material";
import styles from "./scrollToTopFab.module.scss";
import { KeyboardArrowUp } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function ScrollToTopFab() {
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		const checkScroll = () => setIsShown(scrollY > 50);
		document.addEventListener("scroll", checkScroll);
		return () => {
			document.removeEventListener("scroll", checkScroll);
		};
	}, []);

	const scrollToTop = () => {
		document.body.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<>
			{isShown && (
				<Fab
					className={styles.default}
					color="secondary"
					onClick={scrollToTop}
				>
					<KeyboardArrowUp className={styles.arrow} />
				</Fab>
			)}
		</>
	);
}
