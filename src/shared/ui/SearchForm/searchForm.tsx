import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { ISearchFormProps } from "./searchForm.props";
import styles from "./searchForm.module.scss";
import { SearchQuery } from "@shared/context";

export default function SearchForm({
	onSubmit,
	placeholder = "Найти...",
	className = "",
}: ISearchFormProps) {
	const { value, handleChange } = SearchQuery.useContext();

	return (
		<search className={className}>
			<form onSubmit={onSubmit}>
				<label className={styles.content}>
					<Search color="primary" />
					<TextField
						type="search"
						variant="standard"
						placeholder={placeholder}
						value={value}
						onChange={handleChange}
						fullWidth
						autoComplete="off"
					/>
				</label>
			</form>
		</search>
	);
}
