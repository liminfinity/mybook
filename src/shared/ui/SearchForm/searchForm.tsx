import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { ISearchFormProps } from "./searchForm.props";
import styles from "./searchForm.module.scss";

export default function SearchForm({
	onSubmit,
	placeholder = "Найти...",
	className = "",
	...props
}: ISearchFormProps) {
	return (
		<search className={className}>
			<form onSubmit={onSubmit}>
				<label className={styles.content}>
					<Search color="primary" />
					<TextField
						type="search"
						variant="standard"
						placeholder={placeholder}
						fullWidth
						autoComplete="off"
						{...props}
					/>
				</label>
			</form>
		</search>
	);
}
