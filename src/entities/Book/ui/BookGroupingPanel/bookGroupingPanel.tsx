import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from "@mui/material";
import { IBookGroupingPanelProps } from "./bookGroupingPanel.props";
import { selectors, useBookStore } from "@entities/Book/model";
import { IBookStore } from "@entities/Book/types";
import styles from "./bookGroupingPanel.module.scss";

export default function BookGroupingPanel({
	className = "",
}: IBookGroupingPanelProps) {
	const { groupBy, setGroupBy } = useBookStore(selectors.groupBySlice);

	return (
		<FormControl className={[styles.default, className].join(" ")}>
			<FormLabel>Разделить по категориям</FormLabel>
			<div className={styles.formControl}>
				<RadioGroup
					row
					value={groupBy}
					onChange={e =>
						setGroupBy(e.target.value as IBookStore["groupBy"])
					}
				>
					<FormControlLabel
						value="publicationYear"
						control={<Radio />}
						label="Год публикации"
					/>
					<FormControlLabel
						value="rating"
						control={<Radio />}
						label="Рейтинг"
					/>
					<FormControlLabel
						value="author"
						control={<Radio />}
						label="Автор"
					/>
				</RadioGroup>
				<Button
					onClick={() => setGroupBy(undefined)}
					variant="contained"
				>
					Сбросить
				</Button>
			</div>
		</FormControl>
	);
}
